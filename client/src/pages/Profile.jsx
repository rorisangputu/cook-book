import { Link, Outlet, useParams } from 'react-router-dom';
import foodpic from '../assets/foodpic.jpg';

import getCurrentUser from "../utils/getCurrentUser";
import { useState, useEffect } from 'react';

const Profile = () => {
    const [user, setUser] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8800/profile/${id}`, {
                    credentials: 'include'
                });

                if (response.status === 401) {
                    // Handle unauthorized access
                    console.error("Unauthorized access");
                    return;
                }

                const user = await response.json();
                setUser(user);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        fetchData();
    }, [id]);

    const currentUser = getCurrentUser();
    if (!currentUser) {
        return <div>Please log in to view your profile.</div>;
    }
    if (!user) {
        return <div>Loading...</div>;
    }




    return (
        <div className='w-full min-h-screen'>
            <div className='w-[90%] md:container rounded-tl-xl mx-auto rounded-tr-xl'>
                <div className='flex flex-col gap-4 mb-4'>
                    <div className='flex items-center justify-center h-[15vh] md:h-[40vh] overflow-hidden'>
                        <img src={foodpic} alt="foodpic" className='rounded-tl-2xl rounded-tr-2xl w-full' />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='flex gap-3 items-center'>
                            <img src={user.img} alt="" className='w-16 h-16 rounded-full' />
                            <div>
                                <h1>{user.username}</h1>
                                <Link to='edit-profile'>
                                    <p className='text-[#a9a9a9]'>Edit profile</p>
                                </Link>
                            </div>
                        </div>
                        <div className='flex my-2'>
                            <ul className='flex gap-3 w-full text-center justify-between items-center lg:justify-around '>
                                <li className='font-medium hover:underline hover:text-[#a9a9a9] w-1/3'>
                                    <Link to='myrecipes'>
                                        My Recipes
                                    </Link>
                                </li>
                                <li className='font-medium hover:underline hover:text-[#a9a9a9] w-1/3'>
                                    <Link to={'liked-recipes'}>
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