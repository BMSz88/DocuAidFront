import React, { useState } from 'react';
import { motion } from 'framer-motion';

const DocuAidDashboard = ({ user, onLogout }) => {
    const [activeSection, setActiveSection] = useState('home');

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <motion.aside
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="w-64 bg-white shadow-lg h-screen sticky top-0"
            >
                <div className="p-6 flex flex-col h-full">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-primary-600">DocuAid</h2>
                        <p className="text-sm text-gray-500 mt-1">Document AI Assistant</p>
                    </div>

                    <nav className="flex-1">
                        <ul className="space-y-2">
                            <li>
                                <button
                                    onClick={() => setActiveSection('home')}
                                    className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${activeSection === 'home' ? 'bg-primary-50 text-primary-600' : 'text-gray-600 hover:bg-gray-100'
                                        }`}
                                >
                                    <span className="material-icons-outlined mr-3">home</span>
                                    Dashboard
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => setActiveSection('documents')}
                                    className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${activeSection === 'documents' ? 'bg-primary-50 text-primary-600' : 'text-gray-600 hover:bg-gray-100'
                                        }`}
                                >
                                    <span className="material-icons-outlined mr-3">description</span>
                                    Documents
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => setActiveSection('chat')}
                                    className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${activeSection === 'chat' ? 'bg-primary-50 text-primary-600' : 'text-gray-600 hover:bg-gray-100'
                                        }`}
                                >
                                    <span className="material-icons-outlined mr-3">chat</span>
                                    AI Chat
                                </button>
                            </li>
                        </ul>
                    </nav>

                    <div className="mt-auto pt-6 border-t border-gray-200">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-medium">
                                {user.name?.charAt(0).toUpperCase() || 'U'}
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium">{user.name || 'User'}</p>
                                <p className="text-xs text-gray-500">{user.email}</p>
                            </div>
                        </div>
                        <button
                            onClick={onLogout}
                            className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                        >
                            <span className="material-icons-outlined mr-2 text-sm">logout</span>
                            Sign Out
                        </button>
                    </div>
                </div>
            </motion.aside>

            {/* Main Content */}
            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex-1 p-8"
            >
                <div className="max-w-5xl mx-auto">
                    <header className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">Welcome, {user.name || 'User'}!</h1>
                        <p className="text-gray-600 mt-2">Here's what's happening with your documents today.</p>
                    </header>

                    {activeSection === 'home' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white shadow rounded-lg p-6">
                                <h3 className="text-lg font-semibold mb-2">Recent Documents</h3>
                                <p className="text-gray-500">No documents uploaded yet. Start by uploading your first document.</p>
                                <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700">
                                    <span className="material-icons-outlined mr-2 text-sm">upload_file</span>
                                    Upload Document
                                </button>
                            </div>

                            <div className="bg-white shadow rounded-lg p-6">
                                <h3 className="text-lg font-semibold mb-2">AI Insights</h3>
                                <p className="text-gray-500">Ask DocuAid about your documents or generate summaries.</p>
                                <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700">
                                    <span className="material-icons-outlined mr-2 text-sm">smart_toy</span>
                                    Open AI Chat
                                </button>
                            </div>

                            <div className="bg-white shadow rounded-lg p-6">
                                <h3 className="text-lg font-semibold mb-2">Account Status</h3>
                                <p className="text-gray-500">Free Plan</p>
                                <ul className="mt-2 space-y-1 text-sm text-gray-600">
                                    <li className="flex items-center">
                                        <span className="material-icons-outlined mr-2 text-green-500 text-sm">check_circle</span>
                                        5 Document Uploads
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-icons-outlined mr-2 text-green-500 text-sm">check_circle</span>
                                        Basic AI Analysis
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-icons-outlined mr-2 text-green-500 text-sm">check_circle</span>
                                        Email Support
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}

                    {activeSection === 'documents' && (
                        <div className="bg-white shadow rounded-lg p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-semibold">Your Documents</h2>
                                <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700">
                                    <span className="material-icons-outlined mr-2 text-sm">upload_file</span>
                                    Upload New
                                </button>
                            </div>

                            <div className="flex flex-col items-center justify-center py-12 text-center">
                                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                    <span className="material-icons-outlined text-gray-400">description</span>
                                </div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">No documents yet</h3>
                                <p className="text-gray-500 max-w-sm">Upload your first document to get started with DocuAid's AI analysis features.</p>
                            </div>
                        </div>
                    )}

                    {activeSection === 'chat' && (
                        <div className="bg-white shadow rounded-lg p-6 h-[calc(100vh-12rem)]">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-semibold">AI Assistant</h2>
                                <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                    <span className="material-icons-outlined mr-2 text-sm">settings</span>
                                    Settings
                                </button>
                            </div>

                            <div className="flex flex-col items-center justify-center h-[calc(100%-4rem)] text-center">
                                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                                    <span className="material-icons-outlined text-primary-600">smart_toy</span>
                                </div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">DocuAid AI Assistant</h3>
                                <p className="text-gray-500 max-w-sm mb-6">Ask me anything about your documents or how I can help you with document analysis.</p>
                                <div className="w-full max-w-lg">
                                    <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                                        <input
                                            type="text"
                                            placeholder="Type your message..."
                                            className="flex-1 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 border-0"
                                        />
                                        <button className="bg-primary-600 text-white px-4 flex items-center justify-center">
                                            <span className="material-icons-outlined">send</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </motion.main>
        </div>
    );
};

export default DocuAidDashboard; 