import foodpic from '../assets/foodpic.jpg'

const RecipeItem = () => {
    return (
        <div>
            <img className='h-48' src={foodpic} alt="" />
            <h1 className='text-[23px]'>Shakshuka</h1>
            <p className='text-md text-[#626262]'>By Melissa Brown</p>
        </div>
    )
}

export default RecipeItem