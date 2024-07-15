import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="w-full bg-[#1f5129] text-white py-8">
            <div className="w-[90%] md:container lg:w-[90%] xl:container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Slogan Section */}
                <div>
                    <h3 className="text-lg lg:text-3xl font-semibold mb-4">Taste Book</h3>
                    <p className="text-sm lg:text-lg">
                        Explore the world of culinary delights and make every meal a memorable one.
                    </p>
                </div>

                {/* Quick Links Section */}
                <div>
                    <h3 className="text-lg font-medium mb-4 lg:text-2xl">Quick Links</h3>
                    <ul className="space-y-2 text-sm lg:text-lg">
                        <li><a href="/home" className="hover:underline">Home</a></li>
                        <li><a href="/recipes" className="hover:underline">Recipes</a></li>
                        <li><a href="/about" className="hover:underline">About Us</a></li>
                        <li><a href="/contact" className="hover:underline">Contact</a></li>
                    </ul>
                </div>

                {/* Social Media Section */}
                <div>
                    <h3 className="text-lg font-medium mb-4 lg:text-2xl">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                            <FaFacebookF className="w-6 h-6 fill-current" />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                            <FaTwitter className="w-6 h-6 fill-current" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                            <FaInstagram className="w-6 h-6 fill-current" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center md:text-left mx-auto w-[90%] md:container lg:w-[90%] xl:container text-sm">
                <p>&copy; {new Date().getFullYear()} Taste Book. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
