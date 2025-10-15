import { useState, useEffect } from "react"
import { useChat } from "../context/ChatContext"
import { Link, useNavigate } from "react-router-dom"

export default function Chat() {
  const [msg, setMsg] = useState("")
  const [showPopup, setShowPopup] = useState(false)
  const [theme, setTheme] = useState("claro")

  // Obtenemos del contexto todo lo necesario
  const { users, selectedUser, setUsers } = useChat()
  const navigate = useNavigate()

  // Buscamos el usuario activo
  const user = users.find(u => u.id === selectedUser)

  useEffect(() => {
    // Cargamos el tema guardado (si existe)
    const savedTheme = localStorage.getItem("theme") || "claro"
    setTheme(savedTheme)
    document.body.setAttribute("data-theme", savedTheme)
  }, [])

  const handleChange = (event) => {
    setMsg(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const newMessage = {
      id: crypto.randomUUID(),
      text: msg,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    }

    const updatedUsers = users.map(u =>
      u.id === user.id
        ? { ...u, messages: [...u.messages, newMessage] }
        : u
    )

    setUsers(updatedUsers)
    setMsg("")
  }

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    navigate("/")
  }

  const handleShowPopup = () => setShowPopup(true)
  const handleClosePopup = () => setShowPopup(false)

  const handleThemeChange = (e) => {
    const selected = e.target.value
    setTheme(selected)
    document.body.setAttribute("data-theme", selected)
    localStorage.setItem("theme", selected)
  }

  if (!user) {
    return (
      <div className="user-not-found">
        <p>No hay usuario seleccionado...</p>
      </div>
    )
  }

  return (
    <>
      {/* Popup de configuración */}
      {showPopup && (
        <section className="cont-popup">
          <div className="popup">
            <h2>Configuración de Chat</h2>
            <h3>Cambiar tema:</h3>
            <select value={theme} onChange={handleThemeChange}>
              <option value="claro">Claro</option>
              <option value="oscuro">Oscuro</option>
            </select>
            <br />
            <button onClick={handleClosePopup}>Cerrar</button>
          </div>
        </section>
      )}

      {/* Contenedor principal */}
      <div className="chat">
        <header className="chat-header">
          <div>
            <div className="chat-user">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"
                alt={user.name}
                className="chat-avatar"
              />
              <strong>{user.name}</strong>
              {user.lastSeen !== "" && (
                <span className="last-seen">Last seen: {user.lastSeen}</span>
              )}
            </div>
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
              placeholder="Enter text here..."
              onChange={handleChange}
              value={msg}
            />
            <button>➤</button>
          </form>
        </footer>
      </div>
    </>
  )
}