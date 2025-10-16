import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Help = () => {
  const { theme, language, fontSize } = useTheme();

  return (
    <div
      className={`help-container ${theme} ${fontSize === "large" ? "font-large" : ""}`}
      style={{ padding: "2rem" }}
    >
      <h1>{language === "es" ? "Ayuda y Documentación" : "Help & Documentation"}</h1>

      <p>
        {language === "es"
          ? "Esta aplicación es un clon simplificado de WhatsApp desarrollado como trabajo práctico para la UTN."
          : "This app is a simplified WhatsApp clone developed as a practical project for UTN."}
      </p>

      <h2>📱 {language === "es" ? "Funcionamiento general" : "General operation"}</h2>
      <p>
        {language === "es"
          ? "El usuario puede iniciar sesión, ver contactos conectados y mantener conversaciones. También puede cambiar el tema visual desde la configuración."
          : "The user can log in, see online contacts and chat. The visual theme can also be changed from settings."}
      </p>

      <h2>⚙️ {language === "es" ? "Tecnologías utilizadas" : "Technologies used"}</h2>
      <ul>
        <li>React</li>
        <li>Vite</li>
        <li>React Router DOM</li>
        <li>Context API</li>
        <li>CSS</li>
      </ul>

      <Link to="/" style={{ marginTop: "2rem", display: "inline-block" }}>
        {language === "es" ? "← Volver al inicio" : "← Back to home"}
      </Link>
    </div>
  );
};

export default Help;