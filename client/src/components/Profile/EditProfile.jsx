import { useState, useEffect } from 'react';
//import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'; // Correct import
import { useNavigate } from 'react-router-dom'; // Correct import
import upload from "../../utils/upload.js";
import newRequest from "../../utils/newRequest.js";

const EditProfile = () => {
    const {id} = useParams();
    const [file, setFile] = useState([]);
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        img: ''
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); 


    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const res = await newRequest.get(`profile/${id}`);
                const user = await res.data;
                console.log(user)
                setUser(user);
                
                
            } catch (err) {
                console.error("Failed to fetch recipe", err);
            }
        };
        fetchRecipe();
    }, [id]);

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

        let url = user.img; // Default to existing image URL

        if (file) {
            try {
                url = await upload(file);
            } catch (err) {
                if (err.response && err.response.status === 404) {
                    console.error("Image upload failed with 404 status, using existing image URL");
                } else {
                    console.error("Image upload failed", err);
                    return; // Exit if other errors occur
                }
            }
        }
        try {
            const res = await newRequest.put('profile/:id/editprofile', {
                ...user,
                img: url,
                credentials: 'include'
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

    const handleDelete = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await newRequest.delete(`auth/deleteuser/${id}`, { withCredentials: true });
            if (res.status === 200) {
                // alert('Profile deleted successfully.');
                localStorage.setItem("currentUser", null);
                navigate('/'); // Redirect to home or login page after deletion
            } else {
                setError("Failed to delete profile.");
            }
        } catch (error) {
            setError("Failed to delete profile. Please try again.");
        } finally {
            setLoading(false);
        }
        
    }


    return (
        <div className="min-h-screen flex justify-center">
            <div className="bg-white p-8 rounded-lg max-w-md w-full">
                <h2 className="text-2xl font-bold text-center mb-6">Edit Profile</h2>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                {success ? (
                    <div className="text-center">
                        <p className="text-green-500 mb-4">Edit successful.</p>
                        <Link to={`/profile/${id}`}>
                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                Go back to Profile
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
                                value={user?.username}
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
                                value={user?.email}
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
                                    'Edit'
                                )}
                            </button>
                        </div>
                    </form>
                )}

                <div className="flex items-center justify-between mt-5">
                    <button
                        className={`bg-red-600 hover:bg-red-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? 'cursor-not-allowed' : ''}`}
                        onClick={handleDelete}
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
                            'Delete Profile'
                        )}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EditProfile