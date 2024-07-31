import { useEffect, useState } from 'react'
import RecipeItem from './RecipeItem'
import newRequest from '../utils/newRequest';

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await newRequest.get('recipes');
            if (res.status === 401) {
                console.log("Cant find recipes")
            }
            const data = res.data;
            setRecipes(data);
        }
        fetchData();

    }, []);

    return (
        <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-7 items-center my-7'>
            {recipes.length > 0 && recipes.map((recipe) => (
                <div key={recipe._id}>
                    <RecipeItem {...recipe} />
                </div>
            ))}
        </div>
    )
}

export default RecipeList