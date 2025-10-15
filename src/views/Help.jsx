import { Link } from "react-router-dom"

const Help = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Ayuda y Documentación</h1>
      <p>
        Esta aplicación es un clon simplificado de WhatsApp desarrollado como trabajo práctico
        para la Universidad Tecnológica Nacional (UTN).
      </p>

      <h2>📱 Funcionamiento general</h2>
      <p>
        El usuario puede iniciar sesión, ver contactos conectados y mantener conversaciones
        en tiempo real. También puede cambiar el tema visual (claro u oscuro) desde la
        configuración del chat.
      </p>

      <h2>⚙️ Tecnologías utilizadas</h2>
      <ul>
        <li>React</li>
        <li>Vite</li>
        <li>React Router DOM</li>
        <li>Context API</li>
        <li>CSS Modules</li>
      </ul>

      <h2>🚀 Posibles mejoras futuras</h2>
      <ul>
        <li>Integración con una base de datos real (Firebase o MongoDB)</li>
        <li>Notificaciones en tiempo real</li>
        <li>Soporte para envío de imágenes y archivos</li>
        <li>Estados y mensajes de voz</li>
      </ul>
    </div>
  );
};

export default Help;