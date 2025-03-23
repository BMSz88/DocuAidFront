# DocuAid

Introduction

DocuAid is a web extension designed to provide quick and accurate answers from documentation websites by scraping web content and generating relevant responses. It enhances the user experience by offering instant, context-aware support directly on the website being viewed.


## Tech Stack

Frontend: React.js

Backend: Node.js

Database: MongoDB for user data and enterprise inquiries

Platform: Web Extension


## CI/CD Pipeline

This project uses GitHub Actions for continuous integration and continuous deployment, ensuring code quality and automated deployments.

### Workflow Overview

1. **CI/CD Pipeline** (`.github/workflows/ci-cd.yml`)
   - Runs on every push to main and pull requests
   - Testing: Executes unit tests and linting
   - Building: Compiles and bundles the application
   - Security: Performs security audits and vulnerability scanning
   - Deployment: Automatically deploys to Vercel when changes are pushed to main

2. **Deployment Verification** (`.github/workflows/verify-deployment.yml`)
   - Runs after successful CI/CD pipeline completion
   - Waits for Vercel deployment to complete
   - Checks website and critical page availability
   - Sends notifications if verification fails

3. **Automated Testing** (`.github/workflows/auto-test.yml`)
   - Runs daily at midnight UTC
   - Executes all tests with coverage reporting
   - Performs basic end-to-end testing
   - Monitors production site availability
   - Can be manually triggered when needed

## Enterprise Features

DocuAid offers enterprise-grade features for businesses of all sizes:

1. **Enterprise Inquiry System**
   - Form submission for enterprise inquiries
   - Secure storage of company information
   - Admin dashboard for managing inquiries
   - Status tracking (new, contacted, qualified, proposal, closed)

2. **Admin Access Control**
   - Role-based authorization
   - Secure JWT authentication
   - Admin-only routes and actions
   - User permission management

3. **API Endpoints**
   - Enterprise inquiry management
   - User authentication and authorization
   - Admin operations
   - Secure data handling

### API Routes

#### Enterprise Endpoints

- `POST /api/enterprise/inquiries`: Submit an enterprise inquiry
- `GET /api/enterprise/inquiries`: Get all inquiries (admin only)
- `GET /api/enterprise/inquiries/:id`: Get specific inquiry (admin only)
- `PATCH /api/enterprise/inquiries/:id`: Update inquiry status (admin only)
- `DELETE /api/enterprise/inquiries/:id`: Delete an inquiry (admin only)

#### Authentication Endpoints

- `POST /register`: Register a new user
- `POST /login`: Authenticate a user
- `GET /auth/google`: Google OAuth login
- `GET /auth/google/callback`: Google OAuth callback

### Local Development

To run the frontend locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/your-repo/docuaid-frontend.git
```
2. Navigate to the project directory:

```bash
cd docuaid-frontend
```
3. Install dependencies:

```bash
npm install
```

4. Set up environment variables:

```bash
# Navigate to the server directory
cd server

# Copy the example environment file
cp .env.example .env

# Edit the .env file with your actual credentials
nano .env
```

5. Start the backend server:

```bash
# From the server directory
npm start
```

6. In a new terminal, start the frontend development server:

```bash
# From the project root directory
npm run dev
```

7. Open your browser and go to the URL shown in the terminal (typically http://localhost:5173) to see the app in action.

### Deploying to Railway

To deploy the application to Railway, follow these steps:

1. Create a new project on [Railway](https://railway.app/).

2. Connect your GitHub repository to Railway.

3. Set up the following environment variables in the Railway dashboard:

```
PORT=3001
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority
SESSION_SECRET=<your_strong_session_secret>
JWT_SECRET=<your_strong_jwt_secret>
GOOGLE_CLIENT_ID=<your_google_client_id>
GOOGLE_CLIENT_SECRET=<your_google_client_secret>
GOOGLE_CALLBACK_URL=https://<your-railway-app-url>/auth/google/callback
FRONTEND_URL=https://<your-frontend-url>
```

4. Make sure to update your Google OAuth credentials in the Google Cloud Console to include the new callback URL.

5. Deploy your application using the Railway dashboard.

For the live version, visit:

```bash
www.docuaid.online
```

## Environment Setup

The application requires the following environment variables:

- `VITE_API_URL`: URL of the backend API
- `VITE_GOOGLE_CALLBACK_URL`: Callback URL for Google authentication
- `JWT_SECRET`: Secret key for signing JWT tokens
- `SESSION_SECRET`: Secret key for session management
- `MONGO_URI`: MongoDB connection string

## Deployment

The application is automatically deployed to Vercel when changes are pushed to the main branch. The deployment can be manually triggered by running the GitHub Actions workflow.

## Project Structure

- `src/`: Source code
  - `components/`: React components
    - `EnterpriseAdmin.jsx`: Admin dashboard for enterprise inquiries
  - `Pages.jsx`: Contains the Enterprise component
  - `assets/`: Static assets
  - `test/`: Test setup and utilities
- `server/`: Backend code
  - `models/`: Database models
    - `User.js`: User model with admin flag
    - `EnterpriseInquiry.js`: Model for enterprise inquiries
  - `routes/`: API routes
    - `enterpriseRoutes.js`: Enterprise-related endpoints
  - `middlewares/`: Express middlewares
    - `authMiddleware.js`: Authentication and authorization
  - `server.js`: Main server file

## Contributing

1. Create a new branch for your feature or bugfix
2. Make your changes
3. Write tests for your changes
4. Open a pull request
5. Ensure all CI checks pass before merging


