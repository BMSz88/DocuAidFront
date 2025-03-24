import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const VSCodeExtension = () => {
  useEffect(() => {
    // Force scroll to top when component mounts
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
    
    const contentElement = document.getElementById('vscode-extension');
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
      id="vscode-extension" 
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 overflow-auto"
      style={{ 
        paddingTop: "80px",
        paddingBottom: "40px"
      }}
    >
      <div className="mb-10 sticky top-0 bg-gray-50 py-4 z-10">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">VS Code Extension</h1>
        <p className="text-lg text-gray-500">
          Integrate DocuAid directly into your VS Code development environment for seamless documentation access.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
            <div className="px-4 py-5 sm:p-6">
              <p className="text-gray-600 mb-6">
                The DocuAid VS Code extension brings powerful documentation capabilities directly into your code editor, 
                allowing you to access, search, and contribute to documentation without switching context.
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
                <h3 className="text-md font-medium text-gray-900 mb-3">Key Features</h3>
                <ul className="space-y-2 text-gray-600 ml-5 list-disc">
                  <li>Access documentation inline while coding with hover information</li>
                  <li>Search all connected documentation sources directly from VS Code</li>
                  <li>Generate documentation for your code with AI assistance</li>
                  <li>Create, update, and manage documentation without leaving your editor</li>
                  <li>Sync with your DocuAid workspace for seamless transitions</li>
                </ul>
              </div>
              
              <div className="flex items-center p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50">
                <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <div>
                  <span className="font-medium">Note:</span> The VS Code extension is available for all plans. VS Code 1.60.0 or higher is required.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Installation & Setup</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
            <div className="px-4 py-5 sm:p-6">
              <p className="text-gray-600 mb-6">
                Install and configure the DocuAid VS Code extension in just a few steps:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">1. Install the Extension</h3>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-600 mb-4">
                      There are two ways to install the DocuAid VS Code extension:
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Option 1: VS Code Marketplace</h4>
                        <ol className="list-decimal ml-5 space-y-2 text-gray-600">
                          <li>Open VS Code</li>
                          <li>Click on the Extensions view icon in the Activity Bar (or press <code className="bg-gray-100 px-1 py-0.5 rounded">Ctrl+Shift+X</code>)</li>
                          <li>Search for "DocuAid"</li>
                          <li>Click the "Install" button</li>
                        </ol>
                        
                        <div className="mt-4 flex items-center justify-center">
                          <a href="#" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M23.1555 8.8545L20.3781 7.0965C20.5015 6.6845 20.5696 6.252 20.5696 5.8065C20.5696 3.3405 18.5632 1.3335 16.0981 1.3335C15.3746 1.3335 14.689 1.509 14.0851 1.82L12.0001 0L9.91506 1.8195C9.31106 1.509 8.62556 1.3335 7.90206 1.3335C5.43706 1.3335 3.43006 3.3405 3.43006 5.8065C3.43006 6.252 3.49856 6.6845 3.62156 7.0965L0.844556 8.8545C0.328556 9.168 0 9.726 0 10.3335V15.3335C0 15.9225 0.309056 16.4625 0.799556 16.7805L3.65106 18.5895C3.53106 19.0085 3.46806 19.4485 3.46806 19.9C3.46806 22.4205 5.38856 24.3335 7.88856 24.3335C8.60856 24.3335 9.28756 24.1655 9.88556 23.862L12.0001 25.6665L14.1146 23.862C14.7126 24.1655 15.3916 24.3335 16.1116 24.3335C18.6116 24.3335 20.5321 22.4205 20.5321 19.9C20.5321 19.4485 20.4691 19.0085 20.3491 18.5895L23.2006 16.7805C23.6911 16.4625 24.0001 15.9225 24.0001 15.3335V10.3335C24.0001 9.726 23.6716 9.168 23.1555 8.8545Z" fill="#007ACC"/>
                              <path d="M23.1555 8.8545L20.3781 7.0965C20.5015 6.6845 20.5696 6.252 20.5696 5.8065C20.5696 3.3405 18.5632 1.3335 16.0981 1.3335C15.3746 1.3335 14.689 1.509 14.0851 1.82L12.0001 0L9.91506 1.8195C9.31106 1.509 8.62556 1.3335 7.90206 1.3335C5.43706 1.3335 3.43006 3.3405 3.43006 5.8065C3.43006 6.252 3.49856 6.6845 3.62156 7.0965L0.844556 8.8545C0.328556 9.168 0 9.726 0 10.3335V15.3335C0 15.9225 0.309056 16.4625 0.799556 16.7805L3.65106 18.5895C3.53106 19.0085 3.46806 19.4485 3.46806 19.9C3.46806 22.4205 5.38856 24.3335 7.88856 24.3335C8.60856 24.3335 9.28756 24.1655 9.88556 23.862L12.0001 25.6665L14.1146 23.862C14.7126 24.1655 15.3916 24.3335 16.1116 24.3335C18.6116 24.3335 20.5321 22.4205 20.5321 19.9C20.5321 19.4485 20.4691 19.0085 20.3491 18.5895L23.2006 16.7805C23.6911 16.4625 24.0001 15.9225 24.0001 15.3335V10.3335C24.0001 9.726 23.6716 9.168 23.1555 8.8545Z" fill="#007ACC"/>
                            </svg>
                            View in VS Code Marketplace
                          </a>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Option 2: Install from VSIX</h4>
                        <ol className="list-decimal ml-5 space-y-2 text-gray-600">
                          <li>Download the <code className="bg-gray-100 px-1 py-0.5 rounded">.vsix</code> file from our <a href="#" className="text-blue-600 hover:text-blue-800">website</a></li>
                          <li>In VS Code, open the Command Palette (press <code className="bg-gray-100 px-1 py-0.5 rounded">Ctrl+Shift+P</code>)</li>
                          <li>Type "vsix" and select "Extensions: Install from VSIX..."</li>
                          <li>Navigate to the downloaded file and select it</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">2. Authentication</h3>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-600 mb-4">
                      After installation, you'll need to authenticate with your DocuAid account:
                    </p>
                    
                    <ol className="list-decimal ml-5 space-y-3 text-gray-600">
                      <li>Click on the DocuAid icon in the VS Code activity bar</li>
                      <li>Click "Sign in to DocuAid" button</li>
                      <li>You'll be redirected to a web browser to complete authentication</li>
                      <li>After successful sign-in, return to VS Code where your session will be active</li>
                    </ol>
                    
                    <div className="mt-4 bg-blue-50 p-3 rounded-md border border-blue-200 text-sm text-blue-600">
                      <strong>Pro Tip:</strong> For enterprise users with SSO enabled, choose the "Sign in with SSO" option instead.
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">3. Configure Workspace Settings</h3>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-600 mb-4">
                      Customize how DocuAid works with your specific projects:
                    </p>
                    
                    <div className="bg-gray-800 rounded-md p-4 overflow-auto mb-4">
                      <pre className="text-sm text-gray-300 whitespace-pre-wrap">
{`// .vscode/settings.json
{
  "docuaid.documentationSources": [
    "./docs/**/*.md",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  "docuaid.aiAssistance": {
    "enabled": true,
    "suggestionsMode": "inline"
  },
  "docuaid.syncWithWorkspace": true,
  "docuaid.automaticDocGeneration": {
    "onSave": true,
    "functions": true,
    "classes": true
  }
}`}
                      </pre>
                    </div>
                    
                    <p className="text-xs text-gray-500">
                      Add these settings to your project's <code className="bg-gray-100 px-1 py-0.5 rounded">.vscode/settings.json</code> file or configure them through the VS Code settings UI.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Using the VS Code Extension</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <p className="text-gray-600 mb-6">
                The DocuAid VS Code extension offers several powerful features to enhance your development experience:
              </p>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-3">
                    <svg className="h-6 w-6 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <h3 className="text-lg font-medium text-gray-900">Documentation Explorer</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Browse all available documentation in a dedicated sidebar view. Filter by category, source, or search for specific topics.
                    Click any item to view its full content in the editor.
                  </p>
                  <div className="mt-3">
                    <p className="text-xs text-gray-500">Keyboard shortcut: <code className="bg-gray-100 px-1 py-0.5 rounded">Ctrl+Shift+D</code></p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-3">
                    <svg className="h-6 w-6 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <h3 className="text-lg font-medium text-gray-900">Quick Search</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Access documentation without leaving your code. Highlight a term, right-click, and select "Search in DocuAid" 
                    or use the command palette to search across all connected documentation sources.
                  </p>
                  <div className="mt-3">
                    <p className="text-xs text-gray-500">Keyboard shortcut: <code className="bg-gray-100 px-1 py-0.5 rounded">Ctrl+Alt+D</code></p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-3">
                    <svg className="h-6 w-6 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <h3 className="text-lg font-medium text-gray-900">AI-Powered Documentation Generation</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Generate documentation for your code automatically. Right-click on a function, class, or module and select 
                    "Generate Documentation" to create detailed, accurate documentation based on your code.
                  </p>
                  <div className="mt-3">
                    <p className="text-xs text-gray-500">Command: <code className="bg-gray-100 px-1 py-0.5 rounded">DocuAid: Generate Documentation</code></p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-3">
                    <svg className="h-6 w-6 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <h3 className="text-lg font-medium text-gray-900">Workspace Sync</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Keep your local documentation in sync with your DocuAid workspace. Changes made in VS Code can be pushed to your 
                    organization's shared documentation, and updates from your team are pulled automatically.
                  </p>
                  <div className="mt-3">
                    <p className="text-xs text-gray-500">Command: <code className="bg-gray-100 px-1 py-0.5 rounded">DocuAid: Sync Workspace</code></p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 border-t border-gray-200 pt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Code Documentation Example</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Here's how DocuAid can help you document your code with minimal effort:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Original Code:</h4>
                    <div className="bg-gray-800 rounded-md p-4 overflow-auto">
                      <pre className="text-sm text-gray-300 whitespace-pre-wrap">
{`function calculateTotalPrice(items, discount, taxRate) {
  let subtotal = 0;
  
  for (const item of items) {
    subtotal += item.price * item.quantity;
  }
  
  const discountAmount = subtotal * (discount / 100);
  const afterDiscount = subtotal - discountAmount;
  const tax = afterDiscount * (taxRate / 100);
  
  return afterDiscount + tax;
}`}
                      </pre>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">With DocuAid Generated Documentation:</h4>
                    <div className="bg-gray-800 rounded-md p-4 overflow-auto">
                      <pre className="text-sm text-gray-300 whitespace-pre-wrap">
{`/**
 * Calculates the total price of items with discount and tax applied
 * 
 * @param {Array<{price: number, quantity: number}>} items - Array of items with price and quantity
 * @param {number} discount - Discount percentage to apply (0-100)
 * @param {number} taxRate - Tax rate percentage to apply (0-100)
 * @returns {number} - Final price after discount and tax
 * 
 * @example
 * const items = [
 *   { price: 10, quantity: 2 },
 *   { price: 15, quantity: 1 }
 * ];
 * const total = calculateTotalPrice(items, 10, 8);
 * // Returns: 35.1 (subtotal 35, minus 10% discount, plus 8% tax)
 */
function calculateTotalPrice(items, discount, taxRate) {
  let subtotal = 0;
  
  for (const item of items) {
    subtotal += item.price * item.quantity;
  }
  
  const discountAmount = subtotal * (discount / 100);
  const afterDiscount = subtotal - discountAmount;
  const tax = afterDiscount * (taxRate / 100);
  
  return afterDiscount + tax;
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Extension Settings</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <p className="text-gray-600 mb-6">
                Customize the DocuAid VS Code extension behavior with these settings:
              </p>
              
              <div className="overflow-hidden border border-gray-200 rounded-md">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Setting</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Default</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">docuaid.documentationSources</td>
                      <td className="px-6 py-4 text-sm text-gray-500">File glob patterns to include as documentation sources</td>
                      <td className="px-6 py-4 text-sm text-gray-500">["./docs/**/*.md"]</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">docuaid.aiAssistance.enabled</td>
                      <td className="px-6 py-4 text-sm text-gray-500">Enable or disable AI-powered features</td>
                      <td className="px-6 py-4 text-sm text-gray-500">true</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">docuaid.syncWithWorkspace</td>
                      <td className="px-6 py-4 text-sm text-gray-500">Automatically sync with DocuAid workspace</td>
                      <td className="px-6 py-4 text-sm text-gray-500">true</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">docuaid.hoverPreview</td>
                      <td className="px-6 py-4 text-sm text-gray-500">Show documentation in hover previews</td>
                      <td className="px-6 py-4 text-sm text-gray-500">true</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">docuaid.docStyle</td>
                      <td className="px-6 py-4 text-sm text-gray-500">Documentation style (JSDoc, Google, etc.)</td>
                      <td className="px-6 py-4 text-sm text-gray-500">"auto"</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="mt-4 text-sm text-gray-500">
                Access these settings through VS Code's settings UI or directly in your <code className="bg-gray-100 px-1 py-0.5 rounded">settings.json</code> file.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-12 flex justify-between">
        <Link to="/slack-integration" className="text-indigo-600 hover:text-indigo-800">
          ← Slack Integration
        </Link>
        <Link to="/custom-integrations" className="text-indigo-600 hover:text-indigo-800">
          Next: Custom Integrations →
        </Link>
      </div>
    </div>
  );
};

export default VSCodeExtension; 