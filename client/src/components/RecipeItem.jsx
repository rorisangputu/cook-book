import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

const RecipeItem = ({ _id, name, img, author }) => {
    return (
        <div>
            <Link to={`/recipe/${_id}`}>
                <img className='h-[200px] w-[200px] rounded-2xl' src={img} alt="" />

                <h1 className='text-[20px] mt-3 mb-1 font-medium'>{name}</h1>

                <p className='text-sm text-[#626262]'>By {author.username}</p>
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