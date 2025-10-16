# 💬 ChatApp - Proyecto Full Stack (Front-End)

Este proyecto es una **aplicación de chat web** desarrollada con **React**, enfocada en la práctica de conceptos front-end y el aprendizaje de integración entre vistas, componentes y contexto global.  
Incluye **login**, **lista de usuarios**, **chat funcional**, **modo oscuro**, **popup de configuración**, y **diseño responsive con menú hamburguesa**.

---

## 🚀 Tecnologías utilizadas

- ⚛️ **React** (Vite o CRA)
- 🧠 **Context API** (manejo de estados globales)
- 🧩 **React Router DOM** (navegación entre vistas)
- 🎨 **CSS puro** (modo claro/oscuro y responsive)
- 🔐 **LocalStorage** (simulación de autenticación)
- 💬 **Componentes reutilizables** (Chat, Sidebar, Popup, etc.)

---

## 📂 Estructura de carpetas

src/
│
├── assets/ # Imágenes, íconos, logos
├── components/ # Componentes reutilizables
│ ├── Chat.jsx
│ ├── Sidebar.jsx
│ ├── ProtectedRoute.jsx
│ └── PopupConfig.jsx
│
├── context/
│ └── ChatContext.jsx # Manejo del estado global del chat
│
├── views/ # Páginas principales
│ ├── Login.jsx
│ ├── Messages.jsx
│ ├── Help.jsx
│ └── NotFound.jsx
│
├── router/
│ └── RouterApp.jsx # Configuración de rutas
│
├── App.jsx
├── index.jsx
└── styles.css # Estilos generales del proyecto

markdown
Copiar código

---

## ⚙️ Funcionalidades principales

### 🔑 Login
- Permite ingresar con un usuario simulado.
- Verifica datos almacenados en `localStorage`.
- Redirige al chat principal.

### 💬 Chat
- Visualización de mensajes en tiempo real (modo simulado).
- Muestra nombre, avatar y hora del mensaje.
- Diseño limpio con fondo claro u oscuro.

### 👥 Sidebar
- Lista de usuarios del chat.
- Permite seleccionar con quién chatear.
- En móviles se oculta y aparece con menú hamburguesa.

### ⚙️ Popup de configuración
- Permite cambiar entre **modo claro y oscuro**.
- Se muestra centrado con fondo difuminado (`backdrop-filter`).
- Estilado desde `.popup` y `.cont-popup` en `styles.css`.

### 🌗 Modo oscuro
- Se activa dinámicamente modificando el atributo `data-theme="dark"` del `body`.
- Afecta sidebar, chat, inputs y botones.

### 📱 Responsive design
- A partir de `480px` o menos:
  - La **sidebar se oculta** y se reemplaza por un **menú hamburguesa**.
  - El chat se ajusta a todo el alto de la pantalla.
  - El popup se adapta al ancho del móvil.

---

## 🧱 Instalación y ejecución

1. Cloná el repositorio:
   ```bash
   git clone https://github.com/tuusuario/chatapp.git
Entrá al proyecto:

bash
Copiar código
cd chatapp
Instalá las dependencias:

bash
Copiar código
npm install
Iniciá el servidor:

bash
Copiar código
npm run dev
Abrí en tu navegador:

arduino
Copiar código
http://localhost:5173
🧩 Personalización
Podés modificar el color principal del proyecto editando el botón del chat en styles.css:

css
Copiar código
.chat-footer button {
  background-color: #007bff; /* Cambialo por tu color */
}
Y el fondo del modo oscuro:

css
Copiar código
body[data-theme="dark"] {
  background-color: #121212;
}
🧠 Conceptos prácticos aprendidos
Uso de componentes funcionales y hooks (useState, useContext)

Manejo de estilos condicionales y temas dinámicos

Implementación de rutas protegidas

Creación de interfaces responsive

Aplicación de patrones de arquitectura en React

