
import foodpic from '../assets/foodpic.jpg';

const Profile = () => {
    return (
        <div className='w-full'>
            <div className='w-[90%] md:container rounded-tl-xl mx-auto rounded-tr-xl'>
                <div>
                    <div className='flex items-center justify-center h-[15vh] md:h-[40vh] overflow-hidden'>
                        <img src={foodpic} alt="foodpic" className='rounded-tl-2xl rounded-tr-2xl w-full' />
                    </div>
                    <div>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile