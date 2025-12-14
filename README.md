 Sweet Shop Management System

A full-stack Sweet Shop Management System built as part of a technical assessment.  
The application provides authentication, inventory management, and a clean user interface for managing and purchasing sweets.

---

Project Overview

The Sweet Shop Management System allows users to:
- Register and log in securely
- Browse sweets by category
- Search sweets by name
- Purchase sweets (stock decreases)
- Add, update, and delete sweets
- Manage sweets inventory

The project focuses on practical full-stack development and real-world use cases.

---

UI Overview

The frontend provides a simple and responsive interface with:
- Dashboard displaying sweets by category (Sweets, Cake, Chocolate, Donut, Icecream)
- Sidebar navigation with Home, Inventory, and Profile sections
- Search functionality to filter sweets
- Card-based layout for items
- Purchase option disabled when stock is zero

---

Tech Stack

Backend:
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication

Frontend:
- React (Vite)
- Tailwind CSS
- React Router

---

Authentication

- User registration and login
- JWT-based authentication
- Protected API routes

---

API Endpoints

Auth:
- POST /api/auth/register
- POST /api/auth/login

Sweets:
- GET /api/sweets
- POST /api/sweets
- PUT /api/sweets/:id
- DELETE /api/sweets/:id

---

Project Structure

SweetShopManagement  
backend  
frontend  
README.md  

---

Setup Instructions

Backend setup:

cd backend  
npm install  
npm start  

Create a `.env` file with the following values:

PORT=3000  
MONGO_URI=your_mongodb_url  
JWT_SECRET=your_secret  

Frontend setup:

cd frontend  
npm install  
npm run dev  

The frontend runs on:
http://localhost:5173

---

Testing

- Manual testing using Postman
- Authentication APIs tested
- CRUD operations verified
- Inventory update and purchase flow tested

---

My AI Usage

AI Tools Used:
- ChatGPT (OpenAI)

How I Used AI:
- Occasional guidance for resolving Git/GitHub workflow issues
- Minor help in understanding API structure and best practices
- Documentation clarity improvement

Reflection:
The core implementation, logic, and UI of this project were designed and developed by me.  
AI tools were used only as a reference or helper during debugging and documentation, not for writing the complete solution.

---

Repository Link

https://github.com/Azharul-Islam1/SweetShopManagement

---

Author

Azharul Islam  
Computer Science Student

