# 🌙 Markazul Quran Wassunnah Institute – Learning Management System (LMS)

### 📚 Full-Stack LMS | Django REST Framework + React | MySQL

![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)
![Django REST Framework](https://img.shields.io/badge/Backend-Django%20REST%20Framework-green?logo=django)
![MySQL](https://img.shields.io/badge/Database-MySQL-orange?logo=mysql)
![Bootstrap](https://img.shields.io/badge/UI-Bootstrap-purple?logo=bootstrap)
![License](https://img.shields.io/badge/License-MIT-lightgrey)
![Deployment](https://img.shields.io/badge/Deployed-Linux%20Server%20(Ubuntu)-blue?logo=linux)

---

## 🕌 Overview

**Markazul Quran Wassunnah Institute (MQWI)** is a comprehensive **Learning Management System (LMS)** designed for Islamic education and modern e-learning needs.  
This project enables **admins, teachers, and students** to interact through a unified platform — managing **courses, modules, lessons, enrollments, payments, invoices, and sadaqah** (charity) efficiently.

---

## 🚀 Tech Stack

| Category | Technologies Used |
|-----------|------------------|
| **Frontend** | React.js, JavaScript (ES6), Bootstrap, HTML5, CSS3 |
| **Backend** | Django 5, Django REST Framework (DRF) |
| **Database** | MySQL |
| **Server / Deployment** | Gunicorn, Nginx, Linux (Ubuntu) |
| **Authentication** | JWT Authentication |
| **PDF & Email** | ReportLab, Django Email Utilities |
| **Media Handling** | Django Media Storage (images, videos, PDFs) |
| **Version Control** | Git & GitHub |

---

## ⚙️ Features

### 🧑‍💼 Admin Dashboard
- Sidebar navigation with menus: **Teachers, Students, Categories, Courses, Modules, Lessons, Payments, Messages, Sadaqah**
- CRUD operations for all major entities
- User info display (name, image, logout)
- Responsive and toggleable sidebar

### 👨‍🏫 Teachers Management
- Full CRUD using `TeacherViewSet`  
- Integrated with `User` model via OneToOne relationship  
- List and detail views via React Router `<Outlet>`

### 👩‍🎓 Students Management
- CRUD with `StudentSerializer` and `StudentViewSet`
- Clean DataTable presentation
- Shared delete hooks for consistency

### 📚 Course, Module & Lesson Management
- Nested serializers (Modules include Lessons)
- Lesson completion tracking
- Dynamic frontend lesson progression UI

### 💰 Payments & Enrollment System
- Registration & Monthly payment flow  
- Automatic **Invoice PDF generation** and **emailing**
- Admin can void payment/invoice and delete associated files
- Integration with multiple payment methods (Bkash, Nagad, Rocket, Islami)

### 🕋 Sadaqah (Charity) Module
- GenericForeignKey to support multiple payment methods dynamically  
- Integrated with the same payment and invoice system

---

## 🖼️ Frontend UI Highlights

- Responsive **Admin Dashboard** with collapsible sidebar  
- Dynamic **DataTables** for Teachers, Students, and Payments  
- Modal-based **payment forms** (EnrollForm, SadaqahForm)  
- Animated **highlight effects** for selected payment methods  
- Fully responsive layouts across all screen sizes (using Bootstrap grid)

---

## 🧩 Folder Structure (Simplified)

<details>
<summary>📁 Backend (Django)</summary>

mqwi-backend/
├── manage.py
├── mqwi_backend/
│ ├── settings.py
│ ├── urls.py
│ ├── wsgi.py
│ └── asgi.py
├── courses/
├── teachers/
├── students/
├── payment/
├── sadaqah/
└── media/

</details>

<details>
<summary>📁 Frontend (React)</summary>

mqwi-frontend/
├── src/
│ ├── components/
│ ├── pages/
│ ├── admin/
│ ├── hooks/
│ ├── App.jsx
│ ├── index.js
│ └── styles/
└── public/

</details>

---

## 🧠 What We Learned

🔹 Integrating **Django REST Framework with React** using JWT authentication  
🔹 Structuring scalable **CRUD operations** for multiple entities  
🔹 Handling **nested serializers** for modules & lessons  
🔹 Generating and emailing **PDF invoices** dynamically  
🔹 Managing **media/static files** in production  
🔹 Building responsive, reusable React components  
🔹 Deploying Django + React on **Ubuntu with Nginx and Gunicorn**

---

## 🧑‍💻 Installation Guide
```bash
## Backend Setup:

# Clone the repository
git clone https://github.com/yourusername/mqwi-lms.git
cd mqwi-lms/backend

# Create and activate virtual environment
python -m venv venv
source venv/bin/activate  # (or venv\Scripts\activate on Windows)

# Install dependencies
pip install -r requirements.txt

# Apply migrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Run server
python manage.py runserver

## Frontend Setup:

cd ../frontend
npm install
npm start
```

---

## 🌐 Deployment Overview

- Server: Ubuntu 22.04 LTS

- Web Server: Nginx + Gunicorn

- Static & Media Root: /home/markazul/server/static/ and /home/markazul/server/media/

- Reverse Proxy: Configured via Nginx to serve React build and Django API endpoints

---

## 📜 License

This project is licensed under the MIT License – feel free to use, modify, and distribute it.

---

## 💡 Author & Credits

👤 Developer: Iftekhar Hasan

📧 Contact: iftekhar.hasan@example.com

🏫 Organization: Markazul Quran Wassunnah Institute (MQWI)

“Empowering Quranic learning through technology.” 🌙

---

⭐ If you like this project, please give it a star on GitHub! ⭐

---
