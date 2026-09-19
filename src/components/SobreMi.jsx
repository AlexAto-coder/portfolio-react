import "./SobreMi.css";
function SobreMi() {
  return (
    <section id="sobre-mi" className="sobre-mi">
      <div className="sobre-mi-contenido">

        <div className="sobre-mi-texto">
          <p className="seccion-etiqueta">
            Sobre mí
          </p>

          <h2>
            Desarrollo soluciones web con enfoque práctico
          </h2>

          <p>
            Soy desarrollador web enfocado en la creación de sitios
            modernos, funcionales y adaptados a las necesidades de
            cada proyecto.
          </p>

          <p>
            Trabajo principalmente con HTML, CSS y JavaScript, y
            actualmente desarrollo proyectos con React y Supabase,
            buscando combinar una buena experiencia de usuario con
            soluciones funcionales.
          </p>

          <p>
            Me gusta aprender construyendo proyectos reales y
            convertir las necesidades de cada cliente en soluciones
            digitales claras y útiles.
          </p>
        </div>

        <div className="sobre-mi-datos">
          <div className="dato">
            <strong>Frontend</strong>
            <span>Interfaces web modernas</span>
          </div>

          <div className="dato">
            <strong>JavaScript</strong>
            <span>Interactividad y funcionalidades</span>
          </div>

          <div className="dato">
            <strong>React</strong>
            <span>Aplicaciones web con componentes</span>
          </div>

          <div className="dato">
            <strong>Supabase</strong>
            <span>Datos y funcionalidades backend</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default SobreMi;