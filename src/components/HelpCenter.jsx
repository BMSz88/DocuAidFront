// src/components/HelpCenter.jsx
import React, { useState } from "react";
import axios from "axios";

export const HelpCenter = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    error: false,
    message: ""
  });

  // API URL - make sure this matches your server
  const apiUrl = "http://localhost:3001";

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, error: false, message: "" });

    try {
      // Make sure all fields are filled
      if (!formData.email || !formData.name || !formData.message) {
        throw new Error("Please fill in all fields");
      }

      console.log("Submitting help request to server");
      
      // Log the full URL we're sending to
      console.log(`Sending request to: ${apiUrl}/api/help-requests`);
      
      // Send the request
      const response = await axios.post(`${apiUrl}/api/help-requests`, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // Handle success
      console.log("Help request submitted successfully:", response.data);
      setSubmitStatus({
        success: true,
        error: false,
        message: "Your message has been sent! We'll get back to you soon."
      });
      
      // Reset form
      setFormData({
        email: "",
        name: "",
        message: ""
      });
    } catch (error) {
      console.error("Error submitting help request:", error);
      
      // Set appropriate error message
      let errorMessage = "Something went wrong. Please try again later.";
      
      if (error.response) {
        console.error("Server responded with:", error.response.status, error.response.data);
        errorMessage = error.response.data.message || errorMessage;
      } else if (error.request) {
        console.error("No response received from server");
        errorMessage = "Unable to reach the server. Please check your connection and try again.";
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      setSubmitStatus({
        success: false,
        error: true,
        message: errorMessage
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 text-center">
      <h1 className="text-5xl font-bold text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text flex items-center justify-center gap-2 pt-16">
        👋 How can we help you?
      </h1>
      <p className="text-gray-600 mt-8">
        Need a hand or have insights to share? Our Help Center is your go-to spot for support and suggestions.
      </p>
      
      {submitStatus.success && (
        <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-md">
          {submitStatus.message}
        </div>
      )}
      
      {submitStatus.error && (
        <div className="mt-6 p-4 bg-red-100 text-red-800 rounded-md">
          {submitStatus.message}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="mt-10 text-left">
        <label className="block text-gray-700 font-semibold" htmlFor="email">YOUR EMAIL</label>
        <input 
          type="email" 
          id="email" 
          className="w-full p-2 mt-1 border rounded-md" 
          placeholder="Enter your email" 
          value={formData.email}
          onChange={handleChange}
          required
        />
        
        <label className="block text-gray-700 font-semibold mt-4" htmlFor="name">YOUR NAME</label>
        <input 
          type="text" 
          id="name" 
          className="w-full p-2 mt-1 border rounded-md" 
          placeholder="Enter your name" 
          value={formData.name}
          onChange={handleChange}
          required
        />
        
        <label className="block text-gray-700 font-semibold mt-4" htmlFor="message">HOW CAN WE HELP?</label>
        <textarea 
          id="message" 
          className="w-full p-2 mt-1 border rounded-md" 
          rows="4" 
          placeholder="Tell us how we can help! Whether you're looking for answers, need to troubleshoot an issue, or just want to share your thoughts on how we can improve, we're all ears."
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        
        <button 
          type="submit"
          disabled={isSubmitting}
          className={`w-full mt-6 p-3 text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-3 rounded-md ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default HelpCenter;