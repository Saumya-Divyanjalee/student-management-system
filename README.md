# 🎓 Student Management System

A full-stack web application for managing student records, built with a clean layered architecture on both the frontend and backend.

![Go](https://img.shields.io/badge/Go-1.21-00ADD8?logo=go&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9-3178C6?logo=typescript&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-8-4479A1?logo=mysql&logoColor=white)
![Gin](https://img.shields.io/badge/Gin-Web%20Framework-00ADD8)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📖 Overview

This system lets an admin add, view, update, delete, and search student records through a clean web interface. The backend exposes a REST API built with **Go + Gin + GORM**, and the frontend is a **React + TypeScript** SPA that consumes it.

---

## 🏗️ Architecture

```text
React + TypeScript (frontend)
        │
        ▼
     REST API
        │
        ▼
Go + Gin (controllers → services → repositories)
        │
        ▼
      GORM
        │
        ▼
      MySQL
```

The backend follows a **layered architecture**:

| Layer | Responsibility |
|---|---|
| `controllers/` | Parses HTTP requests, sends JSON responses |
| `services/` | Business logic and validation |
| `repositories/` | Direct database queries via GORM |
| `models/` | Data structures / table schema |
| `routes/` | Maps URLs to controller functions |
| `config/` | Database connection setup |

---

## ✨ Features

- ➕ Add new student records
- 📋 View all students in a searchable table
- 🔍 Search by name or email
- ✏️ Update existing student details
- 🗑️ Delete student records
- 👁️ View full details of a single student
- ✅ Client-side and server-side validation
- 🎨 Clean, responsive UI

---

## 🛠️ Tech Stack

**Frontend:** React, TypeScript, Axios, CSS
**Backend:** Go, Gin, GORM
**Database:** MySQL
**Tools:** Git, GitHub, Postman

---

## 📂 Project Structure

```text
student-management-system/
├── backend/
│   ├── cmd/main.go
│   ├── config/database.go
│   ├── controllers/student_controller.go
│   ├── models/student.go
│   ├── repositories/student_repository.go
│   ├── routes/routes.go
│   └── services/student_service.go
├── frontend/
│   └── src/
│       ├── components/
│       ├── services/api.ts
│       ├── types/student.ts
│       └── App.tsx
└── README.md
```

---
<img width="1917" height="915" alt="Screenshot 2026-09-17 105723" src="https://github.com/user-attachments/assets/15742308-af19-4cdb-88d8-6557ee90b2a6" />
<img width="1885" height="915" alt="Screenshot 2026-09-17 105820" src="https://github.com/user-attachments/assets/1dd9c3fb-848c-4ec4-925f-c15a9d65f12b" />
<img width="1892" height="907" alt="Screenshot 2026-09-17 105835" src="https://github.com/user-attachments/assets/05ad8627-9fd8-47e1-9976-87f55c65a576" />
<img width="1888" height="910" alt="Screenshot 2026-09-17 105900" src="https://github.com/user-attachments/assets/b4cff646-3fc9-4903-8de0-ddc6b267a698" />
<img width="1903" height="910" alt="Screenshot 2026-09-17 105926" src="https://github.com/user-attachments/assets/d1e3ac7a-379e-4cf4-9a20-c7e6ec60e563" />
<img width="1910" height="915" alt="Screenshot 2026-09-17 105941" src="https://github.com/user-attachments/assets/98853553-6c11-4700-aefb-46d80ed0e4e7" />






## 🚀 Getting Started

### Prerequisites
- Go 1.21+
- Node.js 18+
- MySQL 8+

### 1. Clone the repository
```bash
git clone https://github.com/Saumya-Divyanjalee/student-management-system.git
cd student-management-system
```

### 2. Backend setup
```bash
cd backend
go mod tidy
```
Update the MySQL connection string in `config/database.go` with your own credentials, then:
```bash
go run cmd/main.go
```
Server runs on **http://localhost:8080**

### 3. Frontend setup
```bash
cd frontend
npm install
npm start
```
App runs on **http://localhost:3000**

---

## 📡 API Reference

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/students` | Get all students |
| `GET` | `/api/students?search=query` | Search students by name/email |
| `GET` | `/api/students/:id` | Get a single student |
| `POST` | `/api/students` | Create a new student |
| `PUT` | `/api/students/:id` | Update a student |
| `DELETE` | `/api/students/:id` | Delete a student |

**Sample request body (POST/PUT):**
```json
{
  "first_name": "Saumya",
  "last_name": "Divyanjalee",
  "email": "saumya@example.com",
  "age": 21,
  "course": "Software Engineering",
  "phone": "0771234567"
}
```

---

## 🧪 Testing

Test the API directly with Postman/Thunder Client, or use the React UI end-to-end once both servers are running.

---

## 🗺️ Roadmap

- [ ] JWT authentication
- [ ] Pagination for large student lists
- [ ] Role-based access (admin vs viewer)
- [ ] Export student list to CSV/PDF

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Saumya Divyanjalee**
GitHub: [@Saumya-Divyanjalee](https://github.com/Saumya-Divyanjalee)
