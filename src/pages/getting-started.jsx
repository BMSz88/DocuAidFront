import React, { useEffect } from 'react';

const GettingStarted = () => {
  useEffect(() => {
    // Force scroll to top when component mounts
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    
    // Remove any fixed max-height that might be causing issues
    const contentElement = document.getElementById('getting-started');
    if (contentElement) {
      contentElement.scrollTop = 0;
    }

    // Add an extra check after a short delay to ensure proper scrolling
    setTimeout(() => {
      window.scrollTo(0, 0);
      if (contentElement) {
        contentElement.scrollTop = 0;
      }
    }, 200);
  }, []);

  return (
    <div 
      id="getting-started" 
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 overflow-auto"
      style={{ 
        paddingTop: "80px", // Increased padding at the top
        paddingBottom: "40px"
      }}
    >
      <div className="mb-10 sticky top-0 bg-gray-50 py-4 z-10">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Getting Started with DocuAid</h1>
        <p className="text-lg text-gray-500">
          Welcome to DocuAid! This guide will help you get up and running with our platform in just a few minutes.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Start</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Step 1: Create an Account</h3>
              <p className="text-gray-500 mb-4">
                Sign up for a DocuAid account by visiting our <a href="/signup" className="text-indigo-600 hover:text-indigo-500">signup page</a>.
              </p>
              <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
                <img 
                  src="/images/docs/signup-form.png" 
                  alt="Signup form" 
                  className="rounded-lg shadow-sm w-full max-w-md mx-auto" 
                />
                <div className="mt-4 bg-purple-50 rounded-lg p-4 border border-purple-100">
                  <h4 className="font-medium text-purple-800 mb-2">Create an Account</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Full Name</label>
                      <div className="mt-1 border border-gray-300 rounded-md p-2 bg-white text-gray-400 text-sm">
                        Enter your name
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email Address</label>
                      <div className="mt-1 border border-gray-300 rounded-md p-2 bg-white text-gray-400 text-sm">
                        Enter your email
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Password</label>
                      <div className="mt-1 border border-gray-300 rounded-md p-2 bg-white text-gray-400 text-sm">
                        Create a password (min 6 characters)
                      </div>
                    </div>
                    <div className="pt-2">
                      <button className="w-full bg-indigo-600 text-white rounded-md py-2 text-center font-medium">
                        Sign Up
                      </button>
                    </div>
                    <div className="text-center text-sm text-gray-500">
                      Or continue with
                    </div>
                    <div>
                      <button className="w-full border border-gray-300 rounded-md py-2 text-center font-medium flex items-center justify-center">
                        <svg viewBox="0 0 24 24" width="20" height="20" className="mr-2">
                          <path fill="#4285F4" d="M12 5c1.617 0 3.101.554 4.286 1.593l3.108-3.11A11.066 11.066 0 0 0 12 0C7.392 0 3.397 2.6 1.352 6.42l3.628 2.855C6.034 6.68 8.78 5 12 5z"/>
                          <path fill="#34A853" d="M5 12c0-.85.142-1.692.4-2.483L1.352 6.42A11.045 11.045 0 0 0 0 12c0 1.92.495 3.73 1.352 5.58l3.688-2.937c-.258-.792-.4-1.634-.4-2.483z"/>
                          <path fill="#FBBC05" d="M12 19c-3.22 0-5.966-1.68-7.02-4.16l-3.688 2.937A11.005 11.005 0 0 0 12 24c2.933 0 5.78-1.013 7.894-2.992l-3.265-2.547c-1.305.878-2.905 1.339-4.629 1.339z"/>
                          <path fill="#EA4335" d="M23.54 12.204c0-.85-.08-1.434-.236-2.064H12v3.96h6.506c-.145.953-.561 2.04-1.46 2.858l3.264 2.547c1.922-1.786 3.03-4.392 3.03-7.301z"/>
                        </svg>
                        Sign up with Google
                      </button>
                    </div>
                    <div className="text-center text-sm text-gray-500">
                      Already have an account? <a href="/login" className="text-indigo-600">Sign in instead</a>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500">
                You can sign up using your email or through Google authentication for a faster process.
              </p>
            </div>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Browser Extension</h3>
              <p className="text-gray-500 mb-4">
                Install the DocuAid browser extension to enhance your documentation experience and access AI-powered assistance directly on documentation pages.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-6">
                <div className="flex-1 border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
                  <div className="flex items-center mb-3">
                    <svg className="w-10 h-10 mr-3" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="50" cy="50" r="50" fill="#F1F1F1"/>
                      <circle cx="50" cy="50" r="22" fill="white"/>
                      <path d="M50 28C60.4934 28 69.3512 35.3043 71.4134 45H50L42.5 32.5L28.5866 55C26.5244 45.3043 35.3823 28 50 28Z" fill="#EA4335"/>
                      <path d="M71.4134 45C73.4756 54.6957 68.0044 65.1087 58.7866 69L42.5 32.5L50 28C60.4934 28 69.3512 35.3043 71.4134 45Z" fill="#FBBC05"/>
                      <path d="M28.5866 55C24.9512 45.3043 28.5866 34.6957 37.8045 28H58.7866L71.4134 55C68.0044 65.1087 58.7866 72 50 72C39.5066 72 30.6488 64.6957 28.5866 55Z" fill="#4285F4"/>
                      <path d="M28.5866 55L42.5 32.5L58.7866 69C49.5687 75.6957 34.9299 74.3913 28.5866 55Z" fill="#34A853"/>
                    </svg>
                    <span className="text-lg font-medium">Chrome</span>
                  </div>
                  <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-600 mb-4">
                    <li>Visit the <a href="https://chrome.google.com/webstore" target="_blank" className="text-indigo-600 hover:text-indigo-800">Chrome Web Store</a></li>
                    <li>Search for "DocuAid"</li>
                    <li>Click "Add to Chrome"</li>
                    <li>Confirm the installation when prompted</li>
                  </ol>
                  <a href="https://chrome.google.com/webstore" target="_blank" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                    Add to Chrome
                  </a>
                </div>
                
                <div className="flex-1 border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
                  <div className="flex items-center mb-3">
                    <svg className="w-10 h-10 mr-3" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="50" cy="50" r="50" fill="#F0F0F0"/>
                      <path d="M84.2 30.4C81.6 26.2 77 23.4 72.8 22.5C78.1 29.3 80.1 36.8 80.3 41.9C80.3 41.9 80.3 41.9 80.3 41.9C80.3 42.1 80.3 42.3 80.3 42.5C80.3 42.5 80.3 42.6 80.3 42.6C80.3 42.7 80.3 42.7 80.3 42.8C80.3 42.9 80.3 43 80.3 43.1C80.3 43.1 80.3 43.2 80.3 43.2C80.2 48.8 78.2 54.2 75 58.6C71.7 63.1 67.2 66.3 63.5 70C62.9 70.6 62.3 71.2 61.8 71.8C61.5 72.1 61.1 72.5 60.8 72.9C60 73.8 59.6 74.3 59.6 74.3L59.5 74.5C57 77.7 57.2 82.3 60 85.1C63.3 88.4 68.8 88.3 72 84.7C72.2 84.5 72.4 84.2 72.5 84C72.5 84 74.8 80.8 75.9 79.1C76.3 78.5 76.7 77.8 77.1 77.1C79.4 73.2 80.3 71 83.2 65.9C86.2 60.5 88 54.6 88 48.9C88 42.1 86.6 35.9 84.2 30.4Z" fill="url(#firefox-gradient-1)"/>
                      <path d="M48.4 86.5C35.4 86.5 25 76.1 25 63.1C25 50.1 35.4 39.7 48.4 39.7C61.4 39.7 71.8 50.1 71.8 63.1C71.8 76.1 61.4 86.5 48.4 86.5Z" fill="url(#firefox-gradient-2)"/>
                      <path d="M47.8 13C31.3 13.3 18 24.3 14.7 39.2C14.4 40.6 14.1 42 13.9 43.5C13.8 44.3 13.7 45.1 13.6 45.9C13.6 46.2 13.5 46.6 13.5 46.9C13.5 47.3 13.4 47.8 13.4 48.3C13.4 48.5 13.4 48.6 13.4 48.8C13.3 50.1 13.3 51.3 13.3 52.6C13.3 58.5 14.5 64.1 16.7 69.1C16.7 69.2 16.8 69.2 16.8 69.3C16.9 69.5 17 69.8 17.1 70C17.1 70.1 17.1 70.1 17.2 70.2C17.3 70.4 17.4 70.7 17.5 70.9C17.5 70.9 17.5 71 17.6 71C18.1 72.1 18.7 73.2 19.3 74.3C19.3 74.4 19.4 74.4 19.4 74.5C19.6 74.8 19.8 75.2 20 75.5C20 75.5 20 75.5 20 75.5C21.4 77.7 22.9 79.8 24.7 81.7C33.9 91.5 47.9 95.4 61.5 91.4C67.5 89.6 72.7 86.3 76.8 82C69.8 90.5 58.6 93.6 48.5 89.7C43.1 87.6 38.6 83.6 36 78.7C35.8 78.3 35.6 78 35.5 77.6C35.3 77.2 35.1 76.9 35 76.5C34.3 74.7 33.9 72.9 33.9 71.2C33.8 60.8 42.5 52.2 52.9 52.3C63.3 52.4 71.8 61 71.9 71.4C71.9 74.2 71.2 76.8 70.1 79.2C69.9 79.6 69.7 80 69.5 80.4C75.7 74.5 80 66.5 81.5 57.8C81.5 57.8 81.6 57.4 81.6 57.2C81.6 57.1 81.7 56.9 81.7 56.7C81.7 56.5 81.7 56.4 81.8 56.2C81.8 56 81.9 55.8 81.9 55.5C81.9 55.4 81.9 55.3 82 55.2C82 55 82.1 54.8 82.1 54.6C82.1 54.5 82.1 54.3 82.2 54.2C82.2 54 82.2 53.8 82.3 53.6C82.3 53.5 82.3 53.3 82.3 53.2C82.4 53 82.4 52.7 82.4 52.5C82.4 52.4 82.4 52.3 82.4 52.2C82.4 52 82.5 51.8 82.5 51.5C82.5 51.4 82.5 51.3 82.5 51.2C82.5 51 82.5 50.7 82.6 50.5C82.6 50.4 82.6 50.2 82.6 50.1C82.6 49.9 82.6 49.7 82.6 49.4C82.6 49.3 82.6 49.2 82.6 49.1C82.6 48.8 82.6 48.6 82.6 48.3C82.6 48.2 82.6 48.1 82.6 48C82.6 47.8 82.6 47.5 82.6 47.3C82.6 47.2 82.6 47.1 82.6 47C82.6 46.7 82.6 46.5 82.6 46.2C82.6 46.1 82.6 46 82.6 45.9C82.6 45.6 82.5 45.4 82.5 45.1C82.5 45 82.5 44.9 82.5 44.8C82.5 44.5 82.5 44.3 82.4 44C82.4 43.9 82.4 43.8 82.4 43.7C82.4 43.5 82.3 43.2 82.3 43C82.3 42.9 82.3 42.8 82.3 42.7C82.3 42.4 82.2 42.2 82.2 41.9C82.2 41.8 82.2 41.7 82.1 41.6C82.1 41.3 82 41.1 82 40.8C82 40.7 82 40.6 81.9 40.5C81.9 40.3 81.8 40 81.8 39.8C81.8 39.7 81.7 39.6 81.7 39.5C81.7 39.2 81.6 39 81.6 38.7C81.6 38.6 81.5 38.5 81.5 38.4C81.5 38.2 81.4 37.9 81.4 37.7C81.3 37.6 81.3 37.5 81.3 37.4C81.3 37.1 81.2 36.9 81.2 36.7C81.1 36.6 81.1 36.5 81.1 36.4C81 36.1 81 35.9 80.9 35.6C80.9 35.5 80.8 35.4 80.8 35.3C80.8 35 80.7 34.8 80.6 34.6C80.6 34.5 80.5 34.4 80.5 34.3C80.4 34 80.4 33.8 80.3 33.5C80.3 33.4 80.2 33.3 80.2 33.2C80.1 33 80.1 32.7 80 32.5C80 32.4 79.9 32.3 79.9 32.2C79.8 31.9 79.7 31.7 79.7 31.4C79.6 31.3 79.6 31.2 79.6 31.2C79.5 30.9 79.4 30.7 79.3 30.4C79.3 30.3 79.2 30.3 79.2 30.2C79.1 29.9 79 29.7 78.9 29.4C78.9 29.3 78.8 29.3 78.8 29.2C78.7 29 78.6 28.7 78.5 28.5C78.5 28.4 78.4 28.3 78.4 28.3C78.3 28 78.2 27.8 78.1 27.5C78 27.5 78 27.4 78 27.3C77.9 27.1 77.8 26.9 77.7 26.6C77.7 26.6 77.6 26.5 77.6 26.5C77.5 26.2 77.3 26 77.2 25.7C77.2 25.7 77.1 25.6 77.1 25.6C77 25.4 76.9 25.2 76.8 24.9C76.8 24.9 76.7 24.8 76.7 24.8C76.6 24.5 76.4 24.3 76.3 24.1C76.3 24 76.2 24 76.2 23.9C76.1 23.7 75.9 23.5 75.8 23.2C75.8 23.2 75.7 23.1 75.7 23.1C75.5 22.9 75.4 22.7 75.3 22.4C75.3 22.4 75.2 22.3 75.2 22.3C75 22.1 74.9 21.9 74.8 21.7C74.7 21.6 74.7 21.6 74.7 21.5C74.5 21.3 74.4 21.1 74.2 20.9C74.2 20.9 74.1 20.8 74.1 20.8C73.9 20.6 73.8 20.4 73.6 20.2C73.6 20.1 73.5 20.1 73.5 20.1C73.3 19.9 73.2 19.7 73 19.6C72.9 19.5 72.9 19.5 72.9 19.4C72.7 19.2 72.5 19.1 72.4 18.9C72.3 18.8 72.3 18.8 72.2 18.7C72 18.6 71.9 18.4 71.7 18.2C71.6 18.2 71.6 18.1 71.5 18.1C71.3 17.9 71.1 17.8 71 17.6C70.9 17.6 70.8 17.5 70.8 17.5C70.6 17.3 70.4 17.2 70.2 17C70.1 17 70.1 16.9 70 16.9C69.8 16.7 69.6 16.6 69.4 16.5C69.3 16.4 69.2 16.4 69.2 16.3C69 16.2 68.8 16 68.6 15.9C68.5 15.8 68.4 15.8 68.3 15.7C68.1 15.6 67.9 15.5 67.7 15.3C67.6 15.3 67.5 15.2 67.4 15.2C67.2 15 67 14.9 66.8 14.8C66.7 14.7 66.6 14.7 66.5 14.6C66.3 14.5 66.1 14.4 65.9 14.3C65.8 14.2 65.7 14.2 65.6 14.1C65.4 14 65.1 13.9 64.9 13.8C64.8 13.7 64.7 13.7 64.6 13.6C64.4 13.5 64.1 13.4 63.9 13.3C63.8 13.3 63.7 13.2 63.5 13.2C63.3 13.1 63 13 62.8 12.9C62.7 12.9 62.5 12.8 62.4 12.8C62.2 12.7 61.9 12.6 61.6 12.5C61.5 12.5 61.3 12.4 61.2 12.4C60.9 12.3 60.7 12.3 60.4 12.2C60.3 12.2 60.1 12.1 59.9 12.1C59.7 12 59.4 12 59.1 11.9C58.9 11.9 58.8 11.8 58.6 11.8C58.3 11.8 58.1 11.7 57.8 11.7C57.6 11.7 57.4 11.6 57.3 11.6C57 11.6 56.7 11.5 56.5 11.5C56.3 11.5 56.1 11.5 55.9 11.4C55.6 11.4 55.3 11.4 55.1 11.3C54.9 11.3 54.7 11.3 54.5 11.3C54.2 11.3 53.9 11.3 53.6 11.3C53.4 11.3 53.2 11.3 53 11.3C52.7 11.3 52.4 11.3 52.1 11.3C52.1 11.3 52.1 11.3 52 11.3C51.9 11.3 51.9 11.3 51.8 11.3C50.6 11.2 49.5 11.2 48.3 11.2C48.1 11.2 48 11.2 47.8 11.2C47.8 11.7 47.8 12.3 47.8 13Z" fill="url(#firefox-gradient-3)"/>
                      <defs>
                        <linearGradient id="firefox-gradient-1" x1="66.8" y1="23.3" x2="76.2" y2="78.4" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#FF980E"/>
                          <stop offset="0.21" stopColor="#FF7139"/>
                          <stop offset="0.36" stopColor="#FF5B62"/>
                          <stop offset="0.46" stopColor="#FF4F80"/>
                          <stop offset="0.53" stopColor="#FF4993"/>
                          <stop offset="0.77" stopColor="#FF3EB2"/>
                          <stop offset="1" stopColor="#FF3596"/>
                        </linearGradient>
                        <radialGradient id="firefox-gradient-2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(47.33 64.33) scale(31.45)">
                          <stop stopColor="#FFDE08"/>
                          <stop offset="0.3" stopColor="#FFD208"/>
                          <stop offset="0.64" stopColor="#FFAF08"/>
                          <stop offset="0.98" stopColor="#FF7B08"/>
                          <stop offset="1" stopColor="#FF7908"/>
                        </radialGradient>
                        <radialGradient id="firefox-gradient-3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(56.62 59.24) scale(49.96)">
                          <stop stopColor="#FFF44F"/>
                          <stop offset="0.27" stopColor="#FF980E"/>
                          <stop offset="0.45" stopColor="#FF5634"/>
                          <stop offset="0.61" stopColor="#FF3647"/>
                          <stop offset="0.72" stopColor="#E31587"/>
                        </radialGradient>
                      </defs>
                    </svg>
                    <span className="text-lg font-medium">Firefox</span>
                  </div>
                  <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-600 mb-4">
                    <li>Visit <a href="https://addons.mozilla.org" target="_blank" className="text-indigo-600 hover:text-indigo-800">Firefox Add-ons</a></li>
                    <li>Search for "DocuAid"</li>
                    <li>Click "Add to Firefox"</li>
                    <li>Confirm the installation when prompted</li>
                  </ol>
                  <a href="https://addons.mozilla.org" target="_blank" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600">
                    Add to Firefox
                  </a>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-medium text-gray-900 mb-2">Using the Extension</h4>
                <p className="text-sm text-gray-600 mb-3">
                  After installation, you'll see the DocuAid icon in your browser toolbar. Click it when browsing documentation to:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                  <li>Ask questions about the documentation you're reading</li>
                  <li>Get AI-powered summaries of complex documentation</li>
                  <li>Save important documentation for offline access</li>
                  <li>Create custom collections of documentation across different sites</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Step 2: Create Your First Project</h3>
              <p className="text-gray-500 mb-4">
                After logging in, navigate to the dashboard and click the "New Project" button to create your first project.
              </p>
              <div className="border border-gray-300 rounded-md p-4 mb-4">
                <code className="text-sm">
                  <pre className="whitespace-pre-wrap">
                    {`// Sample project structure
Project Name: My First DocuAid Project
Description: Documentation for my team's internal API
Access: Private (only visible to team members)
Tags: api, internal, documentation`}
                  </pre>
                </code>
              </div>
              <p className="text-sm text-gray-500">
                Give your project a clear name and description to make it easier to find and understand its purpose.
              </p>
            </div>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Step 3: Upload Your Documents</h3>
              <p className="text-gray-500 mb-4">
                Upload your documents by dragging and dropping files or using the file browser. DocuAid supports various file formats including PDF, DOCX, TXT, and more.
              </p>
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="bg-gray-50 rounded-md p-3 border border-gray-200">
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-5 h-5 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                    PDF Files
                  </div>
                </div>
                <div className="bg-gray-50 rounded-md p-3 border border-gray-200">
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-5 h-5 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                    Word Documents
                  </div>
                </div>
                <div className="bg-gray-50 rounded-md p-3 border border-gray-200">
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-5 h-5 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                    Text Files
                  </div>
                </div>
                <div className="bg-gray-50 rounded-md p-3 border border-gray-200">
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-5 h-5 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                    Markdown
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500">
                DocuAid will automatically process your documents, extracting text and preparing them for AI-powered queries.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Making Your First Query</h2>
          <p className="text-gray-500 mb-6">
            Once your documents are processed, you can start asking questions using natural language. DocuAid will search through your documents and provide accurate answers.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Example Queries</h3>
            <ul className="space-y-3">
              <li className="bg-white p-3 rounded shadow-sm">
                <p className="font-medium text-indigo-600">"What is the API rate limit for the premium plan?"</p>
              </li>
              <li className="bg-white p-3 rounded shadow-sm">
                <p className="font-medium text-indigo-600">"Show me the steps to configure the authentication middleware."</p>
              </li>
              <li className="bg-white p-3 rounded shadow-sm">
                <p className="font-medium text-indigo-600">"Find all instances where the error handling process is described."</p>
              </li>
            </ul>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Understanding Results</h3>
              <p className="text-gray-500 mb-4">
                DocuAid provides comprehensive responses with citations to the source documents. You can click on these citations to view the original context.
              </p>
              <div className="border border-gray-200 rounded-lg p-4 mb-4 bg-indigo-50">
                <div className="flex items-start mb-3">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-indigo-800">Response Accuracy: 97%</p>
                    <p className="mt-1 text-sm text-indigo-700">
                      Based on 3 different sources from your documents.
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  The API rate limit for the premium plan is 10,000 requests per day with a maximum of 100 requests per minute. 
                  This is sufficient for most medium-sized applications, but enterprise customers can request custom limits if needed.
                </p>
                <div className="mt-2 flex items-center text-xs text-gray-500">
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded">API_Documentation.pdf (p.27)</span>
                  <span className="mx-1">•</span>
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded">Premium_Plan_Details.docx</span>
                </div>
              </div>
              <p className="text-sm text-gray-500">
                You can save important responses, share them with team members, or export them for future reference.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Next Steps</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium text-gray-900">Invite Team Members</h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Collaborate with your team by inviting them to your DocuAid projects.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-4 sm:px-6">
                <div className="text-sm">
                  <a href="/user-guides/sharing-and-collaboration" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Learn about collaboration features <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium text-gray-900">Explore Integrations</h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Connect DocuAid with your favorite tools like Slack, Microsoft Teams, and more.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-4 sm:px-6">
                <div className="text-sm">
                  <a href="/integrations" className="font-medium text-indigo-600 hover:text-indigo-500">
                    View available integrations <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-12 border-t border-gray-200 pt-8">
        <div className="bg-indigo-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-indigo-800 mb-2">Need Help?</h2>
          <p className="text-indigo-700 mb-4">
            Our support team is always ready to assist you with any questions or issues you might encounter.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/support" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
              Contact Support
            </a>
            <a href="/community" className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Join Our Community
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted; 