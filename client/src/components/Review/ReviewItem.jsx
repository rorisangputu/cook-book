// ReviewItem.jsx
import { MdOutlineDelete } from "react-icons/md";
//import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ReviewItem = ({ review, onDelete }) => {

    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const handleDelete = (e) => {
        e.preventDefault();

        //console.log(review._id)
        e.preventDefault();
        fetch(`http://localhost:8800/reviews/deleteReview/${review._id}`, {
            method: 'DELETE',
            credentials: 'include'
        })
            .then(response => {
                if (response.ok) {
                    onDelete(review._id); // Notify the parent component to remove the review
                } if (response.status === 401) {
                    alert('Session expired or unauthorized. Please log in again.');
                    navigate('/login');
                } else {
                    return response.json().then(err => { throw new Error(err.message); });
                }
            })
            .catch(error => {
                setError('Error deleting review: ' + error.message);
                console.error('Error deleting review:', error);
            });
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
                <div onClick={handleDelete} className="hover:text-red-600">
                    <MdOutlineDelete className="h-7 w-7" />
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;
