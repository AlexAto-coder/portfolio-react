import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contenido">

        <div className="footer-marca">
          <h2>Alex Ato</h2>
          <p>
            Desarrollador Web · Soluciones Digitales
          </p>
        </div>

        <nav className="footer-enlaces">
          <a href="#inicio">Inicio</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#servicios">Servicios</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <div className="footer-social">
          <a
            href="https://github.com/AlexAto-coder"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/alexander-ato-espinoza-52276322a"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:atoespinozaalexander@gmail.com">
            Email
          </a>
        </div>

      </div>

      <div className="footer-copyright">
        <p>
          © 2026 Alex Ato. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;