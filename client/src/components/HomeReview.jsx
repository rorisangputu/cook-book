import { IoIosStar } from "react-icons/io";
import pict from '../assets/profilepic.jpg';

const HomeReview = ({ review }) => {
    return (
        <div className="h-auto flex flex-col mx-auto w-full">
            <div className="flex flex-col w-[90%] mx-auto gap-3 p-5 shadow-lg bg-white rounded-2xl h-full">
                <div className="flex gap-5 items-center">
                    <div className="">
                        <img src={pict} className="rounded-full h-12" alt="" />
                    </div>
                    <div className="flex flex-col justify-between h-auto">
                        <h4 className="text-lg font-medium text-orange-500">{review.title}</h4>
                        <h4 className="text-sm font-medium text-gray-400">{review.author}</h4>
                    </div>
                </div>
                <div>
                    <span className="flex items-center">
                        {[...Array(review.rating)].map((_, i) => (
                            <IoIosStar className="text-yellow-500" key={i} />
                        ))}
                        <p className="ml-3 text-sm">{review.rating}/5</p>
                    </span>
                </div>
                <div className="flex flex-col gap-5 flex-grow justify-between">
                    <p>{review.content}</p>
                    <div className="h-[15vh] md:h-[20vh] lg:h-[30vh] w-full overflow-hidden rounded-2xl">
                        <img
                            src={review.img}
                            alt={review.title}
                            className="h-full w-full object-cover "
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeReview;
