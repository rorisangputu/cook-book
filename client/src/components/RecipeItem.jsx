import { Link } from 'react-router-dom'
import foodpic from '../assets/foodpic.jpg'

const RecipeItem = () => {
    return (
        <div>
            <Link to={`/recipe/:id`}>
                <img className='h-42 rounded-2xl' src={foodpic} alt="" />

                <h1 className='text-[20px] mt-3 mb-1 font-medium'>Shakshuka</h1>

                <p className='text-sm text-[#626262]'>By Melissa Brown</p>
            </Link>
        </div>
    )
}

export default RecipeItem