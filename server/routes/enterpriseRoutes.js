const express = require('express');
const router = express.Router();
const EnterpriseInquiry = require('../models/EnterpriseInquiry');
const { isAdmin } = require('../middlewares/authMiddleware');

// Submit a new enterprise inquiry
router.post('/inquiries', async (req, res) => {
    try {
        const { workEmail, name, companyName, estimatedUsers } = req.body;

        // Validate input
        if (!workEmail || !name || !companyName || !estimatedUsers) {
            return res.status(400).json({ 
                success: false,
                message: 'All fields are required' 
            });
        }

        // Create new inquiry
        const inquiry = new EnterpriseInquiry({
            workEmail,
            name,
            companyName,
            estimatedUsers
        });

        // Save to database
        await inquiry.save();

        // Send success response
        res.status(201).json({
            success: true,
            message: 'Enterprise inquiry submitted successfully',
            data: {
                id: inquiry._id,
                workEmail: inquiry.workEmail,
                name: inquiry.name,
                companyName: inquiry.companyName,
                estimatedUsers: inquiry.estimatedUsers,
                createdAt: inquiry.createdAt
            }
        });
    } catch (error) {
        console.error('Enterprise inquiry submission error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to submit enterprise inquiry. Please try again.'
        });
    }
});

// Get all enterprise inquiries (admin only)
router.get('/inquiries', isAdmin, async (req, res) => {
    try {
        const inquiries = await EnterpriseInquiry.find()
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: inquiries.length,
            data: inquiries
        });
    } catch (error) {
        console.error('Get enterprise inquiries error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to retrieve enterprise inquiries'
        });
    }
});

// Get enterprise inquiry by ID (admin only)
router.get('/inquiries/:id', isAdmin, async (req, res) => {
    try {
        const inquiry = await EnterpriseInquiry.findById(req.params.id);
        
        if (!inquiry) {
            return res.status(404).json({
                success: false,
                message: 'Enterprise inquiry not found'
            });
        }

        res.status(200).json({
            success: true,
            data: inquiry
        });
    } catch (error) {
        console.error('Get enterprise inquiry error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to retrieve enterprise inquiry'
        });
    }
});

// Update enterprise inquiry status (admin only)
router.patch('/inquiries/:id', isAdmin, async (req, res) => {
    try {
        const { status, notes } = req.body;
        const updatedInquiry = await EnterpriseInquiry.findByIdAndUpdate(
            req.params.id,
            { status, notes, updatedAt: Date.now() },
            { new: true, runValidators: true }
        );

        if (!updatedInquiry) {
            return res.status(404).json({
                success: false,
                message: 'Enterprise inquiry not found'
            });
        }

        res.status(200).json({
            success: true,
            data: updatedInquiry
        });
    } catch (error) {
        console.error('Update enterprise inquiry error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to update enterprise inquiry'
        });
    }
});

// Delete enterprise inquiry (admin only)
router.delete('/inquiries/:id', isAdmin, async (req, res) => {
    try {
        const deletedInquiry = await EnterpriseInquiry.findByIdAndDelete(req.params.id);
        
        if (!deletedInquiry) {
            return res.status(404).json({
                success: false,
                message: 'Enterprise inquiry not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Enterprise inquiry deleted successfully'
        });
    } catch (error) {
        console.error('Delete enterprise inquiry error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to delete enterprise inquiry'
        });
    }
});

module.exports = router; 