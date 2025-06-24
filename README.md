# 📝 Gestor de Tareas Full Stack

Aplicación web completa para la gestión de tareas personales, desarrollada con el stack **MERN** (MongoDB, Express, React y Node.js).

## 🚀 Funcionalidades

- Registro e inicio de sesión con JWT
- Creación, edición y eliminación de tareas
- Cambio de estado de las tareas (`pendiente`, `en progreso`, `completada`)
- Rutas protegidas por token
- Diseño simple y responsive

## 🧰 Tecnologías usadas

### Backend:
- Node.js
- Express.js
- MongoDB con Mongoose
- JWT + bcrypt para autenticación

### Frontend:
- React + Vite
- Axios
- React Router DOM

---

## ⚙️ Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/tuusuario/gestor-tareas.git
cd gestor-tareas
```

### 2. Backend

```bash
cd backend
npm install
```

Crear un archivo `.env` en `backend/` con:

```env
PORT=4000
MONGO_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=claveSuperSecreta123
```

Iniciar el backend:

```bash
node index.js
```

---

### 3. Frontend

```bash
cd ../frontend
npm install
npm run dev
```

Acceder en `http://localhost:5173`

---

## 📷 Capturas de pantalla

> (Podés agregar screenshots mostrando el login, el CRUD, etc.)

---

## 👤 Autor

**Iñaki Zárate**  
[LinkedIn](https://www.linkedin.com/in/inaki-zarate)  
[GitHub](https://github.com/inakizarate25)

---

## 📌 Notas

Este proyecto es parte de mi portfolio como desarrollador junior y fue creado para practicar un flujo completo de desarrollo Full Stack.
