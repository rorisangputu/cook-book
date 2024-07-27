import HomeReview from './HomeReview';


// Dummy data
const reviews = [
    {
        id: 1,
        profilepic: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
        title: "Bacon and Cheese",
        author: "Frank Miller",
        rating: 4,
        content: "This is the best recipe I have made in ages. The addition of parsley in the cheese as well as the salted tomatoes make this an exquisite meal.",
        img: "https://images.unsplash.com/photo-1630330159773-4b2e6e5b8a56?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 2,
        profilepic: "https://plus.unsplash.com/premium_photo-1664298528358-790433ba0815?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
        title: "Delicious Pancakes",
        author: "Jane Doe",
        rating: 5,
        content: "These pancakes are fluffy and delicious. The addition of blueberries makes them even better!",
        img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 3,
        profilepic: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3" ,
        title: "Spaghetti Carbonara",
        author: "John Smith",
        rating: 4,
        content: "A classic Italian pasta dish that's easy to make and always a hit with the family.",
        img: "https://plus.unsplash.com/premium_photo-1664472634106-1430c3973e68?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 4,
        profilepic: "https://plus.unsplash.com/premium_photo-1683134080778-aaa686741d0a?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
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
            <div className="w-[90%] md:w-[90%] lg:w-[80%] xl:w-[70%] mx-auto">
                <h1 className="text-center mb-10 text-3xl md:text-4xl font-semibold">Fresh From Our Community</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2  gap-5">
                    {reviews.map((review) => (
                        <HomeReview key={review.id} review={review} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeReviews;
