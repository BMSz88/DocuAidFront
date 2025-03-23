import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const SharingAndCollaboration = () => {
  useEffect(() => {
    // Force scroll to top when component mounts
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
    
    const contentElement = document.getElementById('sharing-and-collaboration');
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
      id="sharing-and-collaboration" 
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 overflow-auto"
      style={{ 
        paddingTop: "80px",
        paddingBottom: "40px"
      }}
    >
      <div className="mb-10 sticky top-0 bg-gray-50 py-4 z-10">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Sharing and Collaboration</h1>
        <p className="text-lg text-gray-500">
          Learn how to share DocuAid resources and collaborate with your team members effectively.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sharing Documents and Responses</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
            <div className="px-4 py-5 sm:p-6">
              <p className="text-gray-600 mb-6">
                DocuAid makes it easy to share documents, collections, and AI responses with team members and external collaborators.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Sharing Individual Documents</h3>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                      <li>Navigate to the document in your dashboard</li>
                      <li>Click the "Share" button in the document actions menu</li>
                      <li>Enter the email addresses of people you want to share with</li>
                      <li>Set appropriate permission levels (view, comment, edit)</li>
                      <li>Click "Send" to share the document and notify recipients</li>
                    </ol>
                    
                    <div className="mt-4 border-t border-gray-200 pt-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-gray-600">
                            <strong>Note:</strong> Recipients will need a DocuAid account to access shared documents. If they don't have an account, they'll be prompted to create one.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Sharing AI Responses</h3>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-gray-600 mb-4">
                      AI responses can be shared individually or along with the document they reference:
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="bg-indigo-100 p-1 rounded-md">
                          <svg className="h-5 w-5 text-indigo-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                          </svg>
                        </div>
                        <p className="ml-3 text-sm text-gray-600">
                          <strong>Share via link:</strong> Click the "Copy link" button next to any AI response to copy a shareable URL.
                        </p>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-indigo-100 p-1 rounded-md">
                          <svg className="h-5 w-5 text-indigo-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0v3H7V4h6zm-5 7a1 1 0 100-2 1 1 0 000 2zm1 2a1 1 0 11-2 0 1 1 0 012 0zm3-2a1 1 0 100-2 1 1 0 000 2zm1 2a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="ml-3 text-sm text-gray-600">
                          <strong>Export as PDF:</strong> Use the "Export" option to create a PDF containing both the document content and AI responses.
                        </p>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-indigo-100 p-1 rounded-md">
                          <svg className="h-5 w-5 text-indigo-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </div>
                        <p className="ml-3 text-sm text-gray-600">
                          <strong>Share via email:</strong> Send responses directly via email by clicking the "Email" button and entering recipient details.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Team Collaboration</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
            <div className="px-4 py-5 sm:p-6">
              <p className="text-gray-600 mb-6">
                DocuAid's team collaboration features allow multiple users to work together on the same documents and collections.
              </p>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Creating a Team</h3>
                  <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-600">
                    <li>Go to "Teams" in your dashboard sidebar</li>
                    <li>Click "Create New Team"</li>
                    <li>Enter a team name and description</li>
                    <li>Add members by email address</li>
                    <li>Set appropriate roles (admin, member, viewer)</li>
                    <li>Click "Create Team" to finish</li>
                  </ol>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Team Roles and Permissions</h3>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-baseline">
                      <span className="text-indigo-600 font-bold mr-2">Admin:</span>
                      <span>Can add/remove members, manage permissions, and control all team content</span>
                    </li>
                    <li className="flex items-baseline">
                      <span className="text-indigo-600 font-bold mr-2">Member:</span>
                      <span>Can add documents, create collections, and collaborate on team content</span>
                    </li>
                    <li className="flex items-baseline">
                      <span className="text-indigo-600 font-bold mr-2">Viewer:</span>
                      <span>Can only view documents and AI responses, but cannot edit or add content</span>
                    </li>
                  </ul>
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
                      <strong>Note:</strong> Team features are available on Professional and Enterprise plans only. Upgrade your subscription to access these collaboration features.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Collaborative Workspaces</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <p className="text-gray-600 mb-6">
                Workspaces allow teams to organize documents, collections, and AI conversations in a shared environment.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Creating a Workspace</h3>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                      <li>Navigate to the "Workspaces" section in your dashboard</li>
                      <li>Click "New Workspace"</li>
                      <li>Enter a name and description for your workspace</li>
                      <li>Select the team that will have access</li>
                      <li>Choose workspace categories and tags for organization</li>
                      <li>Click "Create Workspace" to finalize</li>
                    </ol>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Workspace Features</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="flex items-center mb-2">
                        <svg className="h-5 w-5 text-indigo-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                        </svg>
                        <h4 className="font-medium text-gray-900">Shared Document Library</h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        Store and organize all workspace documents in one central location accessible to all team members.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="flex items-center mb-2">
                        <svg className="h-5 w-5 text-indigo-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                          <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                        </svg>
                        <h4 className="font-medium text-gray-900">Commenting System</h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        Add comments on documents and AI responses to discuss insights and provide feedback.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="flex items-center mb-2">
                        <svg className="h-5 w-5 text-indigo-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        <h4 className="font-medium text-gray-900">Activity Feed</h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        Track all workspace activity including uploads, edits, comments, and AI interactions.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="flex items-center mb-2">
                        <svg className="h-5 w-5 text-indigo-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                        </svg>
                        <h4 className="font-medium text-gray-900">Access Controls</h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        Set granular permissions for documents, folders, and collections within the workspace.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-12 flex justify-between">
        <Link to="/advanced-query-techniques" className="text-indigo-600 hover:text-indigo-800">
          ← Advanced Query Techniques
        </Link>
        <Link to="/customizing-experience" className="text-indigo-600 hover:text-indigo-800">
          Next: Customizing Your Experience →
        </Link>
      </div>
    </div>
  );
};

export default SharingAndCollaboration; 