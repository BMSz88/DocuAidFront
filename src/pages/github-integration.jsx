import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const GitHubIntegration = () => {
  useEffect(() => {
    // Force scroll to top when component mounts
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
    
    const contentElement = document.getElementById('github-integration');
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
      id="github-integration" 
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 overflow-auto"
      style={{ 
        paddingTop: "80px",
        paddingBottom: "40px"
      }}
    >
      <div className="mb-10 sticky top-0 bg-gray-50 py-4 z-10">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">GitHub Integration</h1>
        <p className="text-lg text-gray-500">
          Connect DocuAid to your GitHub repositories to unlock powerful documentation features.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
            <div className="px-4 py-5 sm:p-6">
              <p className="text-gray-600 mb-6">
                DocuAid's GitHub integration enables you to connect your GitHub repositories directly to your DocuAid workspace, 
                allowing for seamless documentation management and AI-powered insights for your codebase.
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
                <h3 className="text-md font-medium text-gray-900 mb-3">Key Features</h3>
                <ul className="space-y-2 text-gray-600 ml-5 list-disc">
                  <li>Automatic documentation generation from code comments and READMEs</li>
                  <li>Integration with GitHub issues for documentation tasks</li>
                  <li>Pull request previews for documentation changes</li>
                  <li>AI-powered suggestions for improving documentation coverage</li>
                  <li>Documentation quality monitoring through GitHub Actions</li>
                </ul>
              </div>
              
              <div className="flex items-center p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50">
                <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <div>
                  <span className="font-medium">Note:</span> GitHub integration is available for Professional and Enterprise plans. A GitHub account is required.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Setting Up GitHub Integration</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
            <div className="px-4 py-5 sm:p-6">
              <p className="text-gray-600 mb-6">
                Follow these steps to connect your GitHub repositories to DocuAid:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">1. Install the DocuAid GitHub App</h3>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <ol className="list-decimal ml-5 space-y-3 text-gray-600">
                      <li>Navigate to your DocuAid dashboard and select <span className="font-medium text-gray-800">Integrations</span> from the sidebar</li>
                      <li>Click <span className="font-medium text-gray-800">Connect</span> next to the GitHub integration option</li>
                      <li>You'll be redirected to GitHub to authorize DocuAid</li>
                      <li>Choose whether to grant access to all repositories or select specific ones</li>
                      <li>Review and approve the requested permissions</li>
                    </ol>
                    
                    <div className="mt-4 flex items-center justify-center">
                      <a href="#" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V19c0 .27.16.59.67.5C17.14 18.16 20 14.42 20 10A10 10 0 0010 0z" clipRule="evenodd" />
                        </svg>
                        Install DocuAid GitHub App
                      </a>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">2. Configure Repository Settings</h3>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-600 mb-4">
                      After connecting your GitHub account, you'll need to configure how DocuAid interacts with your repositories:
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-indigo-100 text-indigo-600">
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-sm font-medium text-gray-900">Select Repositories</h4>
                          <p className="mt-1 text-sm text-gray-500">Choose which repositories DocuAid should monitor and generate documentation for.</p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-indigo-100 text-indigo-600">
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-sm font-medium text-gray-900">Documentation Settings</h4>
                          <p className="mt-1 text-sm text-gray-500">Configure file paths, documentation styles, and how DocuAid should process your code.</p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-indigo-100 text-indigo-600">
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-sm font-medium text-gray-900">Notification Preferences</h4>
                          <p className="mt-1 text-sm text-gray-500">Set up alerts for documentation issues, updates, and AI suggestions.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">3. Add DocuAid Configuration File</h3>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-600 mb-4">
                      For advanced configuration, add a <code className="text-indigo-600 bg-indigo-50 px-1 py-0.5 rounded">docuaid.yaml</code> file to the root of your repository:
                    </p>
                    
                    <div className="bg-gray-800 rounded-md p-4 overflow-auto mb-4">
                      <pre className="text-sm text-gray-300 whitespace-pre-wrap">
{`# DocuAid Configuration File
version: 1.0

# Documentation sources
sources:
  - path: ./docs/**/*.md
    type: markdown
  - path: ./src/**/*.{js,jsx,ts,tsx}
    type: source_code
    
# Documentation output settings
output:
  format: markdown
  destination: ./docuaid-output
  
# GitHub integration settings
github:
  issues:
    enabled: true
    labels: ["documentation", "docuaid"]
  pr_preview: true
  actions:
    enabled: true`}
                      </pre>
                    </div>
                    
                    <p className="text-xs text-gray-500">
                      Commit this file to your repository and DocuAid will automatically detect and use these settings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Using GitHub Integration Features</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <p className="text-gray-600 mb-6">
                Once configured, DocuAid provides several powerful features to enhance your GitHub workflow:
              </p>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-3">
                    <svg className="h-6 w-6 text-indigo-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <h3 className="text-lg font-medium text-gray-900">Documentation Generation</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    DocuAid automatically extracts documentation from your code comments, READMEs, and other markdown files. 
                    It organizes this content into a structured, searchable knowledge base.
                  </p>
                  <div className="mt-3 flex justify-end">
                    <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                      Learn more →
                    </a>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-3">
                    <svg className="h-6 w-6 text-indigo-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                    <h3 className="text-lg font-medium text-gray-900">GitHub Issues Integration</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    DocuAid can create GitHub issues for identified documentation gaps, outdated content, or areas 
                    needing improvement. These issues can be assigned and tracked like any other GitHub task.
                  </p>
                  <div className="mt-3 flex justify-end">
                    <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                      Learn more →
                    </a>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-3">
                    <svg className="h-6 w-6 text-indigo-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <h3 className="text-lg font-medium text-gray-900">Pull Request Previews</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    When you make a pull request that affects documentation files, DocuAid provides a preview of how those 
                    changes will appear in the final documentation, helping reviewers evaluate the impact.
                  </p>
                  <div className="mt-3 flex justify-end">
                    <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                      Learn more →
                    </a>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-3">
                    <svg className="h-6 w-6 text-indigo-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <h3 className="text-lg font-medium text-gray-900">GitHub Actions Integration</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    DocuAid provides GitHub Actions that can be added to your CI/CD pipeline to automatically check 
                    documentation quality, generate docs, and maintain documentation health with each commit.
                  </p>
                  <div className="mt-3 flex justify-end">
                    <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                      Learn more →
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 border-t border-gray-200 pt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Example: Adding DocuAid GitHub Action</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Add this GitHub Action workflow to automatically check documentation with each pull request:
                </p>
                
                <div className="bg-gray-800 rounded-md p-4 overflow-auto">
                  <pre className="text-sm text-gray-300 whitespace-pre-wrap">
{`# .github/workflows/docuaid.yml
name: DocuAid Documentation Check

on:
  pull_request:
    branches: [ main, master ]
    paths:
      - '**.md'
      - '**.js'
      - '**.jsx'
      - '**.ts'
      - '**.tsx'
      - 'docuaid.yaml'

jobs:
  doc-check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: DocuAid Documentation Quality Check
        uses: docuaid/github-action@v1
        with:
          api-key: \${{ secrets.DOCUAID_API_KEY }}
          config-path: './docuaid.yaml'
          fail-on-warning: false`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-12 flex justify-between">
        <Link to="/documentation" className="text-indigo-600 hover:text-indigo-800">
          ← Back to Documentation
        </Link>
        <Link to="/slack-integration" className="text-indigo-600 hover:text-indigo-800">
          Next: Slack Integration →
        </Link>
      </div>
    </div>
  );
};

export default GitHubIntegration; 