import React, { useState, useEffect } from 'react';

const EnterpriseAdmin = () => {
  const [inquiries, setInquiries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [formData, setFormData] = useState({
    status: '',
    notes: ''
  });

  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';

  // Fetch all inquiries on component mount
  useEffect(() => {
    fetchInquiries();
  }, []);

  // Function to fetch all enterprise inquiries
  const fetchInquiries = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Get auth token from localStorage (assuming login system stores token here)
      const token = localStorage.getItem('authToken');
      
      if (!token) {
        setError('Authentication required. Please login as an admin.');
        setIsLoading(false);
        return;
      }

      const response = await fetch(`${apiUrl}/api/enterprise/inquiries`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch inquiries');
      }

      setInquiries(data.data);
    } catch (error) {
      console.error('Error fetching inquiries:', error);
      setError(error.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle selecting an inquiry to view/edit
  const handleSelectInquiry = (inquiry) => {
    setSelectedInquiry(inquiry);
    setFormData({
      status: inquiry.status,
      notes: inquiry.notes || ''
    });
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle updating inquiry status/notes
  const handleUpdateInquiry = async (e) => {
    e.preventDefault();
    
    try {
      setIsLoading(true);
      const token = localStorage.getItem('authToken');
      
      if (!token || !selectedInquiry) {
        return;
      }

      const response = await fetch(`${apiUrl}/api/enterprise/inquiries/${selectedInquiry._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to update inquiry');
      }

      // Update the inquiry in the list
      setInquiries(inquiries.map(item => 
        item._id === selectedInquiry._id ? data.data : item
      ));
      
      // Update the selected inquiry
      setSelectedInquiry(data.data);
      
      alert('Inquiry updated successfully');
    } catch (error) {
      console.error('Error updating inquiry:', error);
      alert(`Update failed: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle deleting an inquiry
  const handleDeleteInquiry = async (id) => {
    if (!window.confirm('Are you sure you want to delete this inquiry?')) {
      return;
    }
    
    try {
      setIsLoading(true);
      const token = localStorage.getItem('authToken');
      
      const response = await fetch(`${apiUrl}/api/enterprise/inquiries/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Failed to delete inquiry');
      }

      // Remove the deleted inquiry from the list
      setInquiries(inquiries.filter(item => item._id !== id));
      
      // Clear selection if the deleted inquiry was selected
      if (selectedInquiry && selectedInquiry._id === id) {
        setSelectedInquiry(null);
      }
      
      alert('Inquiry deleted successfully');
    } catch (error) {
      console.error('Error deleting inquiry:', error);
      alert(`Delete failed: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  // Format date for display
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  // If not authenticated, show login message
  if (error && error.includes('Authentication required')) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Authentication Required</h2>
          <p>Please login as an admin to access this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Enterprise Inquiries Dashboard</h1>
        
        {error && (
          <div className="bg-red-100 text-red-800 p-4 rounded-lg mb-6">
            {error}
          </div>
        )}
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Inquiries List */}
          <div className="w-full md:w-1/2 bg-white rounded-lg shadow">
            <div className="p-4 border-b">
              <h2 className="text-xl font-semibold">Inquiries ({inquiries.length})</h2>
            </div>
            
            {isLoading && !inquiries.length ? (
              <div className="p-8 text-center text-gray-500">Loading inquiries...</div>
            ) : inquiries.length === 0 ? (
              <div className="p-8 text-center text-gray-500">No inquiries found</div>
            ) : (
              <div className="divide-y max-h-[600px] overflow-y-auto">
                {inquiries.map(inquiry => (
                  <div 
                    key={inquiry._id} 
                    className={`p-4 hover:bg-gray-50 cursor-pointer ${
                      selectedInquiry && selectedInquiry._id === inquiry._id ? 'bg-blue-50' : ''
                    }`}
                    onClick={() => handleSelectInquiry(inquiry)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">{inquiry.companyName}</h3>
                      <span className={`text-xs px-2 py-1 rounded ${
                        inquiry.status === 'new' ? 'bg-blue-100 text-blue-800' :
                        inquiry.status === 'contacted' ? 'bg-yellow-100 text-yellow-800' :
                        inquiry.status === 'qualified' ? 'bg-green-100 text-green-800' :
                        inquiry.status === 'proposal' ? 'bg-purple-100 text-purple-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {inquiry.status || 'new'}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{inquiry.name} - {inquiry.workEmail}</p>
                    <p className="text-sm text-gray-500">{inquiry.estimatedUsers} users</p>
                    <p className="text-xs text-gray-400 mt-2">{formatDate(inquiry.createdAt)}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Inquiry Details */}
          <div className="w-full md:w-1/2 bg-white rounded-lg shadow">
            {selectedInquiry ? (
              <div>
                <div className="p-4 border-b flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Inquiry Details</h2>
                  <button 
                    onClick={() => handleDeleteInquiry(selectedInquiry._id)}
                    className="text-red-600 hover:text-red-800 text-sm"
                  >
                    Delete
                  </button>
                </div>
                
                <div className="p-4">
                  <div className="mb-6">
                    <h3 className="font-semibold text-lg mb-4">{selectedInquiry.companyName}</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Contact</p>
                        <p className="font-medium">{selectedInquiry.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium">{selectedInquiry.workEmail}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Team Size</p>
                        <p className="font-medium">{selectedInquiry.estimatedUsers}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Submitted</p>
                        <p className="font-medium">{formatDate(selectedInquiry.createdAt)}</p>
                      </div>
                    </div>
                  </div>
                  
                  <form onSubmit={handleUpdateInquiry} className="border-t pt-4">
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Status
                      </label>
                      <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="qualified">Qualified</option>
                        <option value="proposal">Proposal</option>
                        <option value="closed">Closed</option>
                      </select>
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Notes
                      </label>
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        rows={5}
                        className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Add notes about this inquiry..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md disabled:bg-blue-300"
                    >
                      {isLoading ? 'Saving...' : 'Save Changes'}
                    </button>
                  </form>
                </div>
              </div>
            ) : (
              <div className="p-8 text-center text-gray-500">
                Select an inquiry to view details
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseAdmin; 