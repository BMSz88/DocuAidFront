# DocuAid

Introduction

DocuAid is a web extension designed to provide quick and accurate answers from documentation websites by scraping web content and generating relevant responses. It enhances the user experience by offering instant, context-aware support directly on the website being viewed.


## Tech Stack

Frontend: React.js

Backend: Node.js

Database: User login data and history management

Platform: Web Extension


## Deployment

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

For the live version, visit:

```bash
www.docuaid.online
```


