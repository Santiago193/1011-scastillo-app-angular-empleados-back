# Employee Management API

A RESTful backend API for managing employee records, built with Node.js, Express, and MongoDB.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Framework | Express 4 |
| Database | MongoDB (Mongoose 7) |
| HTTP Logging | Morgan |
| Cross-Origin | CORS |
| Auth (ready) | JSON Web Token |
| Dev Server | Nodemon |

---

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- [MongoDB](https://www.mongodb.com/) running locally on port `27017`

---

## Getting Started

**1. Clone the repository**

```bash
git clone <repository-url>
cd backend
```

**2. Install dependencies**

```bash
npm install
```

**3. Configure environment variables**

Create a `.env` file in the project root. Use `.env.example` as a reference:

```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1/usuarios_db
```

**4. Start the development server**

```bash
npm run dev
```

The server will start at `http://localhost:3000`.

---

## Project Structure

```
backend/
├── src/
│   ├── app.js                          # Express app setup and middleware
│   ├── index.js                        # Server entry point
│   ├── database.js                     # MongoDB connection
│   ├── controllers/
│   │   └── empleados.controller.js     # Business logic for employees
│   ├── models/
│   │   └── Empleado.js                 # Mongoose schema and model
│   └── routes/
│       └── empleados.routes.js         # Route definitions
├── .env                                # Environment variables (not committed)
├── .gitignore
├── package.json
└── README.md
```

---

## API Reference

Base URL: `http://localhost:3000/api`

### Employees

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/empleados` | Retrieve all employees |
| `GET` | `/api/empleados/:id` | Retrieve a single employee by ID |
| `POST` | `/api/empleados` | Create a new employee |
| `PUT` | `/api/empleados/:id` | Update an existing employee |
| `DELETE` | `/api/empleados/:id` | Delete an employee |

### Health Check

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/ping` | Server health check — returns `pong` |

---

### Employee Schema

```json
{
  "nombre":       "string  (required) — Full name",
  "cargo":        "string  (required) — Job title",
  "departamento": "string  (required) — Department",
  "sueldo":       "number  (required) — Salary",
  "createdAt":    "date    — Auto-generated",
  "updatedAt":    "date    — Auto-generated"
}
```

### Example Requests

**Create an employee**

```bash
curl -X POST http://localhost:3000/api/empleados \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Jane Doe",
    "cargo": "Software Engineer",
    "departamento": "Engineering",
    "sueldo": 75000
  }'
```

**Get all employees**

```bash
curl http://localhost:3000/api/empleados
```

**Update an employee**

```bash
curl -X PUT http://localhost:3000/api/empleados/<id> \
  -H "Content-Type: application/json" \
  -d '{ "sueldo": 80000 }'
```

**Delete an employee**

```bash
curl -X DELETE http://localhost:3000/api/empleados/<id>
```

---

## Available Scripts

| Script | Command | Description |
|---|---|---|
| Development | `npm run dev` | Starts the server with Nodemon (auto-reload) |

---

## CORS Configuration

The API is configured to accept requests from `http://localhost:4200` (Angular dev server) by default. To change the allowed origin, update the CORS settings in `src/index.js`.

---

## License

ISC
