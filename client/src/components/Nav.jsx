import { Link } from "react-router-dom"
// import { UserContext } from "../UserContext";
import { LuCookie } from "react-icons/lu";
import getCurrentUser from "../utils/getCurrentUser"
import newRequest from "../utils/newRequest";
import { useNavigate } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useState } from "react";


const Nav = () => {

    const currentUser = getCurrentUser();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await newRequest.post("/auth/logout");
            localStorage.setItem("currentUser", null);
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    };
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }


    return (
        <div className="w-full h-10 lg:h-16 flex items-center">
            <div className="w-[90%] xl:container mx-auto flex items-center justify-between ">
                <div className="flex items-center">
                    <LuCookie className=" h-7 w-7" />
                </div>
                <div className="flex ">

                    <div>
                        <ul className="hidden md:flex gap-9 text-[20px]">
                            <li>
                                <Link to="/">Home </Link>
                            </li>
                            <li>
                                <Link to="/recipes">Recipes</Link>
                            </li>
                            {currentUser ? (
                                <>
                                    <li>
                                        <Link to="/profile">Profile</Link>
                                    </li>
                                    <li>
                                        <Link to="/addrecipe">Add Recipe</Link>
                                    </li>
                                    <Link onClick={handleLogout}>
                                        Logout
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <Link to="/login">Login</Link>
                                    </li>
                                    <li>
                                        <Link to="/register">Register</Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                    {/* MENU BUTTON */}
                    <div onClick={handleNav} className='block md:hidden mr-5'>
                        {nav ? <AiOutlineClose className='text-black' size={20} /> : <AiOutlineMenu className='text-black' size={20} />}

                    </div>

                    {/* HAMBURGER MENU */}
                    <div className={nav ? `fixed left-0 top-0 w-[60%] h-full border-r 
                 border-r-gray-900 bg-white ease-in-out duration-500 `
                        : `fixed left-[-100%]`}
                    >
                        <h1 className='w-full text-3xl font-bold m-4 pt-5 text-[#00df9a]'>
                            Taste Book.
                        </h1>
                        <ul onClick={() => { setNav(false) }} className='cursor-pointer uppercase '>
                            <li className='p-4 pl-4 hover:bg-[#000100] hover:text-white border-b border-b-gray-600'>
                                <Link to="/">Home </Link>
                            </li>
                            <li className='p-4 pl-4 hover:bg-[#000100] hover:text-white border-b border-b-gray-600'>
                                <Link to="/recipes">Recipes</Link>
                            </li>
                            {currentUser ? (
                                <>
                                    <li className='p-4 pl-4 hover:bg-[#000100] hover:text-white border-b border-b-gray-600'>
                                        <Link to="/profile">Profile</Link>
                                    </li>
                                    <li className='p-4 pl-4 hover:bg-[#000100] hover:text-white'>
                                        <Link to="/addrecipe">Add Recipe</Link>
                                    </li>
                                    <Link onClick={handleLogout}>
                                        Logout
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <li className='p-4 pl-4 hover:bg-[#000100] hover:text-white border-b border-b-gray-600'>
                                        <Link to="/login">Login</Link>
                                    </li>
                                    <li className='p-4 pl-4 hover:bg-[#000100] hover:text-white'>
                                        <Link to="/register">Register</Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav