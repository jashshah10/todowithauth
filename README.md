# ToDoWithAuth 📝🔐

A full‑stack To‑Do list app with user authentication, built using React, Node.js/Express, MongoDB, and JWT. Every user has their own private task data, and the UI is modern and responsive.

---

## 🚀 Features

- Secure sign‑up and login workflows with password hashing + JWT  
- Create, update, delete, and mark tasks as completed  
- User-specific task isolation  
- RESTful API with clean endpoints  
- React-powered frontend for a smooth user experience  

---

## 🛠️ Installation & Setup

Clone the repo and run this from your local machine:

git clone https://github.com/jashshah10/todowithauth.git
cd todowithauth

# Backend setup
cd backend && npm install
cp .env.example .env
# configure:
#   MONGO_URI=your_mongodb_connection_string
#   JWT_SECRET=your_secret_key
npm start &

# Frontend setup
cd ../frontend && npm install
cp .env.example .env
# configure:
#   REACT_APP_API_URL=http://localhost:5000
npm start
