import { useEffect, useState } from 'react'
import RecipeItem from '../RecipeItem';

const MyRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8800/recipes')
            .then(res => res.json())
            .then(data => setRecipes(data))
            .catch(err => console.error("Error fetching recipes:", err));
    }, []);

    return (
        <div className='w-full my-3'>
            <h1 className='text-[20px] font-medium text-[#088310]'>My Recipes</h1>
            <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-7 items-center my-7'>
                {recipes.length > 0 && recipes.map((recipe) => (
                    <div key={recipe._id}>
                        <RecipeItem {...recipe} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyRecipes