 MERN Authentication Project

📌 Overview
This is a **MERN stack** project for user authentication, including **user registration** and **login** functionality. The backend is built using **Node.js, Express, MongoDB, and Mongoose**, while the frontend is developed with **React**.

🛠 Tech Stack
- **Frontend:** React, Vite
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** bcrypt.js for password hashing

📂 Project Structure
```
backend/
│── models/
│   └── User.js          # User schema
│── routes/
│── server.js            # Main backend server
│── .env                 # Environment variables
│── package.json         # Dependencies
│
frontend/
│── src/
│   ├── pages/
│   │   ├── Login.jsx    # Login page
│   │   ├── Register.jsx # Register page
│   ├── App.jsx          # Main App component
│── vite.config.js       # Vite configuration
│── package.json         # Frontend dependencies
```

🚀 Getting Started
 1️⃣ Clone the Repository
git clone https://github.com/yourusername/mern-auth.git
cd mern-auth

 2️⃣ Setup Backend
cd backend
npm install

➤Create a `.env` file in `backend/` and add:
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<database>
PORT=3000
➤ Start Backend Server
npm run dev
Server runs at `http://localhost:3000`

3️⃣ Setup Frontend
cd frontend
npm install

➤ Start Frontend Server
npm run dev
Frontend runs at `http://localhost:5173`

🔥 API Endpoints

➤ Register User
**POST** `http://localhost:3000/register`
Request Body:
```json
{
  "username": "JohnDoe",
  "email": "john@example.com",
  "password": "password123"
}
```
Response:
```json
{
  "message": "User registered successfully"
}
```

### ➤ Login User
**POST** `http://localhost:3000/login`
#### Request Body:
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```
#### Response:
json
{
  "message": "Login Successful",
  "username": "JohnDoe"
}

## 📌 Features
✅ User Registration & Login  
✅ Password Hashing with bcrypt.js  
✅ MongoDB Database with Mongoose  
✅ API Endpoints for Authentication  

## 💡 Future Enhancements
- Add JWT Authentication
- Implement User Sessions
- Improve UI/UX with Tailwind CSS


