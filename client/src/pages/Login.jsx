import { useState, useEffect } from 'react'
import newRequest from '../utils/newRequest.js'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState(null)
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

        try {
            const res = await newRequest.post('auth/login', { username, password });
            localStorage.setItem("currentUser", JSON.stringify(res.data))
            setRedirect(true)

            if (res.ok) {
                alert('Log In Successful')
            }
        } catch (err) {
            setError(err.response.data);
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
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Login
                        </button>
                    </div>
                    {error && error}
                </form>
            </div>
        </div>
    )
}

export default Login