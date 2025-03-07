# Wilaya Commune App

## Overview
The **Wilaya Commune App** is a web-based application that provides information about **Wilayas** (provinces) and **Communes** (municipalities) in Algeria. It uses a **MySQL** database for data storage, an **Express.js** backend to serve the data, and a **React.js** frontend for the user interface.

## Features
- Fetch all Wilayas (Provinces) and Communes
- RESTful API for accessing the data
- Uses **MySQL** for database management
- **Express.js** as backend framework
- **React.js** for frontend
- **CORS** enabled for cross-origin requests

## Tech Stack
- **Frontend:** React.js, Axios
- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **Dependencies:**
  - `express`
  - `cors`
  - `body-parser`
  - `dotenv`
  - `mysql2`
  - `axios`
  - `react-router-dom`

## Setup Instructions

### 1. Clone the Repository
```sh
git clone https://github.com/yourusername/wilaya-commune-app.git
cd wilaya-commune-app
```

### 2. Backend Setup
```sh
cd backend
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the `backend/` directory and add:
```
DB_HOST=localhost
DB_USER=root
DB_PASS=your_password
DB_NAME=your_database
DB_PORT=3306
PORT=5000
```

### 4. Start MySQL Server
Ensure MySQL is running:
```
```

### 5. Start the Backend Server
```
npm start  # Runs server.js
```
OR for development mode:
```
npm run dev  # Uses nodemon
```

### 6. Frontend Setup
```
cd ../frontend
npm install
```

### 7. Start the Frontend Server
```
npm start  # Runs React development server
```

### 8. Test API Endpoints
Use **Postman** or a browser to test:
- Get all Wilayas: `http://localhost:5000/api/wilayas`
- Get all Communes: `http://localhost:5000/api/communes`

### 9. Access the App
Open your browser and go to:
```
http://localhost:3000
```

## Folder Structure
```
wilaya-commune-app/
│── backend/
│   ├── config/
│   │   ├── db.js          # MySQL database configuration
│   ├── routes/
│   │   ├── wilayaRoutes.js   # Routes for Wilayas
│   │   ├── communeRoutes.js  # Routes for Communes
│   ├── server.js         # Main backend server
│   ├── .env             # Environment variables
│   ├── package.json      # Dependencies and scripts
│── frontend/
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── pages/        # Pages (Wilayas, Communes, etc.)
│   │   ├── App.js        # Main React app
│   ├── public/           # Static assets
│   ├── package.json      # Dependencies and scripts
│   ├── .env              # Frontend environment variables
```

### MySQL Connection Failed
Check if MySQL is running and correct credentials are in `.env`.

## Contributing
Feel free to contribute by submitting issues or pull requests!

## License
This project is licensed under the **MIT License**.

