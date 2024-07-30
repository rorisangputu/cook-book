import { useEffect, useState } from "react";
import ReviewItem from "./ReviewItem";

const Review = ({ id }) => {

    const [reviews, setReviews] = useState([]);

    // console.log(id); // returning undefined

    useEffect(() => {
        if (id) { // Check if id exists
            fetch(`https://taste-book-api.onrender.com/reviews/${id}`)
                .then(res => res.json())
                .then(data => {
                    //console.log(data); // Check the response
                    setReviews(data);
                })
                .catch(err => console.error('Error fetching reviews:', err));
        }
    }, [id]);

    const handleDeleteReview = (reviewId) => {
        setReviews(reviews.filter(review => review._id !== reviewId));
    };
    return (
        <div>
            <h2 className='text-[19px] font-semibold'>Reviews</h2>
            {/* <p>Recipe id: {id}</p> */}

            {reviews && reviews.length > 0 ? (
                reviews.map((review, index) => (
                    <ReviewItem key={index} review={review} onDelete={handleDeleteReview} />
                ))
            ) : (
                <p>No reviews yet. Be the first to review this recipe!</p>
            )}
        </div>
    )
}

export default Review