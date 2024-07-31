// ReviewItem.jsx
import { MdOutlineDelete } from "react-icons/md";
//import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import newRequest from '../../utils/newRequest';
import getCurrentUser from "../../utils/getCurrentUser";
const ReviewItem = ({ review, onDelete }) => {
    const currentUser = getCurrentUser();

    const [error, setError] = useState(null);
    const navigate = useNavigate();
    //console.log(review.user._id, currentUser._id)
    const handleDelete = async (e) => {
        e.preventDefault();

        if (currentUser._id === review.user._id) {
            const res = await newRequest.delete(`reviews/deleteReview/${review._id}`)

            if (res.ok) {
                onDelete(review._id); // Notify the parent component to remove the review

            } else if (res.status === 401) {
                alert('Session expired or unauthorized. Please log in again.');
                navigate('/login');
            } else {
                console.log("Error deleting review")
            }

            window.location.reload();
        } else {
            setError('You are not the owner of review!')
        }
    }

    // Log review data to verify structure

    return (
        <div className='border-b border-gray-300 py-2'>
            {error ? error : ''}
            <div className='flex items-center'>
                {/* <p>{review.recipe}</p> */}
                {/* Assuming review.user.username and review.user.userImg exist */}
                {review.user.img ? (
                    <>
                        <img src={review.user.img} alt={review.user.username} className='w-10 h-10 rounded-full' />
                        <p className='ml-2'>{review.user.username}</p>
                    </>
                ) : (
                    <p>User information not available</p>
                )}
            </div>
            <div className='mt-1 flex justify-between items-center'>
                <div className="mt-1">
                    <p className='text-sm'>{review.comment}</p>
                    <p className='text-xs text-gray-500'>Rating: {review.rating}</p>
                </div>
                {currentUser?._id === review.user._id ? <div onClick={handleDelete} className="hover:text-red-600">
                    <MdOutlineDelete className="h-7 w-7" />
                </div> : ('')}
            </div>
        </div>
    );
};

export default ReviewItem;
