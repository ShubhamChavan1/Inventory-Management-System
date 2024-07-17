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

# Inventory Management System

## Project Description

The Inventory Management System is a web application designed to manage products, stock, and orders. It includes user authentication with JWT and role-based access control for admin and user roles.

## Project Structure

```plaintext
inventory-management-system/
│
├── models/
│   ├── Product.js          # Product schema and model
│   ├── Stock.js            # Stock schema and model
│   ├── Order.js            # Order schema and model
│   ├── User.js             # User schema and model
│
├── routes/
│   ├── productRoutes.js    # Routes for managing products
│   ├── stockRoutes.js      # Routes for managing stock
│   ├── orderRoutes.js      # Routes for managing orders
│   ├── userRoutes.js       # Routes for user authentication and management
│
├── middleware/
│   ├── jwtAuthMiddleware.js # Middleware for JWT authentication
│   ├── authrole.js          # Middleware for role-based authorization
│
│
├── .env                    # Environment variables
├── .gitignore              # Git ignore file
├── package.json            # Project metadata and dependencies
├── server.js               # Main server file
└── README.md               # Project documentation

## API Endpoints

- **Products**
  - `GET /products` - Get all products
  - `POST /products` - Add a new product
  - `PUT /products/:id` - Update a product
  - `DELETE /products/:id` - Delete a product

- **Stock**
  - `GET /stock` - Get all stock items
  - `POST /stock` - Add new stock
  - `PUT /stock/:id` - Update stock item
  - `DELETE /stock/:id` - Delete stock item

- **Orders**
  - `GET /orders` - Get all orders
  - `POST /orders` - Create a new order
  - `PUT /orders/:id` - Update an order
  - `DELETE /orders/:id` - Delete an order

- **Users**
  - `POST /signup` - Register a new user and get a JWT Token
  - `POST /login` - Log in and get a JWT token

### Example Requests

- **Register a New User**

    ```bash
     POST http://localhost:3000/register -H "Content-Type: application/json" -d '{"username": "admin", "password": "password123", "mobileNo": 1234567890, "role": "Admin"}'
    ```

- **Login**

    ```bash
    POST http://localhost:3000/login -H "Content-Type: application/json" -d '{"username": "admin", "password": "password123"}'
    ```

- **Add a New Product**

    ```bash
 POST http://localhost:3000/products -H "Content-Type: application/json" -H "Authorization: Bearer <your_jwt_token>" -d '{"name": "Product A", "price": 100, "quantity": 50}'
    ```


