import { useState, useEffect } from 'react'
import newRequest from '../utils/newRequest.js'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    //Redirect
    useEffect(() => {
        if (redirect) {
            navigate('/');
        }
    }, [redirect, navigate]);

    //handles inputs


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await newRequest.post('auth/login', { username, password });
            localStorage.setItem("currentUser", JSON.stringify(res.data))
            setRedirect(true)

            if (res.ok) {
                alert('Log In Successful')
            } else if (res.status === 401) {
                // Handle unauthorized status
                alert('Session expired or unauthorized. Please log in again.');
            }
            // Redirect to login or perform other actions
        } catch (err) {
            setError(
                "Incorrect Username/Password"
            );
            setLoading(false);
        }

    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
                <form onSubmit={handleSubmit} >
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            name="username"
                            onChange={e => setUsername(e.target.value)}
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
                            onChange={e => setPassword(e.target.value)}
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
                    <div className='mt-3 text-red-600'>
                        {error && error}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login