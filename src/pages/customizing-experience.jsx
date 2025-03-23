import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CustomizingExperience = () => {
  useEffect(() => {
    // Force scroll to top when component mounts
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
    
    const contentElement = document.getElementById('customizing-experience');
    if (contentElement) {
      contentElement.scrollTop = 0;
    }

    setTimeout(() => {
      window.scrollTo(0, 0);
      if (contentElement) {
        contentElement.scrollTop = 0;
      }
    }, 200);
  }, []);

  return (
    <div 
      id="customizing-experience" 
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 overflow-auto"
      style={{ 
        paddingTop: "80px",
        paddingBottom: "40px"
      }}
    >
      <div className="mb-10 sticky top-0 bg-gray-50 py-4 z-10">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Customizing Your Experience</h1>
        <p className="text-lg text-gray-500">
          Learn how to personalize DocuAid to match your workflow and preferences.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">User Interface Settings</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
            <div className="px-4 py-5 sm:p-6">
              <p className="text-gray-600 mb-6">
                DocuAid offers several ways to customize the interface to better suit your needs and working style.
              </p>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Theme Preferences</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Choose between light, dark, or system-based themes to reduce eye strain and match your preferred aesthetic.
                  </p>
                  
                  <div className="flex space-x-2 mb-4">
                    <div className="flex-1 bg-white p-3 border border-gray-200 rounded-md text-center">
                      <span className="text-xs font-medium text-gray-500">Light</span>
                    </div>
                    <div className="flex-1 bg-gray-800 p-3 border border-gray-700 rounded-md text-center">
                      <span className="text-xs font-medium text-gray-300">Dark</span>
                    </div>
                    <div className="flex-1 bg-gradient-to-r from-white to-gray-800 p-3 border border-gray-300 rounded-md text-center">
                      <span className="text-xs font-medium text-gray-700">Auto</span>
                    </div>
                  </div>
                  
                  <p className="text-xs text-gray-500">
                    To change your theme, go to Settings → Appearance → Theme and select your preferred option.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Layout Options</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Adjust the layout of the DocuAid interface to maximize your screen space and focus on what matters.
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center">
                      <div className="h-4 w-4 border border-indigo-500 rounded-full bg-indigo-500 mr-2"></div>
                      <span className="text-sm text-gray-600">Compact mode</span>
                    </div>
                    <div className="flex items-center">
                      <div className="h-4 w-4 border border-gray-300 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-600">Comfortable mode</span>
                    </div>
                    <div className="flex items-center">
                      <div className="h-4 w-4 border border-gray-300 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-600">Full-width mode</span>
                    </div>
                  </div>
                  
                  <p className="text-xs text-gray-500">
                    To change your layout, go to Settings → Appearance → Layout and select your preferred option.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                <h3 className="text-md font-medium text-indigo-900 mb-2">Pro Tip: Keyboard Shortcuts</h3>
                <p className="text-sm text-indigo-700 mb-3">
                  You can quickly toggle between light and dark themes using <kbd className="px-1 py-0.5 bg-white border border-gray-300 rounded-md text-xs">Ctrl</kbd> + <kbd className="px-1 py-0.5 bg-white border border-gray-300 rounded-md text-xs">Shift</kbd> + <kbd className="px-1 py-0.5 bg-white border border-gray-300 rounded-md text-xs">T</kbd>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">AI Response Customization</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
            <div className="px-4 py-5 sm:p-6">
              <p className="text-gray-600 mb-6">
                Tailor how DocuAid's AI responds to your queries to better match your needs and preferences.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Response Length</h3>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-600 mb-4">
                      Control how detailed or concise you want the AI's responses to be.
                    </p>
                    
                    <div className="relative pt-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold inline-block text-indigo-600">
                            Concise
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-semibold inline-block text-indigo-600">
                            Detailed
                          </span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
                        <div className="w-2/3 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"></div>
                      </div>
                    </div>
                    
                    <p className="text-xs text-gray-500">
                      To adjust response length, go to Settings → AI Preferences → Response Length and move the slider to your preference.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Tone and Style</h3>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-600 mb-4">
                      Select the writing style that best suits your needs, from technical and formal to conversational.
                    </p>
                    
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="bg-indigo-100 border border-indigo-200 rounded-md p-2 text-center">
                        <span className="text-xs font-medium text-indigo-800">Technical</span>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-md p-2 text-center">
                        <span className="text-xs font-medium text-gray-600">Balanced</span>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-md p-2 text-center">
                        <span className="text-xs font-medium text-gray-600">Conversational</span>
                      </div>
                    </div>
                    
                    <p className="text-xs text-gray-500">
                      To change the tone, go to Settings → AI Preferences → Tone and Style and select your preferred option.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Language Preferences</h3>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-600 mb-4">
                      DocuAid supports multiple languages for AI responses, with more being added regularly.
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <div className="bg-indigo-100 border border-indigo-200 rounded-md px-2 py-1">
                        <span className="text-xs font-medium text-indigo-800">English</span>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-md px-2 py-1">
                        <span className="text-xs font-medium text-gray-600">Spanish</span>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-md px-2 py-1">
                        <span className="text-xs font-medium text-gray-600">French</span>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-md px-2 py-1">
                        <span className="text-xs font-medium text-gray-600">German</span>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-md px-2 py-1">
                        <span className="text-xs font-medium text-gray-600">Japanese</span>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-md px-2 py-1">
                        <span className="text-xs font-medium text-gray-600">Chinese</span>
                      </div>
                    </div>
                    
                    <p className="text-xs text-gray-500">
                      To change the language, go to Settings → AI Preferences → Language and select your preferred option.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Custom Templates</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <p className="text-gray-600 mb-6">
                Create and save templates for common queries and actions to speed up your documentation workflow.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Query Templates</h3>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-600 mb-4">
                      Save frequently used queries as templates to quickly access common information.
                    </p>
                    
                    <div className="space-y-3 mb-4">
                      <div className="bg-white p-3 border border-gray-200 rounded-md">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-gray-900">API Authentication</span>
                          <div className="flex space-x-1">
                            <button className="text-gray-400 hover:text-gray-500">
                              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                              </svg>
                            </button>
                            <button className="text-gray-400 hover:text-gray-500">
                              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500">Show all authentication methods for the API with examples</p>
                      </div>
                      
                      <div className="bg-white p-3 border border-gray-200 rounded-md">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-gray-900">Error Troubleshooting</span>
                          <div className="flex space-x-1">
                            <button className="text-gray-400 hover:text-gray-500">
                              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                              </svg>
                            </button>
                            <button className="text-gray-400 hover:text-gray-500">
                              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500">List common errors and their solutions for quick debugging</p>
                      </div>
                    </div>
                    
                    <button className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <svg className="h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                      Create New Template
                    </button>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Workflow Shortcuts</h3>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-600 mb-4">
                      Create shortcuts for multi-step workflows to automate your documentation process.
                    </p>
                    
                    <div className="mb-4">
                      <div className="bg-white p-3 border border-gray-200 rounded-md mb-3">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-gray-900">Import & Analyze</span>
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                            Active
                          </span>
                        </div>
                        <p className="text-xs text-gray-500">Import a new document and run standard analysis</p>
                        <div className="mt-2 pt-2 border-t border-gray-100">
                          <span className="text-xs text-gray-400">3 steps configured</span>
                        </div>
                      </div>
                      
                      <div className="bg-white p-3 border border-gray-200 rounded-md">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-gray-900">Weekly Report</span>
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                            Active
                          </span>
                        </div>
                        <p className="text-xs text-gray-500">Generate a weekly summary of documentation changes</p>
                        <div className="mt-2 pt-2 border-t border-gray-100">
                          <span className="text-xs text-gray-400">5 steps configured</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-center">
                      <button className="inline-flex items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <svg className="h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                        </svg>
                        Configure Workflows
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      <strong>Note:</strong> Custom templates and workflow shortcuts are available on Professional and Enterprise plans only.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-12 flex justify-between">
        <Link to="/sharing-and-collaboration" className="text-indigo-600 hover:text-indigo-800">
          ← Sharing and Collaboration
        </Link>
        <div className="text-gray-400">
          End of Documentation
        </div>
      </div>
    </div>
  );
};

export default CustomizingExperience; 