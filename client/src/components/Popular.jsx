import { useEffect, useState } from 'react'
import RecipeItem from './RecipeItem'
import { Link } from 'react-router-dom';
import newRequest from '../utils/newRequest';

const Popular = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await newRequest.get('recipes/popularRecipes');
                if (res.status === 401) {
                    console.error("Error fetching recipes");
                }
                const data = res.data;

                setRecipes(data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();

    }, []);

    return (
        <div className="w-full bg-[#f7f7f7]">
            <div className="w-[90%] md:container lg:w-[90%] xl:container mx-auto py-2">
                <div className="flex flex-col md:flex-row justify-between md:items-center my-4">
                    <div>
                        <h1 className="my-1 text-[32px] font-semibold">Latest Recipes</h1>
                        <p className="text-[19px] text-[#4c4c4c]">Our latest & most popular recipes of the week</p>
                    </div>
                    <div className="mt-2">
                        <Link to='/recipes'>
                            <p className="text-[#1d9451] text-[19px]">See all</p>
                        </Link>
                    </div>
                </div>
                <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-7 items-center my-7'>
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