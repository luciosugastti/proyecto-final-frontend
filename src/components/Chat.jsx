import { useState } from "react";
import { useChat } from "../context/ChatContext";
import { useTheme } from "../context/ThemeContext";
import { Link, useNavigate } from "react-router-dom";

export default function Chat() {
  const [msg, setMsg] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const { users, selectedUser, setUsers } = useChat();
  const { theme, toggleTheme, language, changeLanguage, fontSize, changeFontSize } = useTheme();

  const navigate = useNavigate();

  const user = users.find((u) => u.id === selectedUser);

  if (!user) {
    return (
      <div className="user-not-found">
        <p>No hay usuario seleccionado...</p>
      </div>
    );
  }

  const handleChange = (event) => setMsg(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newMessage = {
      id: crypto.randomUUID(),
      text: msg,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    const updatedUsers = users.map((u) =>
      u.id === user.id ? { ...u, messages: [...u.messages, newMessage] } : u
    );

    setUsers(updatedUsers);
    setMsg("");
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  const handleShowPopup = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  const handleClearChat = () => {
    const updatedUsers = users.map((u) =>
      u.id === user.id ? { ...u, messages: [] } : u
    );
    setUsers(updatedUsers);
    handleClosePopup();
  };

  return (
    <>
      {showPopup && (
        <section className="cont-popup">
          <div className="popup">
            <h2>⚙️ Configuración</h2>

            <div>
              <h3>Tema</h3>
              <select value={theme} onChange={(e) => toggleTheme(e.target.value)}>
                <option value="light">Claro</option>
                <option value="dark">Oscuro</option>
              </select>
            </div>

            <div>
              <h3>Idioma</h3>
              <select value={language} onChange={(e) => changeLanguage(e.target.value)}>
                <option value="es">Español</option>
                <option value="en">English</option>
              </select>
            </div>

            <div>
              <h3>Tamaño de letra</h3>
              <select value={fontSize} onChange={(e) => changeFontSize(e.target.value)}>
                <option value="normal">Normal</option>
                <option value="large">Grande</option>
              </select>
            </div>

            <div>
              <h3>Chat</h3>
              <button onClick={handleClearChat}>🗑️ Vaciar chat</button>
            </div>

            <button onClick={handleClosePopup}>Cerrar</button>
          </div>
        </section>
      )}

      <div className={`chat ${fontSize === "large" ? "font-large" : ""}`}>
        <header className="chat-header">
          <div className="chat-user">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"
              alt={user.name}
              className="chat-avatar"
            />
            <strong>{user.name}</strong>
            {user.lastSeen && <span className="last-seen">Last seen: {user.lastSeen}</span>}
          </div>

          <div className="chat-actions">
            <button title="Camera">📷</button>
            <button title="Gallery">🖼️</button>
            <button title="Settings" onClick={handleShowPopup}>⚙️</button>
            <Link to="/help" title="Help">❓</Link>
            <button onClick={handleLogout}>Cerrar sesión</button>
          </div>
        </header>

        <section className="chat-messages">
          {user.messages.map((message) => (
            <div className="message" key={message.id}>
              <p>{message.text}</p>
              <span className="time">{message.time}</span>
            </div>
          ))}
        </section>

        <footer className="chat-footer">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Escribí un mensaje..."
              onChange={handleChange}
              value={msg}
            />
            <button>➤</button>
          </form>
        </footer>
      </div>
    </>
  );
}