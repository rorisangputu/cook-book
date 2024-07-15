import HomeReview from './HomeReview';

// Dummy data
const reviews = [
    {
        id: 1,
        title: "Grilled Toasted Cheese and Bacon",
        author: "Rorisang",
        rating: 4,
        content: "This is the best recipe I have made in ages. The addition of parsley in the cheese as well as the salted tomatoes make this an exquisite meal.",
        img: "https://images.unsplash.com/photo-1630330159773-4b2e6e5b8a56?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 2,
        title: "Delicious Pancakes",
        author: "Jane Doe",
        rating: 5,
        content: "These pancakes are fluffy and delicious. The addition of blueberries makes them even better!",
        img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 3,
        title: "Spaghetti Carbonara",
        author: "John Smith",
        rating: 4,
        content: "A classic Italian pasta dish that's easy to make and always a hit with the family.",
        img: "https://plus.unsplash.com/premium_photo-1664472634106-1430c3973e68?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 4,
        title: "Avocado Toast",
        author: "Emily Johnson",
        rating: 5,
        content: "Simple and delicious avocado toast, perfect for breakfast or a light lunch.",
        img: "https://plus.unsplash.com/premium_photo-1676106623114-e2edc4f04fe0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];

const HomeReviews = () => {
    return (
        <div className="w-full bg-[#f7f7f7] py-12">
            <div className="w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto">
                <h1 className="text-center mb-10 text-3xl md:text-4xl font-semibold">Fresh From Our Community</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2  gap-10">
                    {reviews.map((review) => (
                        <HomeReview key={review.id} review={review} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeReviews;
