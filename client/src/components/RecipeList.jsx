import { useEffect, useState } from 'react'
import RecipeItem from './RecipeItem'

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8800/recipes/').then(res => {
            res.json().then(recipes => {
                setRecipes(recipes)
            })
        })
    })

    return (
        <div className='w-full grid grid-cols-2 md:grid-cols-3 gap-7 items-center'>
            {recipes.length > 0 && recipes.map((recipe) => (
                <div key={recipe._id}>
                    <RecipeItem {...recipe} />
                </div>
            ))}
        </div>
    )
}

export default RecipeList