import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DocuAidDashboard from './components/DocuAidDashboard.jsx';
import { motion } from 'framer-motion';

const DashboardPage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const userInfo = localStorage.getItem('docuaid-user');

        if (userInfo) {
            try {
                const parsedUser = JSON.parse(userInfo);
                setUser(parsedUser);
                setIsLoggedIn(true);
            } catch (e) {
                console.error("Error parsing user data", e);
                handleLogout();
            }
        } else {
            navigate('/login');
        }
    }, [navigate]);

    if (!isLoggedIn || !user) {
        return (
            <div className="h-screen flex flex-col items-center justify-center bg-gray-50">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <div className="w-16 h-16 mx-auto mb-4 border-4 border-t-primary-500 border-r-primary-300 border-b-primary-100 border-l-primary-300 rounded-full animate-spin"></div>
                    <h2 className="text-xl font-semibold text-gray-700">Loading your dashboard...</h2>
                    <p className="text-gray-500 mt-2">Please wait while we set things up</p>
                </motion.div>
            </div>
        );
    }

    const handleLogout = () => {
        console.log("Logging out user...");

        // Clear ALL user data from local storage
        localStorage.removeItem('docuaid-user');
        localStorage.removeItem('docuaid-chat-history');
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        // Alternative approach - clear all storage
        try {
            localStorage.clear();
            sessionStorage.clear();
            console.log("All storage cleared successfully");
        } catch (err) {
            console.error("Error clearing storage:", err);
        }

        // Reset state
        setIsLoggedIn(false);
        setUser(null);

        // Use a small timeout to ensure storage is cleared before redirecting
        setTimeout(() => {
            // Redirect to home page instead of login to break the potential loop
            console.log("Redirecting to home after logout");
            // Use replace to prevent back navigation causing a loop
            navigate('/', { replace: true });
        }, 300);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="h-screen"
        >
            <DocuAidDashboard user={user} onLogout={handleLogout} />
        </motion.div>
    );
};

export default DashboardPage; 