import { useState } from 'react';
//import { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Correct import
//import { useNavigate } from 'react-router-dom'; // Correct import
import upload from "../utils/upload.js";
import newRequest from "../utils/newRequest.js";


const Register = () => {
    const [file, setFile] = useState([]);
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        img: ''
    });
    const [loading, setLoading] = useState(false);
    //const [redirect, setRedirect] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    //const navigate = useNavigate();

    //Redirect
    // useEffect(() => {
    //     if (redirect) {
    //         navigate('/');
    //     }
    // }, [redirect, navigate]);

    //handles inputs
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });

        //console.log(user);
    };

    //Handles file 
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        console.log("Selected file:", selectedFile);
        setFile(selectedFile);

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const url = await upload(file);
        try {
            const res = await newRequest.post('auth/register', {
                ...user,
                img: url
            })
            //setRedirect(true)
            setSuccess(true);
            if (res.ok) {

                alert('Registration succesfull. Log In')
            }
        } catch (error) {
            setError("Registration failed. Please try again.");
        } finally {
            setLoading(false);
        }

        //setRedirect(true)
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                {success ? (
                    <div className="text-center">
                        <p className="text-green-500 mb-4">Registration successful. Please log in.</p>
                        <Link to="/login">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                Log In
                            </button>
                        </Link>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                name="username"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="email"
                                name="email"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"

                                type="password"
                                name="password"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Profile Picture
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="file"
                                name="img"
                                onChange={handleFileChange}
                                required
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? 'cursor-not-allowed' : ''}`}
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? (
                                    <div className="flex items-center">
                                        <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.372 0 0 5.372 0 12h4z"></path>
                                        </svg>
                                        Processing...
                                    </div>
                                ) : (
                                    'Sign Up'
                                )}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Register;
