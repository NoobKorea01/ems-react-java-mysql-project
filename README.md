# Employee Management System (EMS)

Full-stack CRUD приложение для управления сотрудниками, построенное на **React (Frontend)** и **Spring Boot + MySQL (Backend)**.

---

## 📸 Скриншоты интерфейса

### 🧑‍💼 Список сотрудников
![Employees List](screenshots/employees-list.png)

### ➕ Добавление сотрудника
![Add Employee](screenshots/add-employee.png)

### ✏️ Обновление сотрудника
![Update Employee](screenshots/update-employee.png)

---

## 📌 Структура проекта

```
ems-react-java-mysql-project/
│
├── backend/                  # Spring Boot Backend
│   ├── src/main/java/...
│   ├── src/main/resources/application.yml
│   └── pom.xml
│
├── frontend/                 # React + Vite Frontend
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   └── App.jsx
│   └── package.json
│
├── docker-compose.yml        # MySQL Docker конфигурация
└── README.md
```

---

## 🚀 Frontend (React / Vite)

### 🧠 Технологии
- React
- Vite
- React Router
- Axios
- Bootstrap (тёмная тема)

### 📌 Возможности
- Просмотр списка сотрудников
- Добавление нового
- Обновление существующего
- Удаление сотрудника

### ▶️ Запуск Frontend

```bash
cd frontend
npm install
npm run dev
```

http://localhost:5173

---

## 🛠 Backend (Spring Boot)

### 📌 REST API

| Метод | URL |
|------|-----|
| GET | /api/employees |
| GET | /api/employees/{id} |
| POST | /api/employees |
| PUT | /api/employees/{id} |
| DELETE | /api/employees/{id} |

### ▶️ Запуск Backend

```bash
cd backend
mvn spring-boot:run
```

http://localhost:8080

---

## 🐬 MySQL (Docker)

```bash
docker-compose up -d

create database ems;
```

---

## 👤 Автор

**Oybek Kayumov**  
Employee Management System — 2026
