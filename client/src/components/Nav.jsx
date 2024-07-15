import { Link } from "react-router-dom"
// import { UserContext } from "../UserContext";
import { LuCookie } from "react-icons/lu";
import getCurrentUser from "../utils/getCurrentUser"
import newRequest from "../utils/newRequest";
import { useNavigate } from 'react-router-dom'

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



    return (
        <div className="w-full h-10 lg:h-16 flex items-center">
            <div className="w-[90%] md:container lg:w-[90%] xl:container mx-auto flex items-center justify-between ">
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

                </div>
            </div>
        </div>
    )
}

export default Nav