import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

const RecipeItem = ({ _id, name, img, author }) => {
    return (
        <div className='w-auto flex flex-col items-center justify-between'>
            <Link to={`/recipe/${_id}`}>
                <div className='h-auto w-full overflow-hidden '>
                    <img className='h-[200px] w-[200px] md:h-[200px] md:w-[200px] lg:h-[250px] lg:w-[300px] xl:w-[400px] xl:h-[400px] rounded-2xl' src={img} alt="" />
                </div>

                <h1 className='text-[20px] xl:text-[30px] mt-3 mb-1 font-medium'>{name}</h1>

                <p className='text-sm xl:text-lg text-[#626262]'>By {author.username}</p>
            </Link>
        </div>
    )
}

RecipeItem.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
};

export default RecipeItem