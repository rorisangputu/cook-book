import RecipeList from "../components/RecipeList";
import { useState, useEffect } from 'react';


const RecipePage = () => {
    const categories = [
        { name: 'Breakfast', img: "https://images.unsplash.com/photo-1465014925804-7b9ede58d0d7?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: 'Lunch', img: "https://images.unsplash.com/photo-1627662236973-4fd8358fa206?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: 'Dinner', img: "https://images.unsplash.com/photo-1605926637512-c8b131444a4b?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: 'Dessert', img: "https://plus.unsplash.com/premium_photo-1695028377703-0d883cb54792?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: 'Vegan', img: "https://plus.unsplash.com/premium_photo-1664648119295-e52d27cbfbc5?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: 'Vegetarian', img: "https://plus.unsplash.com/premium_photo-1705256741635-adc5c51272ba?q=80&w=1344&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: 'Gluten-Free', img: "" },
        { name: 'Keto', img: "" }
    ];

    const topAccounts = [
        { name: 'Alice Johnson', specialty: 'Italian Cuisine', img: accountImg },
        { name: 'Bob Smith', specialty: 'Vegan Dishes', img: accountImg },
        { name: 'Cathy Brown', specialty: 'Desserts', img: accountImg },
        { name: 'David Wilson', specialty: 'Grill Master', img: accountImg },
        { name: 'Eva Adams', specialty: 'Healthy Recipes', img: accountImg },
        { name: 'Frank Miller', specialty: 'Seafood', img: accountImg },
        { name: 'Grace Lee', specialty: 'Asian Cuisine', img: accountImg },
        { name: 'Hank Green', specialty: 'BBQ', img: accountImg }
    ];

    return (
        <div className="w-full bg-[#f7f7f7] py-9">
            <div className="w-[90%] md:container lg:w-[90%] xl:container mx-auto">
                {/* Search Bar */}
                <div className="my-4">
                    <input
                        type="text"
                        placeholder="Search for recipes..."
                        className="w-full p-3 rounded-lg border border-gray-300"
                    />
                </div>

                {/* Latest Recipes */}
                <div className="my-6">
                    <h2 className="text-[24px] font-semibold mb-4">Latest Recipes</h2>
                    <RecipeList />
                </div>

                {/* Categories */}
                <div className="my-6">
                    <h2 className="text-[24px] font-semibold mb-4">Categories</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                className="bg-white p-4 rounded-lg shadow-md text-center cursor-pointer hover:bg-gray-100"
                            >
                                <img src={category.img} alt={category.name} className="w-full h-24 object-cover rounded-lg mb-2" />
                                <p className="text-lg font-medium">{category.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Top Accounts */}
                <div className="my-6">
                    <h2 className="text-[24px] font-semibold mb-4">Top Accounts</h2>
                    <div className="flex flex-wrap gap-4">
                        {topAccounts.map((account, index) => (
                            <div
                                key={index}
                                className="bg-white p-4 rounded-lg shadow-md text-center w-full sm:w-[48%] md:w-[32%] lg:w-[24%] cursor-pointer hover:bg-gray-100"
                            >
                                <img src={account.img} alt={account.name} className="w-full h-24 object-cover rounded-lg mb-2" />
                                <p className="text-lg font-medium">{account.name}</p>
                                <p className="text-sm text-gray-600">{account.specialty}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecipePage;
