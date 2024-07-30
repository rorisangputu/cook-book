import { useEffect, useState } from 'react'
import RecipeItem from '../RecipeItem';
import { useParams } from 'react-router-dom';
import getCurrentUser from '../../utils/getCurrentUser';
import { useNavigate } from 'react-router-dom';

const MyRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://taste-book-api.onrender.com/profile/${id}/myrecipes`, {
                    credentials: 'include'
                });

                if (response.status === 401) {
                    // Handle unauthorized access
                    console.error("Unauthorized access");
                    navigate('/login');
                    return;
                }

                const recipes = await response.json();
                setRecipes(recipes);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        fetchData();
    }, [id, navigate]);

    const currentUser = getCurrentUser();
    if (!currentUser) {
        return <div>Please log in to view your profile.</div>;
    }
    if (!recipes) {
        return <div>Loading...</div>;
    }

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