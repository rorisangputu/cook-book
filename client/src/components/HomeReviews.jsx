import HomeReview from "./HomeReview"


const HomeReviews = () => {
    return (
        <div className="w-full bg-[#f7f7f7]">
            <div className="w-[90%] md:container mx-auto">
                <h1 className="text-center pt-12 mb-5 text-3xl md:text-4xl font-semibold">Fresh From Our Community</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {[1, 2, 3, 4].map((review) => (
                        <HomeReview key={review} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomeReviews