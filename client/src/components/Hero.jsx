import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className='w-full bg-[#1f5129] h-[80vh] flex justify-center '>
            <div className='w-[90%] md:container mx-auto flex items-center  '>
                <div className='text-white py-5 flex flex-col text-center'>
                    <h1 className='text-[65px] font-semibold'>The Easiest Way To Make Your Favourite Meal</h1>
                    <p className='my-4 mx-9 md:mx-0 text-[16px] text-[#f2f2f2]'>New school twists to old school recipes! Discover over 1000+ recipes
                        your hand. The easiest way to cook.
                    </p>
                    <Link to={'/recipes'}>
                        <button className='px-6 py-3 my-4 text-[16px] rounded-xl bg-[#1d9451]'>Explore Recipes</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero