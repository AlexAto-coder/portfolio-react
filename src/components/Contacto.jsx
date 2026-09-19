import "./Contacto.css";
function Contacto() {
  const contactos = [
    {
      nombre: "Email",
      valor: "atoespinozaalexander@gmail.com",
      enlace: "mailto:atoespinozaalexander@gmail.com",
    },
    {
      nombre: "LinkedIn",
      valor: "Alexander Ato Espinoza",
      enlace: "https://www.linkedin.com/in/alexander-ato-espinoza-52276322a",
    },
    {
      nombre: "GitHub",
      valor: "AlexAto-coder",
      enlace: "https://github.com/AlexAto-coder",
    },
  ];

  return (
    <section id="contacto" className="contacto">
      <div className="contacto-contenido">

        <p className="seccion-etiqueta">
          Contacto
        </p>

        <h2>
          ¿Tienes un proyecto en mente?
        </h2>

        <p className="contacto-descripcion">
          Si necesitas desarrollar un sitio web o mejorar un proyecto
          existente, puedes ponerte en contacto conmigo.
        </p>

        <div className="contactos-lista">
          {contactos.map((contacto) => (
            <a
              key={contacto.nombre}
              href={contacto.enlace}
              className="contacto-item"
              target={
                contacto.nombre !== "Email"
                  ? "_blank"
                  : undefined
              }
              rel={
                contacto.nombre !== "Email"
                  ? "noopener noreferrer"
                  : undefined
              }
            >
              <strong>
                {contacto.nombre}
              </strong>

              <span>
                {contacto.valor}
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Contacto;