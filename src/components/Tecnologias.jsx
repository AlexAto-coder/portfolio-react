import "./Tecnologias.css";
function Tecnologias() {
  const tecnologias = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Supabase",
  ];

  return (
    <section id="tecnologias" className="tecnologias">
      <div className="tecnologias-contenido">

        <p className="seccion-etiqueta">
          Herramientas
        </p>

        <h2>
          Tecnologías
        </h2>

        <p className="seccion-descripcion">
          Tecnologías que utilizo para desarrollar mis proyectos web.
        </p>

        <div className="tecnologias-lista">
          {tecnologias.map((tecnologia) => (
            <span
              className="tecnologia"
              key={tecnologia}
            >
              {tecnologia}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Tecnologias;