import apiRoutes from './api'; // Import the API routes
import express from 'express'; // Import express for creating the router
const router = express.Router(); // Create a new router

router.use('/api', apiRoutes); // Use the API routes for the '/api' path

export default router; // Export the router as the default export