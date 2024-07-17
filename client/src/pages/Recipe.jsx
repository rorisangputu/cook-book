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
        fetch(`https://cook-book-api-0tn7.onrender.com/recipes/recipe/${id}`)
            .then(response => response.json())
            .then(recipe => setRecipeDet(recipe))
            .catch(error => console.error('Error fetching recipe:', error));
    }, [id]);

    if (!recipeDet) return null;

    return (
        <div className="w-full bg-[#edede9] py-9">
            <div className="w-[90%] md:container lg:w-[90%] xl:container mx-auto rounded-2xl border shadow-md bg-white flex flex-col">
                <div className='flex items-center justify-center h-auto md:h-[40vh] overflow-hidden'>
                    <img src={recipeDet.img} alt={recipeDet.name} className='rounded-tl-2xl rounded-tr-2xl w-full' />
                </div>
                <div className="my-2 mx-4">
                    <div className='flex justify-between items-center'>
                        <div>
                            <h1 className="text-[25px] md:text-[30px] font-semibold">{recipeDet.name}</h1>
                            <p className="text-xs md:text-[15px]">By {recipeDet.author.username}</p>
                        </div>
                        <div className='flex gap-5 items-center'>
                            <FaRegBookmark className='h-6 w-6 cursor-pointer' />
                            <FiShare className='h-6 w-6 cursor-pointer' />
                        </div>
                    </div>
                    <div className="flex gap-3 my-3 text-[#737373]">
                        <span className='flex gap-1 items-center'>
                            <IoMdTime className='h-5 w-5' />
                            <p className='text-[15px]'>10 mins</p>
                        </span>
                        <span className='flex gap-1 items-center'>
                            <BsBarChart className='h-5 w-5' />
                            <p className='text-[15px]'>{recipeDet.difficulty}</p>
                        </span>
                        <span className='flex gap-1 items-center'>
                            <RiFireLine className='h-5 w-5' />
                            <p className='text-[15px]'>513 kcal</p>
                        </span>
                    </div>
                    <div className='mb-3 mt-3'>
                        <h2 className='mb-2 text-[18px] md:text-[23px] font-medium'>Description</h2>
                        <p className='text-[#6b6b6b] md:text-[17px]'>{recipeDet.desc}</p>
                    </div>
                    <hr className='border-t border-gray-300 w-[99%] mx-auto' />
                    <div className='my-3'>
                        <h1 className='text-[18px] md:text-[23px] font-medium'>Recipe</h1>
                        <div className='my-4 md:text-[18px]' dangerouslySetInnerHTML={{ __html: recipeDet.content }} />
                    </div>
                </div>
                <hr className='border-t border-gray-300 w-[99%] mx-auto' />
                <div className='mx-4 my-3'>
                    <h2 className='text-[19px] font-semibold'>Reviews</h2>
                    {recipeDet.reviews && recipeDet.reviews.length > 0 ? (
                        recipeDet.reviews.map((review, index) => (
                            <Review key={index} review={review} />
                        ))
                    ) : (
                        <p>No reviews yet. Be the first to review this recipe!</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Recipe;
