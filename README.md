# 💰 Wallet API - Personal Finance Tracker (Backend)

A secure and scalable backend API built with **Node.js**, **Express**, and **MongoDB** to support a personal finance tracker app. This API manages user authentication, income/expense tracking, budgeting, and transaction history for individual users.

> 🔗 Frontend Repo: [skhjuned7666/wallet-app](https://github.com/skhjuned7666/wallet-app)  
> 📱 Live App (Render): [Click to View](#) *(add your live link here if available)*

---

## 🚀 Features

- 🔐 User Authentication (via Clerk)
- ➕ Add/Remove Income and Expenses
- 📊 View All Transactions
- 🧠 Real-time Budget Calculation
- 📁 RESTful API architecture
- 🌐 Connected to a **Neon (PostgreSQL)** or **MongoDB Atlas** database
- 🔒 Secure routes using JWT tokens or Clerk session

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Node.js    | Runtime Environment |
| Express.js | Server Framework |
| MongoDB / Neon | Database |
| Mongoose   | ODM for MongoDB |
| Clerk      | Authentication Provider |
| Postman    | API Testing |
| Dotenv     | Environment Configuration |
| CORS / Helmet | Security Middleware |

---

## 📂 Folder Structure

```bash
wallet-api/
│
├── controllers/       # Business logic
├── models/            # Mongoose models
├── routes/            # Route definitions
├── middleware/        # Auth and error middleware
├── config/            # DB configuration
├── .env               # Environment variables
├── server.js          # Entry point
└── package.json
