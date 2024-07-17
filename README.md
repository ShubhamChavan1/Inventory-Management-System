# Inventory Management System

## 📦 Overview

The **Inventory Management System** is a comprehensive application designed to help businesses manage products, track stock levels, and process orders. This system supports user authentication with JWT, role-based authorization.
## 🚀 Features

- **Product Management**: Add, update, and delete products.
- **Stock Management**: Track inventory levels and manage restocks.
- **Order Management**: Create, view, and update customer orders.
- **User Authentication**: Secure user login with JWT-based authentication.
- **Role-Based Authorization**: Differentiate access levels with Admin and User roles.


## 🛠️ Technologies Used

- **Node.js**: JavaScript runtime for building the backend.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing data.
- **Mongoose**: ODM library for MongoDB.
- **JWT**: JSON Web Tokens for secure user authentication.
- **Bcrypt**: Library for hashing passwords.

inventory-management-system/
│
├── models/
│ ├── Product.js # Product schema and model
│ ├── Stock.js # Stock schema and model
│ ├── Order.js # Order schema and model
│ ├── User.js # User schema and model
│
├── routes/
│ ├── productRoutes.js # Routes for managing products
│ ├── stockRoutes.js # Routes for managing stock
│ ├── orderRoutes.js # Routes for managing orders
│ ├── userRoutes.js # Routes for user authentication and management
│
├── middleware/
│ ├── jwtAuthMiddleware.js # Middleware for JWT authentication
│ ├── authrole.js # Middleware for role-based authorization
│
├── utils/
│ ├── auditLog.js # Utility functions for audit logging
│ ├── generateToken.js # Utility function for generating JWT tokens
│
├── .env # Environment variables
├── .gitignore # Git ignore file
├── package.json # Project metadata and dependencies
├── server.js # Main server file
└── README.md # Project documentation
