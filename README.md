# Student Management System (React + Go/Gin + GORM + MySQL)

## Backend setup
1. Create the database:
   ```sql
   CREATE DATABASE student_db;
   ```
2. Edit `backend/config/database.go` — set your MySQL username/password.
3. Run:
   ```bash
   cd backend
   go mod tidy
   go run cmd/main.go
   ```
   Server starts at http://localhost:8080

## Frontend setup
```bash
cd frontend
npm install
npm start
```
Runs at http://localhost:3000

## API Endpoints
| Method | Endpoint              | Description        |
|--------|-----------------------|---------------------|
| GET    | /api/students         | List all (supports ?search=) |
| GET    | /api/students/:id     | Get one student     |
| POST   | /api/students         | Create student      |
| PUT    | /api/students/:id     | Update student      |
| DELETE | /api/students/:id     | Delete student       |
