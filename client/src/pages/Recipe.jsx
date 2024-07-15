//import foodpic from '../assets/foodpic.jpg'
import { IoMdTime } from "react-icons/io";
import { BsBarChart } from "react-icons/bs";
import { RiFireLine } from "react-icons/ri";
import { FaRegBookmark } from "react-icons/fa6";
import { FiShare } from "react-icons/fi";
import Review from '../components/Review';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Recipe = () => {
    const [recipeDet, setRecipeDet] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:8800/recipes/recipe/${id}`)
            .then(response => {
                response.json().then(recipe => {
                    setRecipeDet(recipe)
                });
            });
    }, [])

    if (!recipeDet) return '';

    return (
        <div className="w-full bg-[#edede9] py-9 ">
            <div className="w-[90%] md:container lg:w-[90%] xl:container mx-auto rounded-2xl border shadow-md bg-white flex flex-col">
                <div className='flex items-center justify-center h-auto md:h-[40vh] overflow-hidden '>
                    <img src={recipeDet.img} alt="" className='rounded-tl-2xl rounded-tr-2xl w-full ' />
                </div>
                <div className="my-2 mx-4">
                    <div className='flex justify-between items-center'>
                        <div>
                            <h1 className="text-[25px] md:text-[30px] font-semibold">{recipeDet.name}</h1>
                            <p className="text-xs md:text-[15px]">By {recipeDet.author.username}</p>
                        </div>
                        <div className='flex gap-5 items-center'>
                            <FaRegBookmark className='h-10' />
                            <FiShare className='h-5 w-5' />
                        </div>

                    </div>
                    <div className="flex gap-3 my-3 text-[#737373]">
                        <span className='flex gap-1 items-center'>
                            <IoMdTime />
                            <p className='text-[15px]'>10 mins</p>
                        </span>
                        <span className='flex gap-1 items-center'>
                            <BsBarChart />
                            <p className='text-[15px]'>{recipeDet.difficulty}</p>
                        </span>
                        <span className='flex gap-1 items-center'>
                            <RiFireLine />
                            <p className='text-[15px]'>513 kcal</p>
                        </span>
                    </div>
                    <div className='mb-3 mt-3'>
                        <h2 className='mb-2 text-[18px] md:text-[23px] font-medium'>Description</h2>
                        <p className='text-[#6b6b6b] md:text-[17px]'>
                            {recipeDet.desc}
                        </p>
                    </div>
                    <hr className='text-[#a0a0a0] w-[99%] mx-auto' />
                    <div className='my-3'>
                        <h1 className='text-[18px] md:text-[23px] font-medium'>Recipe</h1>
                        <div className='my-4 md:text-[18px]' dangerouslySetInnerHTML={{ __html: recipeDet.content }} />


                    </div>
                </div>
                <hr className='text-[#a0a0a0] w-[99%] mx-auto' />
                <div className='mx-4 my-3'>
                    <h2 className='text-[19px] font-semibold'>Reviews</h2>
                    <Review />
                    <Review />
                    <Review />
                </div>
            </div>
        </div>
    )
}

export default Recipe