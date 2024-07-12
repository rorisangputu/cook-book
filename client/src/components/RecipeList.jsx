
import RecipeItem from './RecipeItem'

const RecipeList = () => {
    return (
        <div className='w-full grid grid-cols-2 md:grid-cols-3 gap-7 items-center'>
            {[1, 2, 3,].map((recipe, index) => (
                <RecipeItem key={index} />
            ))}
        </div>
    )
}

export default RecipeList