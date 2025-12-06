# 🛒 Almalane E-commerce Backend

The **Almalane E-commerce Backend** is a Node.js, Express.js, and MongoDB-based API built to support the Almalane e-commerce frontend (Module-3 project). This backend replaces the FakeStore API previously used in the UI and provides complete e-commerce functionality including product listing, category filtering, cart operations, and favorites management. The project follows a clean MVC architecture, includes structured logging, environment configuration, MongoDB Atlas integration, Swagger documentation, and is fully deployed on Render with GitHub auto-deploy.

---

## 🌐 Live URLs

**Backend API:**  
`https://almalane-backend.onrender.com`

**Swagger Documentation:**  
`https://almalane-backend.onrender.com/api-docs/#/`

**Frontend Deployment:**  
`https://almalane.netlify.app/`

---

## 🚀 Tech Stack

- Node.js  
- Express.js  
- MongoDB Atlas  
- Mongoose  
- Swagger (OpenAPI 3.0)  
- Morgan + Custom Logger  
- Render (Deployment)  
- GitHub Integration  

---

## 📁 Project Structure
almalane-backend/
│
├── src/
│ ├── config/ # MongoDB DB connection
│ ├── controllers/ # Route logic
│ ├── models/ # Mongoose schemas
│ ├── routes/ # Express API routes
│ ├── middleware/ # Logger & error handlers
│ └── swagger.yaml # Swagger documentation
│
├── app.js # Middleware + routes only (No DB/Server code)
├── index.js # Server + DB connection (required by guidelines)
├── seed.mjs # FakeStore → MongoDB seed script
├── package.json
└── README.md


---

## 🔗 API Endpoints

### 🛍️ Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/products` | Get all products |
| GET | `/products/:category` | Get category-wise products |

### 🛒 Cart
| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | `/api/cart` | Add item to cart |
| GET | `/api/cart` | Retrieve cart items |

### ❤️ Favorites
| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | `/api/favorites` | Add item to favorites |
| GET | `/api/favorites` | Retrieve favorite items |

---



## Frontend Integration

The Module-3 Almalane frontend was updated to use this backend:
/products → fetch all products
/products/:category → category filtering
/api/cart → add/view cart items
/api/favorites → add/view favorites
All actions show toast/alert confirmations.
