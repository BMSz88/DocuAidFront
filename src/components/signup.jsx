import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    // Get API URL from environment variables
    const apiUrl = import.meta.env.VITE_API_URL;

    // Check if user is already logged in
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            navigate("/dashboard");
        }
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        // Validate form
        if (!name || !email || !password || !confirmPassword) {
            setError("All fields are required");
            setIsLoading(false);
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            setIsLoading(false);
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters long");
            setIsLoading(false);
            return;
        }

        try {
            console.log("Sending registration request...");
            // Add more detailed logging
            console.log(`API URL: ${apiUrl}/register`);

            const response = await axios.post(`${apiUrl}/register`, {
                name,
                email,
                password
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                withCredentials: true,
                // Add timeout to prevent long waiting
                timeout: 10000
            });

            console.log("Registration response:", response.data);

            // Show success message
            alert("Registration successful! You can now log in.");

            // Navigate to login page
            navigate("/login");
        } catch (err) {
            console.error("Registration error:", err);
            // More detailed error logging
            if (err.response) {
                console.error("Error response data:", err.response.data);
                console.error("Error response status:", err.response.status);
                console.error("Error response headers:", err.response.headers);
            }

            if (err.code === 'ECONNABORTED' || !err.response) {
                setError("Connection to server failed. Please try again later or contact support.");
            } else if (err.response && err.response.status === 500) {
                setError("The server encountered an error. Please try again later or contact support.");
            } else if (err.response && err.response.data && err.response.data.message) {
                setError(err.response.data.message);
            } else {
                setError("An error occurred during registration. Please try again.");
            }
            setIsLoading(false);
        }
    };

    const handleGoogleLogin = () => {
        console.log("Initiating Google login from signup page");

        // First clear any existing tokens and all storage to prevent conflicts
        try {
            localStorage.removeItem("token");
            localStorage.removeItem("docuaid-user");
            sessionStorage.clear();
            console.log("Cleared existing auth data before Google login");
        } catch (err) {
            console.error("Error clearing storage:", err);
        }

        // Redirect to Google auth endpoint
        window.location.href = `${apiUrl}/auth/google`;
    };

    return (
        <div className="flex justify-center items-center min-h-screen pt-20 pb-16 px-4 bg-gradient-to-b from-purple-200 to-indigo-700">
            <div className="w-full max-w-md bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="p-8">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>

                    {error && (
                        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Full Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                minLength={6}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Create a password (min 6 characters)"
                            />
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                Confirm Password
                            </label>
                            <input
                                id="confirmPassword"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Confirm your password"
                            />
                        </div>

                        <div className="mt-6">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`w-full py-2 px-4 rounded-lg text-white font-medium 
                                    ${isLoading
                                        ? 'bg-indigo-400 cursor-not-allowed'
                                        : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'}`}
                            >
                                {isLoading ? 'Creating Account...' : 'Sign Up'}
                            </button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">Or continue with</span>
                            </div>
                        </div>

                        <div className="mt-6">
                            <button
                                onClick={handleGoogleLogin}
                                className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-50"
                                type="button"
                            >
                                <div className="flex items-center justify-center">
                                    <img
                                        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                                        alt="Google Logo"
                                        className="w-6 h-6 mr-2"
                                    />
                                    <span className="text-gray-700 font-medium">Sign up with Google</span>
                                </div>
                            </button>
                        </div>
                    </div>

                    <p className="mt-8 text-center text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Sign in instead
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Signup;