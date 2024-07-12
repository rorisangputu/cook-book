import foodpic from '../assets/foodpic.jpg'
import { IoMdTime } from "react-icons/io";
import { BsBarChart } from "react-icons/bs";
import { RiFireLine } from "react-icons/ri";
import { FaRegBookmark } from "react-icons/fa6";
import { FiShare } from "react-icons/fi";
import Review from '../components/Review';

const Recipe = () => {
    return (
        <div className="w-full bg-[#edede9] py-9 ">
            <div className="w-[90%] md:container mx-auto rounded-2xl border shadow-md bg-white flex flex-col">
                <div className=''>
                    <img src={foodpic} alt="" className='rounded-tl-2xl rounded-tr-2xl' />
                </div>
                <div className="my-2 mx-4">
                    <div className='flex justify-between items-center'>
                        <div>
                            <h1 className="text-[25px]">Shakshuka</h1>
                            <p className="text-xs">By Melissa Brown</p>
                        </div>
                        <div className='flex gap-5'>
                            <FaRegBookmark />
                            <FiShare />
                        </div>

                    </div>
                    <div className="flex gap-3 my-3 text-[#737373]">
                        <span className='flex gap-1 items-center'>
                            <IoMdTime />
                            <p className='text-[15px]'>10 mins</p>
                        </span>
                        <span className='flex gap-1 items-center'>
                            <BsBarChart />
                            <p className='text-[15px]'>Easy</p>
                        </span>
                        <span className='flex gap-1 items-center'>
                            <RiFireLine />
                            <p className='text-[15px]'>513 kcal</p>
                        </span>
                    </div>
                    <div className='mb-3 mt-3'>
                        <h2 className='mb-2 text-[18px] font-medium'>Description</h2>
                        <p className='text-[#6b6b6b]'>
                            Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Necessitatibus distinctio,
                            rerum magnam nostrum inventore autem temporibus
                            deserunt corporis.
                        </p>
                    </div>
                    <hr className='text-[#a0a0a0] w-[99%] mx-auto' />
                    <div className='my-3'>
                        <h1 className='text-[20px] font-semibold'>Ingredients</h1>
                        <ul className='list-disc grid grid-cols-2 mx-3 my-2' >
                            <li>4 Tomatoes</li>
                            <li>3 Eggs</li>
                            <li>50mg Basil</li>
                            <li>Cheese</li>
                            <li>Garlic</li>
                            <li>Pepper</li>
                        </ul>
                        <hr className='text-[#a0a0a0] w-[99%] mx-auto' />
                        <div>
                            <h2 className='text-[20px] font-semibold my-3'>Instructions</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Expedita distinctio explicabo unde recusandae ab, ullam earum
                                harum inventore eum dolores reprehenderit maxime quo, quam corrupti,
                                et maiores sed debitis quasi.
                            </p>
                        </div>
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