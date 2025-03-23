import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const DocumentationLayout = ({ children }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const sidebarLinks = [
    { title: 'Getting Started', path: '/getting-started', icon: 'book-open' },
    { title: 'User Guides', path: '/user-guides', icon: 'file-text', 
      sublinks: [
        { title: 'Understanding AI Responses', path: '/understanding-ai-responses' },
        { title: 'Managing Document Sources', path: '/managing-document-sources' },
        { title: 'Advanced Query Techniques', path: '/advanced-query-techniques' },
        { title: 'Sharing and Collaboration', path: '/sharing-and-collaboration' },
        { title: 'Customizing Your Experience', path: '/customizing-experience' },
      ]
    },
    { title: 'API Reference', path: '/api-reference', icon: 'code' },
    { title: 'Integrations', path: '/integrations', icon: 'puzzle' },
    { title: 'Code Examples', path: '/code-examples', icon: 'terminal' },
  ];

  const resourceLinks = [
    { title: 'Release Notes', path: '/release-notes', icon: 'tag' },
    { title: 'Community Forum', path: '/community', icon: 'users' },
    { title: 'Support', path: '/support', icon: 'life-buoy' },
  ];

  // Function to render icon based on name
  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'book-open':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case 'file-text':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case 'code':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case 'puzzle':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
          </svg>
        );
      case 'terminal':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case 'tag':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
          </svg>
        );
      case 'users':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      case 'life-buoy':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const isActive = (path) => {
    if (path === currentPath) return true;
    if (path === '/user-guides' && currentPath.includes('/understanding-ai-responses')) return true;
    return false;
  };

  const isSubActive = (path) => {
    return currentPath === path;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex">
        {/* Sidebar */}
        <div className="hidden md:block w-64 bg-white border-r border-gray-200 overflow-y-auto">
          <div className="p-6">
            <div className="mb-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <nav className="space-y-1">
              {sidebarLinks.map((link) => (
                <div key={link.path}>
                  <Link
                    to={link.path}
                    className={`${
                      isActive(link.path)
                        ? 'bg-indigo-50 text-indigo-600'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    } group flex items-center px-3 py-2 text-sm font-medium rounded-md`}
                  >
                    <span className="mr-3 text-gray-400 group-hover:text-gray-500">
                      {renderIcon(link.icon)}
                    </span>
                    {link.title}
                  </Link>
                  
                  {link.sublinks && link.sublinks.length > 0 && (
                    <div className={`ml-6 mt-1 ${isActive(link.path) ? 'block' : 'hidden'}`}>
                      {link.sublinks.map((sublink) => (
                        <Link
                          key={sublink.path}
                          to={sublink.path}
                          className={`${
                            isSubActive(sublink.path)
                              ? 'text-indigo-600 font-medium'
                              : 'text-gray-500 hover:text-gray-700'
                          } block py-1 text-sm pl-3 border-l-2 ${
                            isSubActive(sublink.path) ? 'border-indigo-500' : 'border-transparent'
                          }`}
                        >
                          {sublink.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-8">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Resources
              </h3>
              <nav className="mt-2 space-y-1">
                {resourceLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`${
                      isActive(link.path)
                        ? 'bg-indigo-50 text-indigo-600'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    } group flex items-center px-3 py-2 text-sm font-medium rounded-md`}
                  >
                    <span className="mr-3 text-gray-400 group-hover:text-gray-500">
                      {renderIcon(link.icon)}
                    </span>
                    {link.title}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DocumentationLayout; 