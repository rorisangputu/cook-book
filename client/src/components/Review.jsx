import { IoIosStar } from "react-icons/io";
import pict from '../assets/profilepic.jpg'
const Review = () => {
    return (
        <div className='my-4 h-auto flex flex-col w-full gap-3'>
            <div className="flex w-full gap-3 items-center my-2">
                <div className="">
                    <img src={pict} className='rounded-full h-16' alt="" />
                </div>
                <div className='flex flex-col justify-between h-auto'>
                    <h4 className='text-sm font-medium'>Rorisang</h4>
                    <p className='my-1'>lor
                    </p>
                    <span className="flex items-center gap-2">
                        <IoIosStar className="text-yellow-500" />
                        <p className="text-sm">4/5</p>
                    </span>
                </div>
            </div>
            <hr className='text-[#a0a0a0] w-[99%] mx-auto' />
        </div>
    )
}

export default Review