import React from 'react';

const About = () => {
    return (
        <div className="w-full bg-[#f7f7f7]">
            <div className="w-[90%] md:container lg:w-[90%] xl:container mx-auto py-8">
                {/* Our Story Section */}
                <div className="my-8">
                    <h1 className="text-[32px] font-semibold text-[#1f5129]">Our Story</h1>
                    <p className="text-[19px] text-[#4c4c4c] mt-4">
                        Our journey started with a simple idea: to make cooking fun and accessible for everyone.
                        Whether you're a seasoned chef or just starting out, our goal is to provide you with the
                        resources and inspiration you need to create delicious meals at home. We believe that
                        cooking should be an enjoyable experience, and our extensive collection of recipes reflects
                        that belief.
                    </p>
                </div>

                {/* Our Mission Section */}
                <div className="my-8">
                    <h1 className="text-[32px] font-semibold text-[#1f5129]">Our Mission</h1>
                    <p className="text-[19px] text-[#4c4c4c] mt-4">
                        At our core, we aim to revolutionize home cooking by offering easy-to-follow recipes that
                        cater to all tastes and dietary preferences. We strive to empower our community to explore
                        new cuisines, try out new techniques, and ultimately, to enjoy the process of cooking as much
                        as the final dish. Our mission is to bring joy, creativity, and delicious food into kitchens
                        around the world.
                    </p>
                </div>

                {/* Meet the Team Section */}
                <div className="my-8">
                    <h1 className="text-[32px] font-semibold text-[#1f5129]">Meet the Team</h1>
                    <p className="text-[19px] text-[#4c4c4c] mt-4">
                        We are a team of passionate food enthusiasts, developers, and designers who share a love for
                        cooking and technology. Our diverse backgrounds and skills allow us to create an innovative
                        and user-friendly platform that brings the best of both worlds together. Get to know the
                        faces behind the recipes and learn more about our journey.
                    </p>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Example Team Member */}
                        <div className="flex flex-col items-center">
                            <img src="https://via.placeholder.com/150" alt="Team Member" className="w-[150px] h-[150px] rounded-full" />
                            <h3 className="text-[24px] font-semibold mt-4 text-[#1f5129]">John Doe</h3>
                            <p className="text-[16px] text-[#4c4c4c]">Co-Founder & Head Chef</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="https://via.placeholder.com/150" alt="Team Member" className="w-[150px] h-[150px] rounded-full" />
                            <h3 className="text-[24px] font-semibold mt-4 text-[#1f5129]">Jane Smith</h3>
                            <p className="text-[16px] text-[#4c4c4c]">Lead Developer</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="https://via.placeholder.com/150" alt="Team Member" className="w-[150px] h-[150px] rounded-full" />
                            <h3 className="text-[24px] font-semibold mt-4 text-[#1f5129]">Emily Johnson</h3>
                            <p className="text-[16px] text-[#4c4c4c]">UX/UI Designer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
