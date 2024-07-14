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
        <div className="w-full shadow-md h-10">
            <div className="w-[90%] md:container mx-auto flex items-center justify-between my-3">
                <div className="flex items-center">
                    <LuCookie className=" h-7 w-7" />
                </div>
                <div className="flex ">

                    <div>
                        <ul className="flex gap-3">
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