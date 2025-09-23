# 📱 My Social Media App

> Fullstack-приложение социальной сети с поддержкой регистрации, авторизации (JWT), постов, комментариев, лайков и подписок.  
Frontend на **React + Vite**, backend на **Express + MongoDB**, всё упаковано в **Docker**.

---

## 🚀 Технологии

### 🔹 Frontend
- ⚛️ React 18 (Vite, TypeScript)
- 🎨 Tailwind CSS v4 + HeroUI
- 🛠 Redux Toolkit + RTK Query
- 🌙 Темная / светлая тема
- 🔐 JWT-авторизация

### 🔹 Backend
- 🖥 Node.js + Express
- 📦 Mongoose (MongoDB ORM)
- 🔑 JWT
- 📂 REST API (users, posts, comments, likes, follows)

### 🔹 Database
- 🍃 MongoDB (single replica set, контейнер prismagraphql/mongo-single-replica)

### 🔹 DevOps
- 🐳 Docker + Docker Compose
- ⚡️ Три контейнера:
  - `express-app` → backend API
  - `react-app` → frontend
  - `db` → MongoDB  
- 🔧 Nginx для фронтенда в продакшне

---

## 📂 Структура проекта

### Backend (`/`)

- controllers/ → контроллеры (user, post, - - - comment, like, follow)
- middleware/ → middleware (auth)
- routes/ → роуты Express
- uploads/ → загруженные файлы (например, фото)
- app.js → конфигурация приложения
- Dockerfile → образ backend


### Frontend (`/react-client`)

- src/
- ├── app/ → Redux store, hooks, типы
- ├── components/ → UI-компоненты (button,   card, header и т.д.)
- ├── features/ → Redux-slices (user, auth)
- ├── pages/ → страницы (auth, posts, profile и т.д.)
- ├── utils/ → вспомогательные функции
- ├── App.tsx → главный компонент
- ├── index.css → стили Tailwind
- ├── main.tsx → точка входа

-

### 2. Настройка окружения

## Backend (.env):

--

- PORT=3000
- JWT_SECRET=your-secret-key
- DATABASE_URL=mongodb://admin:admin@db:27017/mydatabase?authSource=admin&directConnection=true

--

## Frontend (react-client/.env):

--

VITE_API_URL=http://localhost:3000/api

--

### 🐳 Запуск через Docker Compose

## В корне проекта есть docker-compose.yml, который запускает 3 контейнера:

--

services:
  express-app:
    build: .
    ports:
      - '3000:3000'
    depends_on:
      - db
      - react-app
    environment:
      DATABASE_URL: "mongodb://admin:admin@db:27017/mydatabase?authSource=admin&directConnection=true"

  db:
    image: prismagraphql/mongo-single-replica:4.4.3-bionic
    ports:
      - '27017:27017'
    environment: 
      MONGO_INITDB_ROOT_USERNAME: admin
      MONGO_INITDB_ROOT_PASSWORD: admin

  react-app:
    build: ./react-client
    ports: 
      - '80:80'

--

# Запуск:

--
docker-compose up --build
--

## После запуска:

# 🌐 Frontend → http://localhost

# ⚙️ Backend API → http://localhost:3000/api

# 🍃 MongoDB → mongodb://admin:admin@localhost:27017

## ✅ Функционал

- 🔐 Регистрация / Авторизация (JWT)

- 👤 Профиль пользователя

- 📝 Посты (создание, редактирование, удаление)

- 💬 Комментарии

- ❤️ Лайки

- 👥 Подписки / Отписки

- 🌙 Темная и светлая тема