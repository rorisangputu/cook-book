

const Contacts = () => {
    return (
        <div className="w-full bg-[#f7f7f7]">
            <div className="w-[90%] md:container lg:w-[90%] xl:container mx-auto py-8">
                {/* Contact Information Section */}
                <div className="my-8">
                    <h1 className="text-[32px] font-semibold text-[#1f5129]">Contact Us</h1>
                    <p className="text-[19px] text-[#4c4c4c] mt-4">
                        Have any questions or feedback? We&apos;d love to hear from you. Reach out to us through any of the following methods:
                    </p>
                    <div className="mt-4">
                        <p className="text-[19px] text-[#4c4c4c]">Email: info@tastebook.com</p>
                        <p className="text-[19px] text-[#4c4c4c]">Phone: +27 00 000 0000</p>
                        <p className="text-[19px] text-[#4c4c4c]">Address: 123 Recipe Street, Food City, FC 12345</p>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="my-8">
                    <h1 className="text-[32px] font-semibold text-[#1f5129]">Send Us a Message</h1>
                    <form className="mt-4 bg-white p-6 rounded-lg shadow-md">
                        <div className="mb-4">
                            <label className="block text-[#4c4c4c] text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input className="w-full p-2 border border-gray-300 rounded-lg" type="text" id="name" name="name" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-[#4c4c4c] text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input className="w-full p-2 border border-gray-300 rounded-lg" type="email" id="email" name="email" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-[#4c4c4c] text-sm font-bold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea className="w-full p-2 border border-gray-300 rounded-lg" id="message" name="message" rows="4" required></textarea>
                        </div>
                        <button className="px-6 py-3 bg-[#1d9451] text-white text-[16px] rounded-xl" type="submit">Send Message</button>
                    </form>
                </div>

                {/* Map Section */}
                <div className="my-8">
                    <h1 className="text-[32px] font-semibold text-[#1f5129]">Our Location</h1>
                    <div className="mt-4">
                        <iframe
                            title="location-map"
                            className="w-full h-[400px] rounded-lg"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581440.3240952096!2d27.6093915!3d-26.2041028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950b5ef5f6e659%3A0xa7474f8f99e93a6a!2sJohannesburg%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1657568213457!5m2!1sen!2sus"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
