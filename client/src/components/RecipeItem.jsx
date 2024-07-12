import { Link } from 'react-router-dom'
import foodpic from '../assets/foodpic.jpg'

const RecipeItem = () => {
    return (
        <div>
            <Link to={`/recipe/:id`}>
                <img className='h-48 rounded-2xl' src={foodpic} alt="" />

                <h1 className='text-[23px] mt-3 mb-1 font-medium'>Shakshuka</h1>

                <p className='text-md text-[#626262]'>By Melissa Brown</p>
            </Link>
        </div>
    )
}

export default RecipeItem