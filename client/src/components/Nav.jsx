// import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
// import { UserContext } from "../UserContext";

const Nav = () => {

    return (
        <div className="w-full shadow-md h-10">
            <div className="w-[90%] md:container mx-auto flex items-center justify-between my-3">
                <div className="">
                    <h1 className="text-[20px] font-semibold">Cook Book</h1>
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
                            <li>
                                <Link to="/login">Login </Link>
                            </li>
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Nav