import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Get API URL from environment variables
    const apiUrl = import.meta.env.VITE_API_URL;

    // Check if user is already logged in or coming from Google auth
    useEffect(() => {
        // Check for URL params first (might be returning from Google auth)
        const params = new URLSearchParams(location.search);
        const token = params.get('token');
        const userData = params.get('user');

        if (token && userData) {
            try {
                console.log("Received auth redirect with token and user data");

                // Clear any existing data first
                localStorage.removeItem("token");
                localStorage.removeItem("docuaid-user");

                // Store token and user data
                localStorage.setItem("token", token);
                localStorage.setItem("docuaid-user", userData);

                // Clear URL parameters to prevent loops on refresh
                window.history.replaceState({}, document.title, "/login");

                // Navigate to dashboard
                console.log("Redirecting to dashboard after auth");
                navigate("/dashboard", { replace: true });
                return;
            } catch (err) {
                console.error("Error processing auth redirect:", err);
                // Continue to normal login page
            }
        }

        // Normal token check
        const storedToken = localStorage.getItem("token");
        const storedUser = localStorage.getItem("docuaid-user");
        if (storedToken && storedUser) {
            navigate("/dashboard");
        }
    }, [navigate, location]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            console.log("Sending login request...");
            const response = await axios.post(`${apiUrl}/api/login`, {
                email,
                password
            }, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log("Login response:", response.data);

            // Store token and user data
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("docuaid-user", JSON.stringify(response.data.user));

            // Navigate to dashboard
            navigate("/dashboard");
        } catch (err) {
            console.error("Login error:", err);
            if (err.code === 'ECONNABORTED' || !err.response) {
                setError("Connection to server failed. Please try again later or contact support.");
            } else if (err.response && err.response.data && err.response.data.message) {
                setError(err.response.data.message);
            } else {
                setError("An error occurred during login. Please try again.");
            }
            setIsLoading(false);
        }
    };

    const handleGoogleLogin = () => {
        // First clear any existing tokens to prevent conflicts
        localStorage.removeItem("token");
        localStorage.removeItem("docuaid-user");

        // Redirect to Google auth endpoint
        window.location.href = `${apiUrl}/auth/google`;
    };

    return (
        <div className="flex justify-center items-center min-h-screen pt-20 pb-16 px-4 bg-gradient-to-b from-purple-200 to-indigo-700">
            <div className="w-full max-w-md bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="p-8">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Welcome Back</h2>

                    {error && (
                        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
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
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Enter your password"
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`w-full py-2 px-4 rounded-lg text-white font-medium 
                                    ${isLoading
                                        ? 'bg-indigo-400 cursor-not-allowed'
                                        : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'}`}
                            >
                                {isLoading ? 'Signing in...' : 'Sign In'}
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
                                    <span className="text-gray-700 font-medium">Sign in with Google</span>
                                </div>
                            </button>
                        </div>
                    </div>

                    <p className="mt-8 text-center text-sm text-gray-600">
                        Don't have an account?{' '}
                        <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Sign up now
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;