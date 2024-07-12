import RecipeList from "../components/RecipeList"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="w-full">
            <div className="w-[90%] md:container mx-auto">
                <Link to={`/addrecipe`}>
                    <button className="bg-black text-white font-medium rounded-2xl p-2 my-3">Add Recipe</button>
                </Link>
                <RecipeList />
            </div>

        </div>
    )
}

export default Home