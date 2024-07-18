import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const RecipeItem = ({ _id, name, img, author }) => {
    console.log(author)
    return (
        <div className='w-auto flex flex-col items-center justify-between p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
            <Link to={`/recipe/${_id}`}>
                <div className='h-auto w-full flex justify-center overflow-hidden rounded-lg'>
                    <img className='h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] md:h-[200px] md:w-[200px] lg:h-[250px] lg:w-[300px] xl:w-[300px] xl:h-[300px] rounded-lg' src={img} alt={name} />
                </div>
                <div className='text-center'>
                    <h1 className='text-[20px]  xl:text-[24px] mt-3 mb-1 font-semibold text-gray-800'>{name}</h1>
                    <p className='text-sm xl:text-md text-gray-600'>By {author.username}</p>
                </div>
            </Link>
        </div>
    );
};

RecipeItem.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    author: PropTypes.shape({
        username: PropTypes.string.isRequired,
        img: PropTypes.string, // Optional if your schema includes author's image
        // Add more properties as needed
    }).isRequired,
};

export default RecipeItem;
