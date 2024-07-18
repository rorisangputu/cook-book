
import { Link, Outlet } from 'react-router-dom';
import foodpic from '../assets/foodpic.jpg';
import propic from '../assets/profilepic.jpg';

const Profile = () => {
    return (
        <div className='w-full min-h-screen'>
            <div className='w-[90%] md:container rounded-tl-xl mx-auto rounded-tr-xl'>
                <div className='flex flex-col gap-4 mb-4'>
                    <div className='flex items-center justify-center h-[15vh] md:h-[40vh] overflow-hidden'>
                        <img src={foodpic} alt="foodpic" className='rounded-tl-2xl rounded-tr-2xl w-full' />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='flex gap-3 items-center'>
                            <img src={propic} alt="" className='w-16 h-16 rounded-full' />
                            <div>
                                <h1>Rorisang</h1>
                                <Link to=''>
                                    <p className='text-[#a9a9a9]'>Edit profile</p>
                                </Link>
                            </div>
                        </div>
                        <div className='flex my-2'>
                            <ul className='flex gap-3 w-full text-center justify-between items-center lg:justify-around '>
                                <li className='font-medium hover:underline hover:text-[#a9a9a9] w-1/3'>
                                    <Link>
                                        My Recipes
                                    </Link>
                                </li>
                                <li className='font-medium hover:underline hover:text-[#a9a9a9] w-1/3'>
                                    <Link>
                                        Likes
                                    </Link>
                                </li>
                                <li className='font-medium hover:underline hover:text-[#a9a9a9] w-1/3'>
                                    <Link>
                                        Following
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <hr />
                {/* MAIN CONTENT */}
                <Outlet />
            </div>
        </div>
    )
}

export default Profile