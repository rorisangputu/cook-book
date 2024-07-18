

const ReviewForm = () => {
    return (
        <div className='w-full md:w-[60%]'>
            <form action="" className='flex flex-col'>
                <label className='font-semibold text-[20px] my-1'>Post a review:</label>
                <textarea name="" cols={40} rows={5} className='border rounded-lg border-gray-300 p-1' id=""></textarea>
                <button className='bg-[#1d9451] p-2 w-full md:w-[20%] text-white rounded-md my-2'>Submit</button>
            </form>
        </div>
    )
}

export default ReviewForm