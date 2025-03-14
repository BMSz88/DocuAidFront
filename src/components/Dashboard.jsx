import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

function Dashboard() {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Function to extract and store data from URL parameters
        const processQueryParams = () => {
            const params = new URLSearchParams(location.search);
            const tokenFromUrl = params.get('token');
            const userDataFromUrl = params.get('userData');
            
            if (tokenFromUrl) {
                console.log("Token found in URL, storing in localStorage");
                localStorage.setItem('token', tokenFromUrl);
                
                // If user data is also in URL, store it
                if (userDataFromUrl) {
                    try {
                        const userData = JSON.parse(decodeURIComponent(userDataFromUrl));
                        localStorage.setItem('user', JSON.stringify(userData));
                        setUser(userData);
                    } catch (error) {
                        console.error("Error parsing user data from URL:", error);
                    }
                }
                
                // Clean up the URL by removing query parameters
                navigate('/dashboard', { replace: true });
                return true;
            }
            return false;
        };

        // Function to get user profile from backend if needed
        const fetchUserProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    throw new Error("No token found");
                }
                
                const response = await axios.get('http://localhost:3001/user/profile', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                
                if (response.status === 200) {
                    setUser(response.data);
                    localStorage.setItem('user', JSON.stringify(response.data));
                }
            } catch (error) {
                console.error("Error fetching user profile:", error);
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                navigate('/login');
            } finally {
                setIsLoading(false);
            }
        };

        // Main authentication flow
        const checkAuthentication = async () => {
            try {
                // First, check for params in URL (from Google auth)
                const paramsProcessed = processQueryParams();
                
                if (!paramsProcessed) {
                    // If no params, check for existing token and user data
                    const token = localStorage.getItem('token');
                    if (!token) {
                        throw new Error("No token found");
                    }
                    
                    const userData = localStorage.getItem('user');
                    if (userData) {
                        setUser(JSON.parse(userData));
                        setIsLoading(false);
                    } else {
                        // If we have token but no user data, fetch the profile
                        await fetchUserProfile();
                    }
                } else {
                    setIsLoading(false);
                }
            } catch (error) {
                console.error("Authentication error:", error);
                navigate('/login');
            }
        };

        checkAuthentication();
    }, [navigate, location.search]);

    const handleLogout = async () => {
        try {
            // Call logout API
            await axios.post('http://localhost:3001/logout', {}, {
                withCredentials: true
            });
        } catch (error) {
            console.error("Logout API error:", error);
        } finally {
            // Clear localStorage regardless of API success
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            
            // Redirect to home
            navigate('/');
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="p-8 bg-white shadow-md rounded-lg">
                    <p className="text-xl text-gray-700">Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 pt-20">
            <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md my-8">
                <div className="flex justify-between items-center border-b pb-4 mb-4">
                    <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
                    <button
                        onClick={handleLogout}
                        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                    >
                        Logout
                    </button>
                </div>
                
                <div className="mb-6 p-6 bg-gray-50 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Welcome, {user?.name || 'User'}!</h2>
                    <p className="text-gray-600">Email: {user?.email}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-blue-50 rounded-lg">
                        <h3 className="text-lg font-semibold mb-3 text-blue-700">Your Documents</h3>
                        <p className="text-gray-600">You haven't uploaded any documents yet.</p>
                    </div>
                    
                    <div className="p-6 bg-purple-50 rounded-lg">
                        <h3 className="text-lg font-semibold mb-3 text-purple-700">Recent Activity</h3>
                        <p className="text-gray-600">No recent activity to display.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;