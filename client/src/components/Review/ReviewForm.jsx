import { useState } from "react"
import newRequest from "../../utils/newRequest";

const ReviewForm = ({ recipe, currentUser }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [review, setReview] = useState({
        user: currentUser._id,
        recipe: recipe._id,
        rating: '',
        comment: '',
    })

    const handleChange = (e) => [
        setReview({
            ...review,
            [e.target.name]: e.target.value
        })
    ]

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const response = await newRequest.post('reviews/createReview', review);
            if (response.ok) {
                alert('Review posted')
            }
        } catch (error) {
            setError("Something went wrong. Please try again.");
            console.error('Error:', error);
        } finally {
            setLoading(false)
            setReview({ user: currentUser._id, recipe: recipe._id, rating: '', comment: '' });
        }
    }

    return (
        <div className='w-full md:w-[60%]'>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className='flex flex-col'>
                <label className='font-semibold text-[20px] my-1'>Post a review:</label>
                <textarea
                    name='comment'
                    onChange={handleChange}
                    cols={40}
                    rows={5}
                    required
                    className='border rounded-lg border-gray-300 p-1' id="">

                </textarea>
                <div className="flex">
                    <label className="mr-2" htmlFor="">Rating:</label>
                    <input
                        type="number"
                        name='rating'
                        onChange={handleChange}
                        min={1}
                        max={5}
                        className="w-10 border text-center"
                    /> <p>/5</p>
                </div>
                <button className='bg-[#1d9451] p-2 w-full md:w-[20%] text-white rounded-md my-2'>
                    {loading ? (
                        <div className="flex items-center">
                            <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.372 0 0 5.372 0 12h4z"></path>
                            </svg>
                            Processing...
                        </div>
                    ) : (
                        'Submit'
                    )}
                </button>
            </form>
        </div>
    )
}

export default ReviewForm