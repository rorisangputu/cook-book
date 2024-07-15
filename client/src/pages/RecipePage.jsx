import RecipeList from "../components/RecipeList"
import getCurrentUser from "../utils/getCurrentUser"
import { Link } from "react-router-dom"
const RecipePage = () => {
    const currentUser = getCurrentUser()
    return (
        <div className="w-full">
            <div className="w-[90%] md:container lg:w-[90%] xl:container mx-auto">
                {!currentUser ? "" : (<Link to={`/addrecipe`}>
                    <button className="bg-black text-white font-medium rounded-2xl p-2 my-3">Add Recipe</button>
                </Link>)}
                <RecipeList />
            </div>

        </div>
    )
}

export default RecipePage