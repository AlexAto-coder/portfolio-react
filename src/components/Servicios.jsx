import "./Servicios.css";
function Servicios() {
  const servicios = [
    {
      titulo: "Desarrollo Web",
      descripcion:
        "Creación de sitios web modernos, funcionales y adaptados a diferentes dispositivos.",
    },
    {
      titulo: "Landing Pages",
      descripcion:
        "Diseño de páginas enfocadas en presentar productos, servicios o proyectos de forma clara.",
    },
    {
      titulo: "JavaScript",
      descripcion:
        "Desarrollo de funcionalidades interactivas para mejorar la experiencia del usuario.",
    },
    {
      titulo: "Mantenimiento Web",
      descripcion:
        "Actualización de contenidos, corrección de errores y mejoras en sitios web existentes.",
    },
  ];

  return (
    <section id="servicios" className="servicios">
      <div className="servicios-contenido">

        <p className="seccion-etiqueta">
          Lo que hago
        </p>

        <h2>
          Servicios
        </h2>

        <p className="seccion-descripcion">
          Soluciones web pensadas para las necesidades de cada proyecto.
        </p>

        <div className="servicios-grid">
          {servicios.map((servicio) => (
            <article
              className="servicio-card"
              key={servicio.titulo}
            >
              <h3>
                {servicio.titulo}
              </h3>

              <p>
                {servicio.descripcion}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Servicios;