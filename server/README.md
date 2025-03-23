# DocuAid Server

This is the backend server for the DocuAid application, providing API endpoints for user authentication, enterprise inquiries, and admin functionality.

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT for authentication
- Passport.js for Google OAuth
- bcrypt for password hashing

## API Documentation

### Authentication Endpoints

#### Register User

```
POST /register
```

Create a new user account.

**Request Body**:
```json
{
  "name": "User Name",
  "email": "user@example.com",
  "password": "securepassword"
}
```

**Response (201)**:
```json
{
  "message": "User registered successfully",
  "user": {
    "id": "user_id",
    "name": "User Name",
    "email": "user@example.com"
  },
  "token": "jwt_token"
}
```

#### Login User

```
POST /login
```

Authenticate an existing user.

**Request Body**:
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```

**Response (200)**:
```json
{
  "message": "Login successful",
  "user": {
    "id": "user_id",
    "name": "User Name",
    "email": "user@example.com",
    "isAdmin": false
  },
  "token": "jwt_token"
}
```

#### Google OAuth Login

```
GET /auth/google
```

Initiates Google OAuth flow.

```
GET /auth/google/callback
```

Google OAuth callback endpoint.

### Enterprise Endpoints

All enterprise endpoints except for inquiry submission require admin authentication.

#### Submit Enterprise Inquiry

```
POST /api/enterprise/inquiries
```

Submit a new enterprise inquiry.

**Request Body**:
```json
{
  "workEmail": "business@example.com",
  "name": "Contact Name",
  "companyName": "Company Inc",
  "estimatedUsers": "11-50"
}
```

**Response (201)**:
```json
{
  "success": true,
  "message": "Enterprise inquiry submitted successfully",
  "data": {
    "id": "inquiry_id",
    "workEmail": "business@example.com",
    "name": "Contact Name",
    "companyName": "Company Inc",
    "estimatedUsers": "11-50",
    "createdAt": "2023-03-23T09:30:00.000Z"
  }
}
```

#### Get All Enterprise Inquiries (Admin Only)

```
GET /api/enterprise/inquiries
```

Retrieve all enterprise inquiries.

**Headers**:
```
Authorization: Bearer jwt_token
```

**Response (200)**:
```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "_id": "inquiry_id_1",
      "workEmail": "business1@example.com",
      "name": "Contact 1",
      "companyName": "Company 1",
      "estimatedUsers": "11-50",
      "status": "new",
      "notes": "",
      "createdAt": "2023-03-23T09:30:00.000Z",
      "updatedAt": "2023-03-23T09:30:00.000Z"
    },
    {
      "_id": "inquiry_id_2",
      "workEmail": "business2@example.com",
      "name": "Contact 2",
      "companyName": "Company 2",
      "estimatedUsers": "51-100",
      "status": "contacted",
      "notes": "Scheduled call for next week",
      "createdAt": "2023-03-22T10:15:00.000Z",
      "updatedAt": "2023-03-23T08:45:00.000Z"
    }
  ]
}
```

#### Get Enterprise Inquiry by ID (Admin Only)

```
GET /api/enterprise/inquiries/:id
```

Retrieve a specific enterprise inquiry.

**Headers**:
```
Authorization: Bearer jwt_token
```

**Response (200)**:
```json
{
  "success": true,
  "data": {
    "_id": "inquiry_id",
    "workEmail": "business@example.com",
    "name": "Contact Name",
    "companyName": "Company Inc",
    "estimatedUsers": "11-50",
    "status": "new",
    "notes": "",
    "createdAt": "2023-03-23T09:30:00.000Z",
    "updatedAt": "2023-03-23T09:30:00.000Z"
  }
}
```

#### Update Enterprise Inquiry (Admin Only)

```
PATCH /api/enterprise/inquiries/:id
```

Update the status and notes of an enterprise inquiry.

**Headers**:
```
Authorization: Bearer jwt_token
```

**Request Body**:
```json
{
  "status": "contacted",
  "notes": "Scheduled demo for next week"
}
```

**Response (200)**:
```json
{
  "success": true,
  "data": {
    "_id": "inquiry_id",
    "workEmail": "business@example.com",
    "name": "Contact Name",
    "companyName": "Company Inc",
    "estimatedUsers": "11-50",
    "status": "contacted",
    "notes": "Scheduled demo for next week",
    "createdAt": "2023-03-23T09:30:00.000Z",
    "updatedAt": "2023-03-23T10:15:00.000Z"
  }
}
```

#### Delete Enterprise Inquiry (Admin Only)

```
DELETE /api/enterprise/inquiries/:id
```

Delete an enterprise inquiry.

**Headers**:
```
Authorization: Bearer jwt_token
```

**Response (200)**:
```json
{
  "success": true,
  "message": "Enterprise inquiry deleted successfully"
}
```

## Environment Setup

The server requires the following environment variables:

```
PORT=3001
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key
SESSION_SECRET=your_session_secret_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=https://your-app-url/auth/google/callback
FRONTEND_URL=https://your-frontend-url
```

Create a `.env` file in the server directory with these variables. You can use the `.env.example` file as a template.

## Running the Server

1. Install dependencies:

```bash
npm install
```

2. Start the server:

```bash
npm start
```

The server will run on the port specified in the `.env` file (default: 3001). 