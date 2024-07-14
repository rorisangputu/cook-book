import RecipeList from "../components/RecipeList"

const Popular = () => {
    return (
        <div className="w-full">
            <div className="w-[90%] md:container mx-auto py-2">
                <div className="flex flex-col md:flex-row justify-between md:items-center my-4">
                    <div>
                        <h1 className="my-1 text-[32px] font-semibold">Popular Recipes Of The Week</h1>
                        <p className="text-[19px] text-[#4c4c4c]">Our most popular recipes of the week</p>
                    </div>
                    <div className="mt-2">
                        <p className="text-[#1d9451] text-[19px]">See all</p>
                    </div>
                </div>
                <RecipeList />

            </div>
        </div>

    )
}

export default Popular