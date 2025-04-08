# Project Setup Guide

This guide explains how to run both the client application on port 3000 and the Flask backend on port 5000.

## Prerequisites

Before getting started, make sure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14.x or higher recommended) for the client
- [Python](https://www.python.org/) (version 3.7 or higher) for the Flask backend
- npm (comes with Node.js) or [Yarn](https://yarnpkg.com/)
- pip (Python package manager)

## Project Structure

```
project-root/
├── client/          # Frontend client code
└── server/          # Flask backend code
```

## Setting Up the Flask Backend (Port 5000)

1. Navigate to the server directory:
```bash
cd server
```

2. Set up a Python virtual environment (recommended):
```bash
# Windows
python -m venv venv
venv\Scripts\activate

# macOS/Linux
python3 -m venv venv
source venv/bin/activate
```

3. Install the required Python packages:
```bash
pip install -r requirements.txt
```

4. Running the Flask Backend:

The Flask application is configured to run on port 5000 by default. To run the backend:

### Using your IDE:

**Important:** When you press the "Run" button in your IDE (like PyCharm, VS Code, etc.), the Flask application will automatically start on port 5000. No additional configuration is needed as this is handled by the Flask configuration in the app.

The backend should be accessible at: `http://localhost:5000`

### Alternative: Running from Command Line:

If you prefer to run from the command line:

```bash
# Windows
flask run
# or
python app.py

# macOS/Linux
flask run
# or
python3 app.py
```

## Setting Up the Client (Port 3000)

1. Navigate to the client directory:
```bash
cd client
```

2. Install the dependencies:
```bash
npm install
```

3. Running the Client:
```bash
npm start
```

The client should be accessible at: `http://localhost:3000`

## API Communication

The client running on port 3000 will communicate with the Flask backend on port 5000. The client is configured to proxy API requests to the backend, so you can use relative paths in your API calls:

```javascript
// Example API call from the client
fetch('/api/data')
  .then(response => response.json())
  .then(data => console.log(data));
```

## Verifying Both Services

1. Backend API: Visit `http://localhost:5000/docs` in your browser to verify the Flask backend is running.
2. Frontend Client: Visit `http://localhost:3000` to verify the client application is running.

## Troubleshooting

### Flask Backend Issues:

- If port 5000 is already in use:
  ```bash
  # Windows
  netstat -ano | findstr :5000
  taskkill /PID <PID> /F
  
  # Mac/Linux
  lsof -i :5000
  kill -9 <PID>
  ```

- Check if the Flask debug output shows any errors when starting

### Client Issues:

- If port 3000 is already in use, the development server will typically ask if you want to use a different port

## Development Workflow

1. Start the Flask backend first (using your IDE's run button)
2. Start the client application from the command line
3. Make changes to either application as needed - both support hot reloading

For further help or information, please reach out to Cyrus 
Cyrazndungu@gmail.com
