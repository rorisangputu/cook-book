// ReviewItem.jsx
const ReviewItem = ({ review }) => {
    console.log('Review Data:', review); // Log review data to verify structure

    return (
        <div className='border-b border-gray-300 py-2'>
            <div className='flex items-center'>
                {/* Assuming review.user.username and review.user.userImg exist */}
                {review.user.userImg ? (
                    <>
                        <img src={review.user.userImg} alt={review.user.username} className='w-10 h-10 rounded-full' />
                        <p className='ml-2'>{review.user.username}</p>
                    </>
                ) : (
                    <p>User information not available</p>
                )}
            </div>
            <div className='mt-1'>
                <p className='text-sm'>{review.comment}</p>
                <p className='text-xs text-gray-500'>Rating: {review.rating}</p>
            </div>
        </div>
    );
};

export default ReviewItem;
