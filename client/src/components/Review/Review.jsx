import { useEffect, useState } from "react";

import ReviewItem from "./ReviewItem";
import { useParams } from "react-router-dom";
const Review = () => {
    const { id } = useParams;
    const [reviews, setReviews] = useState([]);

    console.log(id); // returning undefined

    useEffect(() => {
        if (id) { // Check if id exists
            fetch(`http://localhost:8800/reviews/${id}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data); // Check the response
                    setReviews(data);
                })
                .catch(err => console.error('Error fetching reviews:', err));
        }
    }, [id]);


    return (
        <div>
            <h2 className='text-[19px] font-semibold'>Reviews</h2>
            <p>{id}</p>
            {reviews && reviews.length > 0 ? (
                reviews.map((review, index) => (
                    <ReviewItem key={index} review={review} />
                ))
            ) : (
                <p>No reviews yet. Be the first to review this recipe!</p>
            )}
        </div>
    )
}

export default Review