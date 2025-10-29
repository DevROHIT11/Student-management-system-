# 🎓 Student Management System

A full-stack **Node.js + Express + MySQL** web application to manage student records — including adding, updating, deleting, and viewing student details.

---

## 🚀 Features
- Add new students with their details
- View all student records
- Update student information
- Delete student records
- MySQL database integration (connected via Railway)
- Secure environment variables with `.env`

---

## 📁 Project Folder Structure
```bash
STUDENT-MANAGEMENT-SYSTEM/
│
├── node_modules/                 # Installed npm dependencies
│
├── public/                       # Publicly accessible files
│   ├── assets/                   # Images and static assets
│   │   └── delete.png
│   │
│   ├── style/                    # CSS files
│   │   └── index.css
│   │
│   ├── index.html                # Main HTML file
│
├── script/                       # JavaScript files
│   ├── db.js                     # Database connection or logic
│   └── index.js                  # Main JS logic
│
├── student_students.sql          # Database schema or sample data
│
├── .env                          # Not commited due to security reasons
├── .gitignore                    # Git ignore rules
├── package.json                  # Project metadata and dependencies
├── package-lock.json             # Dependency lock file
└── README.md                     # Project documentation

```

---

## 🚀 Setup Instructions

###
1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/-- student-management-system.git
cd student-management-system
```

### 2️⃣ Install dependencies
```bash
npm install
```


### 3️⃣ Run the server
```bash
node index.js
```

### Server will start at:
👉 https://student-management-system-hf3m.onrender.com/

---

## MySQL Setup (using Railway)

- Go to Railway.app

- Create a MySQL Database

- Copy connection details (Host, Port, User, Password, Database)

- Paste them inside your .env file.

- Import your SQL file (if you have one) using:

```bash
mysql -h <host> -u <user> -p <database> < student_students.sql
```
---

## 🪪License
This project is licensed under the MIT License — free to use and modify.

---




