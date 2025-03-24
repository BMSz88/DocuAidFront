import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const SlackIntegration = () => {
  useEffect(() => {
    // Force scroll to top when component mounts
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
    
    const contentElement = document.getElementById('slack-integration');
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
      id="slack-integration" 
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 overflow-auto"
      style={{ 
        paddingTop: "80px",
        paddingBottom: "40px"
      }}
    >
      <div className="mb-10 sticky top-0 bg-gray-50 py-4 z-10">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Slack Integration</h1>
        <p className="text-lg text-gray-500">
          Connect DocuAid to your Slack workspace to streamline documentation access and collaboration.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
            <div className="px-4 py-5 sm:p-6">
              <p className="text-gray-600 mb-6">
                DocuAid's Slack integration bridges the gap between your documentation and your team's communication platform,
                allowing you to access documentation, receive notifications, and collaborate without leaving Slack.
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
                <h3 className="text-md font-medium text-gray-900 mb-3">Key Features</h3>
                <ul className="space-y-2 text-gray-600 ml-5 list-disc">
                  <li>Query your documentation directly from Slack with the /docuaid command</li>
                  <li>Receive notifications about documentation updates and changes</li>
                  <li>Share documentation snippets within channels and direct messages</li>
                  <li>Create documentation tickets from Slack conversations</li>
                  <li>Dashboard integration for documentation health monitoring</li>
                </ul>
              </div>
              
              <div className="flex items-center p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50">
                <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <div>
                  <span className="font-medium">Note:</span> Slack integration is available for all plans. A Slack workspace with admin privileges is required for installation.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Setting Up Slack Integration</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
            <div className="px-4 py-5 sm:p-6">
              <p className="text-gray-600 mb-6">
                Follow these steps to connect your Slack workspace to DocuAid:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">1. Install the DocuAid Slack App</h3>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <ol className="list-decimal ml-5 space-y-3 text-gray-600">
                      <li>Navigate to your DocuAid dashboard and select <span className="font-medium text-gray-800">Integrations</span> from the sidebar</li>
                      <li>Click <span className="font-medium text-gray-800">Connect</span> next to the Slack integration option</li>
                      <li>You'll be redirected to Slack to authorize the DocuAid app</li>
                      <li>Select the Slack workspace you want to integrate with DocuAid</li>
                      <li>Review and approve the requested permissions</li>
                    </ol>
                    
                    <div className="mt-4 flex items-center justify-center">
                      <a href="#" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
                        </svg>
                        Add to Slack
                      </a>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">2. Configure Channel Settings</h3>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-600 mb-4">
                      After installing the DocuAid app to your Slack workspace, you'll need to configure which channels it can access:
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-purple-100 text-purple-600">
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-sm font-medium text-gray-900">Notification Channels</h4>
                          <p className="mt-1 text-sm text-gray-500">Select which channels should receive documentation update notifications.</p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-purple-100 text-purple-600">
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-sm font-medium text-gray-900">Command Access</h4>
                          <p className="mt-1 text-sm text-gray-500">Configure which channels and users can use the /docuaid command.</p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-purple-100 text-purple-600">
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-sm font-medium text-gray-900">Permission Levels</h4>
                          <p className="mt-1 text-sm text-gray-500">Set up access levels for different user groups in your Slack workspace.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">3. Customize Notification Preferences</h3>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-600 mb-4">
                      Fine-tune what types of notifications are sent to your Slack workspace:
                    </p>
                    
                    <div className="bg-white rounded-md border border-gray-200 overflow-hidden">
                      <div className="px-4 py-5 divide-y divide-gray-200">
                        <div className="flex items-center justify-between pb-4">
                          <div className="flex flex-col">
                            <span className="text-sm font-medium text-gray-900">Documentation Updates</span>
                            <span className="text-xs text-gray-500">Notify when documentation is added or updated</span>
                          </div>
                          <div className="h-6 w-11 flex items-center">
                            <div className="bg-purple-600 w-11 h-6 rounded-full flex items-center justify-end px-0.5 cursor-pointer">
                              <div className="bg-white w-5 h-5 rounded-full shadow-md"></div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between py-4">
                          <div className="flex flex-col">
                            <span className="text-sm font-medium text-gray-900">AI Insights</span>
                            <span className="text-xs text-gray-500">Receive AI-generated insights about your documentation</span>
                          </div>
                          <div className="h-6 w-11 flex items-center">
                            <div className="bg-purple-600 w-11 h-6 rounded-full flex items-center justify-end px-0.5 cursor-pointer">
                              <div className="bg-white w-5 h-5 rounded-full shadow-md"></div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between py-4">
                          <div className="flex flex-col">
                            <span className="text-sm font-medium text-gray-900">User Activity</span>
                            <span className="text-xs text-gray-500">Track user interactions with your documentation</span>
                          </div>
                          <div className="h-6 w-11 flex items-center">
                            <div className="bg-gray-200 w-11 h-6 rounded-full flex items-center px-0.5 cursor-pointer">
                              <div className="bg-white w-5 h-5 rounded-full shadow-md"></div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between pt-4">
                          <div className="flex flex-col">
                            <span className="text-sm font-medium text-gray-900">Weekly Summaries</span>
                            <span className="text-xs text-gray-500">Get weekly summaries of documentation activity</span>
                          </div>
                          <div className="h-6 w-11 flex items-center">
                            <div className="bg-purple-600 w-11 h-6 rounded-full flex items-center justify-end px-0.5 cursor-pointer">
                              <div className="bg-white w-5 h-5 rounded-full shadow-md"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Using Slack Integration Features</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <p className="text-gray-600 mb-6">
                Once configured, DocuAid provides several powerful ways to interact with your documentation through Slack:
              </p>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-3">
                    <svg className="h-6 w-6 text-purple-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <h3 className="text-lg font-medium text-gray-900">The /docuaid Command</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Use the /docuaid command followed by your query to search documentation directly within Slack. 
                    For example: <code className="text-purple-600 bg-purple-50 px-1 py-0.5 rounded">/docuaid how to authenticate API</code>
                  </p>
                  <div className="mt-3 flex justify-end">
                    <a href="#" className="text-sm font-medium text-purple-600 hover:text-purple-500">
                      Learn more →
                    </a>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-3">
                    <svg className="h-6 w-6 text-purple-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                    <h3 className="text-lg font-medium text-gray-900">Notifications & Alerts</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Receive automated notifications in your designated channels when documentation is updated, 
                    or when AI detects potential documentation gaps or inconsistencies.
                  </p>
                  <div className="mt-3 flex justify-end">
                    <a href="#" className="text-sm font-medium text-purple-600 hover:text-purple-500">
                      Learn more →
                    </a>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-3">
                    <svg className="h-6 w-6 text-purple-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                    <h3 className="text-lg font-medium text-gray-900">Documentation Sharing</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Easily share documentation snippets in channels or direct messages. Snippets are beautifully formatted
                    with syntax highlighting and include direct links to the full documentation.
                  </p>
                  <div className="mt-3 flex justify-end">
                    <a href="#" className="text-sm font-medium text-purple-600 hover:text-purple-500">
                      Learn more →
                    </a>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-3">
                    <svg className="h-6 w-6 text-purple-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                    </svg>
                    <h3 className="text-lg font-medium text-gray-900">DocuAid Bot</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    The DocuAid bot can answer questions about your documentation directly in threads, provide summaries of
                    complex documentation, and help team members find the information they need.
                  </p>
                  <div className="mt-3 flex justify-end">
                    <a href="#" className="text-sm font-medium text-purple-600 hover:text-purple-500">
                      Learn more →
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 border-t border-gray-200 pt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Example: Using DocuAid in Slack</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Here's a typical workflow using DocuAid in your Slack workspace:
                </p>
                
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                  <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
                    <p className="text-sm font-medium text-gray-900">#development-team</p>
                  </div>
                  <div className="p-4 space-y-4">
                    <div className="flex">
                      <div className="flex-shrink-0 mr-3">
                        <div className="h-10 w-10 rounded bg-purple-100 flex items-center justify-center text-purple-800 font-medium">AW</div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Alex Wong <span className="text-xs text-gray-500">10:32 AM</span></p>
                        <p className="text-sm text-gray-600">Does anyone know how to implement OAuth in our API?</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 mr-3">
                        <div className="h-10 w-10 rounded bg-purple-100 flex items-center justify-center text-purple-800 font-medium">SM</div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Sarah Mitchell <span className="text-xs text-gray-500">10:34 AM</span></p>
                        <p className="text-sm text-gray-600">/docuaid api authentication oauth</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 mr-3">
                        <div className="h-10 w-10 rounded bg-gray-100 flex items-center justify-center">
                          <svg className="h-6 w-6 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 w-full">
                        <p className="text-sm font-medium text-gray-900">DocuAid Bot <span className="text-xs text-gray-500">10:34 AM</span></p>
                        <div className="mt-2">
                          <h4 className="text-sm font-semibold text-purple-800">OAuth Authentication</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            Implementing OAuth with DocuAid API requires the following steps:
                          </p>
                          <ol className="list-decimal text-sm text-gray-600 mt-2 ml-5 space-y-1">
                            <li>Register your application in the Developer Dashboard</li>
                            <li>Obtain client_id and client_secret credentials</li>
                            <li>Implement the authorization flow using our SDK</li>
                          </ol>
                          <div className="mt-2 pt-2 border-t border-gray-200 flex justify-between items-center">
                            <span className="text-xs text-gray-500">From: API Reference > Authentication</span>
                            <a href="#" className="text-xs text-purple-600 font-medium hover:text-purple-500">View Full Documentation →</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-12 flex justify-between">
        <Link to="/github-integration" className="text-indigo-600 hover:text-indigo-800">
          ← GitHub Integration
        </Link>
        <Link to="/vscode-extension" className="text-indigo-600 hover:text-indigo-800">
          Next: VS Code Extension →
        </Link>
      </div>
    </div>
  );
};

export default SlackIntegration; 