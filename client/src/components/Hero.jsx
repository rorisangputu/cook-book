import { Link } from 'react-router-dom'
import bowl from '../assets/thai.png'

const Hero = () => {
    return (
        <div className='w-full bg-[#1f5129] h-[80vh] flex justify-center '>
            <div className='w-[90%] md:container mx-auto flex items-center lg:justify-between '>
                <div className='text-white py-5 flex flex-col text-center lg:text-left lg:w-1/2 '>
                    <h1 className='text-[65px] xl:mr-56 font-semibold'>The Easiest Way To Make Your Favourite Meal</h1>
                    <p className='my-4 mx-9 md:mx-0 xl:mr-48  text-[16px] text-[#f2f2f2]'>New school twists to old school recipes! Discover over 1000+ recipes
                        your hand. The easiest way to cook.
                    </p>
                    <Link to={'/recipes'}>
                        <button className='px-6 py-3 my-4  text-[16px] rounded-xl bg-[#1d9451]'>Explore Recipes</button>
                    </Link>
                </div>
                <div className='hidden lg:block w-1/2 '>
                    <img src={bowl} alt="" className='w-auto h-[500px] xl:h-[600px]' />
                </div>
            </div>
        </div>
    )
}

export default Hero