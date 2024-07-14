import { IoIosStar } from "react-icons/io";
import pict from '../assets/profilepic.jpg'

const HomeReview = () => {
    return (
        <div className='my-4 h-[50vh] flex flex-col mx-auto w-full'>
            <div className="flex flex-col w-[90%] mx-auto gap-3 p-5 bg-white rounded-2xl">
                <div className="flex gap-5 items-center">
                    <div className="">
                        <img src={pict} className='rounded-full h-12' alt="" />
                    </div>
                    <div className='flex flex-col justify-between h-auto'>
                        <h4 className='text-lg font-medium text-orange-500'>Grilled Toasted Cheese and Bacon</h4>
                        <h4 className='text-sm font-medium text-gray-400'>Rorisang</h4>
                    </div>
                </div>
                <div>
                    <span className="flex items-center ">
                        {[1, 2, 3, 4].map((stars) => (
                            <IoIosStar className="text-yellow-500" key={stars} />
                        ))}
                        <p className="ml-3 text-sm">4/5</p>
                    </span>
                </div>
                <div className="flex flex-col gap-5">
                    <p>
                        This is the best recipe i have made in ages. The additon of parsley in the Cheese
                        as well as the salted tomatoes make this an exquisite meal
                    </p>
                    <div className="h-[27vh] w-full overflow-hidden rounded-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1630330159773-4b2e6e5b8a56?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeReview