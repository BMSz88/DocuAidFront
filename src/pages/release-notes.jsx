import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ReleaseNotes = () => {
  useEffect(() => {
    // Force scroll to top when component mounts
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
    
    const contentElement = document.getElementById('release-notes');
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

  // Array of releases, newest first
  const releases = [
    {
      version: "3.2.0",
      date: "March 15, 2024",
      type: "feature",
      highlights: [
        "Added custom integration SDK for building your own connectors",
        "Improved response time for large documentation sets by 40%",
        "New dark mode support across all documentation pages"
      ],
      sections: [
        {
          title: "New Features",
          items: [
            "Custom Integration SDK: Build connectors for any platform with our new developer toolkit",
            "Dark Mode: System-wide dark mode support with automatic detection of user preferences",
            "Bulk Import: Added ability to import multiple documents simultaneously",
            "Saved Searches: Pin frequently used searches for quick access"
          ]
        },
        {
          title: "Improvements",
          items: [
            "40% faster response times for documentation sets over 1GB",
            "Enhanced search relevance with new context-aware ranking algorithm",
            "Redesigned documentation explorer with collapsible sections",
            "Added keyboard shortcuts for common actions"
          ]
        },
        {
          title: "Bug Fixes",
          items: [
            "Fixed an issue where certain PDF documents weren't being indexed properly",
            "Resolved authentication token refresh issues on the API",
            "Fixed UI rendering problems on smaller screen sizes",
            "Corrected timezone handling for document modification dates"
          ]
        }
      ]
    },
    {
      version: "3.1.2",
      date: "February 28, 2024",
      type: "patch",
      highlights: [
        "Critical security update for API authentication",
        "Fixed PDF parsing issues on complex documents",
        "Performance improvements for VS Code extension"
      ],
      sections: [
        {
          title: "Security Updates",
          items: [
            "Strengthened API authentication to prevent token replay attacks",
            "Updated dependencies to address potential vulnerabilities",
            "Added additional rate limiting for authentication endpoints"
          ]
        },
        {
          title: "Bug Fixes",
          items: [
            "Fixed an issue with PDF parsing for documents containing complex tables and diagrams",
            "Corrected response formatting in certain Slack integration scenarios",
            "Resolved memory leak in the browser extension on long-running sessions"
          ]
        },
        {
          title: "Performance",
          items: [
            "VS Code extension startup time reduced by 30%",
            "Optimized browser extension memory usage",
            "Improved caching for frequently accessed documentation"
          ]
        }
      ]
    },
    {
      version: "3.1.0",
      date: "February 10, 2024",
      type: "feature",
      highlights: [
        "Added GitHub & Slack integrations",
        "New VS Code extension now available",
        "Expanded API with new endpoints for Teams management"
      ],
      sections: [
        {
          title: "Integrations",
          items: [
            "GitHub Integration: Connect repositories for automatic documentation generation",
            "Slack Integration: Query documentation directly from Slack channels",
            "VS Code Extension: Access DocuAid features without leaving your editor"
          ]
        },
        {
          title: "API Enhancements",
          items: [
            "New Teams API endpoints for managing team access and permissions",
            "Added bulk operations for document management",
            "Expanded webhook capabilities with more event types",
            "Improved rate limit handling with better headers and feedback"
          ]
        },
        {
          title: "User Experience",
          items: [
            "Redesigned settings panel with better organization",
            "Added export options for search results",
            "New onboarding flow for first-time users",
            "Improved accessibility across all interfaces"
          ]
        }
      ]
    },
    {
      version: "3.0.0",
      date: "January 15, 2024",
      type: "major",
      highlights: [
        "Complete redesign with new UI and improved UX",
        "AI-powered document understanding with 90% accuracy",
        "New API with expanded capabilities and better documentation"
      ],
      sections: [
        {
          title: "Major Changes",
          items: [
            "Complete UI/UX redesign focusing on simplicity and productivity",
            "New AI engine with improved document understanding capabilities",
            "Rebuilt API with better performance, security, and feature set",
            "Enhanced collaboration tools for team documentation management"
          ]
        },
        {
          title: "AI Capabilities",
          items: [
            "Document context awareness with 90% accuracy on technical content",
            "Cross-document references and relationship mapping",
            "Automatic summaries and concept extraction",
            "Code snippet understanding with language detection"
          ]
        },
        {
          title: "Platform Updates",
          items: [
            "New browser extension architecture with better performance",
            "Enterprise-grade security with SSO and role-based access control",
            "Expanded storage options including self-hosted capabilities",
            "New audit logging for all documentation actions"
          ]
        },
        {
          title: "Breaking Changes",
          items: [
            "Legacy API (v2) is now deprecated and will be removed in v3.2",
            "Document format changes require re-indexing existing collections",
            "Custom integrations need to be updated for the new authentication model",
            "Minimum browser requirements updated (see compatibility notes)"
          ]
        }
      ]
    },
    {
      version: "2.8.5",
      date: "December 5, 2023",
      type: "patch",
      highlights: [
        "Final update for v2.x series before v3.0 release",
        "Security patches and performance improvements",
        "Better handling of large documentation sets"
      ],
      sections: [
        {
          title: "Updates",
          items: [
            "Security patches for authentication and authorization systems",
            "Performance improvements for large documentation sets",
            "Fixed various UI glitches in preparation for v3.0",
            "Updated dependencies to latest versions"
          ]
        },
        {
          title: "Deprecation Notices",
          items: [
            "v2.x API will be deprecated with the release of v3.0",
            "Legacy export formats will be removed in v3.0",
            "Custom themes will need to be migrated to the new theme system"
          ]
        }
      ]
    }
  ];

  // Function to render the badge for release type
  const renderBadge = (type) => {
    let badgeClass = "";
    
    switch(type) {
      case "major":
        badgeClass = "bg-purple-100 text-purple-800 border-purple-200";
        break;
      case "feature":
        badgeClass = "bg-blue-100 text-blue-800 border-blue-200";
        break;
      case "patch":
        badgeClass = "bg-green-100 text-green-800 border-green-200";
        break;
      default:
        badgeClass = "bg-gray-100 text-gray-800 border-gray-200";
    }
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${badgeClass} border`}>
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </span>
    );
  };

  return (
    <div 
      id="release-notes" 
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 overflow-auto"
      style={{ 
        paddingTop: "80px",
        paddingBottom: "40px"
      }}
    >
      <div className="mb-10 sticky top-0 bg-gray-50 py-4 z-10">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Release Notes</h1>
        <p className="text-lg text-gray-500">
          Stay up to date with the latest features, improvements, and bug fixes for DocuAid.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <div className="border-l-4 border-primary-500 pl-4 mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Latest Updates</h2>
            <p className="text-gray-600">
              Our most recent releases and what they include.
            </p>
          </div>

          {releases.map((release, index) => (
            <div key={release.version} className={`mb-12 ${index > 0 ? 'pt-8 border-t border-gray-200' : ''}`}>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Version {release.version}</h3>
                  <div className="flex items-center mt-1">
                    <time className="text-gray-500">{release.date}</time>
                    <span className="mx-2 text-gray-300">•</span>
                    {renderBadge(release.type)}
                  </div>
                </div>
                
                {index === 0 && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                    Latest
                  </span>
                )}
              </div>

              {/* Highlights section */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                <h4 className="text-sm font-medium text-gray-700 uppercase tracking-wide mb-3">Highlights</h4>
                <ul className="space-y-2">
                  {release.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="h-5 w-5 text-primary-500 mt-0.5 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Detailed sections */}
              {release.sections.map(section => (
                <div key={section.title} className="mb-6">
                  <h4 className="text-lg font-medium text-gray-900 mb-3">{section.title}</h4>
                  <ul className="space-y-2 pl-6 list-disc text-gray-600">
                    {section.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Show a "Full Release Notes" link for older releases */}
              {index > 0 && (
                <div className="mt-4">
                  <a href="#" className="text-primary-600 hover:text-primary-800 text-sm font-medium inline-flex items-center">
                    Full Release Notes
                    <svg className="ml-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          ))}
        </section>

        <section>
          <div className="border-l-4 border-gray-300 pl-4 mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Looking Ahead</h2>
            <p className="text-gray-600">
              Features and improvements planned for upcoming releases.
            </p>
          </div>
          
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Coming in Version 3.3</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-md font-medium text-gray-800 mb-2">Planned Features</h4>
                  <ul className="space-y-2 pl-6 list-disc text-gray-600">
                    <li>Enhanced AI-powered code documentation generation</li>
                    <li>New integrations with Jira and Confluence</li>
                    <li>Multi-language support for documentation generation</li>
                    <li>Advanced analytics dashboard for documentation usage</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-md font-medium text-gray-800 mb-2">In Development</h4>
                  <ul className="space-y-2 pl-6 list-disc text-gray-600">
                    <li>Mobile applications for iOS and Android</li>
                    <li>Real-time collaboration features for team documentation</li>
                    <li>Advanced document version control</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-blue-700">
                        Our roadmap is influenced by customer feedback. Have a feature request?
                        <a href="#" className="font-medium text-blue-700 underline ml-1">Let us know</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="border-l-4 border-gray-300 pl-4 mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Release Cycle</h2>
            <p className="text-gray-600">
              Information about our versioning and release process.
            </p>
          </div>
          
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="prose prose-primary max-w-none">
                <p>
                  DocuAid follows a predictable release cycle to help you plan for updates:
                </p>
                
                <ul>
                  <li>
                    <strong>Major releases</strong> (x.0.0) - Significant new features, possible breaking changes, released approximately once a year
                  </li>
                  <li>
                    <strong>Feature releases</strong> (3.x.0) - New features and improvements, backward compatible, released every 1-2 months
                  </li>
                  <li>
                    <strong>Patch releases</strong> (3.1.x) - Bug fixes and minor improvements, released as needed, typically every 2-3 weeks
                  </li>
                </ul>
                
                <p>
                  We maintain the latest major version and one version back. For example, when v3.x is current, we continue to provide security updates for v2.x for 6 months.
                </p>
                
                <p>
                  For enterprise customers, extended support is available for older versions. Contact your account manager for details.
                </p>
              </div>
              
              <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="text-md font-medium text-gray-800 mb-2">Stay Updated</h4>
                <p className="text-gray-600 mb-4">
                  Subscribe to our release notifications to receive emails when new versions are available.
                </p>
                <div className="flex sm:flex-row flex-col gap-2 sm:items-center">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow min-w-0 rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  />
                  <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                    Subscribe
                  </button>
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
      </div>
    </div>
  );
};

export default ReleaseNotes; 