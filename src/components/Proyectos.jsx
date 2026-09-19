import "./Proyectos.css";
function Proyectos() {
  const proyectos = [
    {
      nombre: "Buganvillias Bungalows",
      descripcion:
        "Sitio web para alojamiento turístico, diseñado para mostrar servicios, galería, experiencias y reservas.",
      tecnologias: ["HTML", "CSS", "JavaScript"],
      estado: "Proyecto terminado",
      enlace: "https://buganbillias-bungalow-ip2d.onrender.com/",
    },
    {
      nombre: "Cristo Vive – Sullana",
      descripcion:
        "Plataforma web de contenido cristiano con lecturas diarias, videos, reflexiones y contenido administrado mediante Supabase.",
      tecnologias: ["HTML", "CSS", "JavaScript", "Supabase"],
      estado: "Proyecto en desarrollo",
      enlace: "https://cristo-vive-sullana.onrender.com/",
    },
  ];

  return (
    <section id="proyectos" className="proyectos">
      <div className="proyectos-contenido">

        <p className="seccion-etiqueta">
          Mi trabajo
        </p>

        <h2>
          Proyectos
        </h2>

        <p className="seccion-descripcion">
          Algunos de los proyectos en los que he trabajado.
        </p>

        <div className="proyectos-grid">
          {proyectos.map((proyecto) => (
            <article
              className="proyecto-card"
              key={proyecto.nombre}
            >
              <div className="proyecto-info">

                <span className="proyecto-estado">
                  {proyecto.estado}
                </span>

                <h3>
                  {proyecto.nombre}
                </h3>

                <p>
                  {proyecto.descripcion}
                </p>

                <div className="proyecto-tecnologias">
                  {proyecto.tecnologias.map((tecnologia) => (
                    <span key={tecnologia}>
                      {tecnologia}
                    </span>
                  ))}
                </div>

                <a
                  href={proyecto.enlace}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver proyecto
                </a>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Proyectos;