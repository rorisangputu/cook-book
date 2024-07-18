import { useState } from "react"
import newRequest from "../../utils/newRequest";

const ReviewForm = ({ recipe, currentUser }) => {
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const reviewData = {
            user: currentUser._id,
            recipe: recipe._id,
            rating,
            review,
        };

        try {
            const response = await newRequest.post('reviews/createReviews', {
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reviewData)
            })
            if (response.ok) {
                return <div><h1>Review Created!</h1></div>
            }
        } catch (error) {
            setError("Something went wrong. Please try again.");
        }
    }

    return (
        <div className='w-full md:w-[60%]'>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className='flex flex-col'>
                <label className='font-semibold text-[20px] my-1'>Post a review:</label>
                <textarea
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    cols={40}
                    rows={5}
                    className='border rounded-lg border-gray-300 p-1' id="">

                </textarea>
                <div className="flex">
                    <label className="mr-2" htmlFor="">Rating:</label>
                    <input
                        type="number"
                        value={rating}
                        onChange={(e) =>
                            // Ensure value is between 1 and 5
                            setRating(e.target.value)}
                        min={1}
                        max={5}
                        className="w-10 border text-center"
                    /> <p>/5</p>
                </div>
                <button className='bg-[#1d9451] p-2 w-full md:w-[20%] text-white rounded-md my-2'>Submit</button>
            </form>
        </div>
    )
}

export default ReviewForm