import { useEffect, useState } from 'react'
import RecipeItem from './RecipeItem'

const Popular = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8800/recipes/popularRecipes')
            .then(res => res.json())
            .then(data => setRecipes(data))
            .catch(err => console.error("Error fetching recipes:", err));
    }, []);
    return (
        <div className="w-full bg-[#f7f7f7]">
            <div className="w-[90%] md:container mx-auto py-2">
                <div className="flex flex-col md:flex-row justify-between md:items-center my-4">
                    <div>
                        <h1 className="my-1 text-[32px] font-semibold">Popular Recipes Of The Week</h1>
                        <p className="text-[19px] text-[#4c4c4c]">Our most popular recipes of the week</p>
                    </div>
                    <div className="mt-2">
                        <p className="text-[#1d9451] text-[19px]">See all</p>
                    </div>
                </div>
                <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-7 items-center my-7'>
                    {recipes.length > 0 && recipes.map((recipe) => (
                        <div key={recipe._id}>
                            <RecipeItem {...recipe} />
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Popular