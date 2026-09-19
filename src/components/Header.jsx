import { useState } from "react";
import "./Header.css";

function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <header className="header">
      <div className="header-contenido">

        <a href="#inicio" className="logo">
          Alex Ato
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuAbierto}
        >
          {menuAbierto ? "✕" : "☰"}
        </button>

        <nav className={`nav ${menuAbierto ? "nav-abierto" : ""}`}>
          <a href="#inicio" onClick={cerrarMenu}>
            Inicio
          </a>

          <a href="#proyectos" onClick={cerrarMenu}>
            Proyectos
          </a>

          <a href="#servicios" onClick={cerrarMenu}>
            Servicios
          </a>

          <a href="#tecnologias" onClick={cerrarMenu}>
            Tecnologías
          </a>

          <a href="#sobre-mi" onClick={cerrarMenu}>
            Sobre mí
          </a>

          <a href="#contacto" onClick={cerrarMenu}>
            Contacto
          </a>
        </nav>

      </div>
    </header>
  );
}

export default Header;