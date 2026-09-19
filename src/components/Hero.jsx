import { useEffect, useState } from "react";
import "./Hero.css";
function Hero() {
  
  const profesiones = [
    "Desarrollador Web",
    "Frontend Developer",
    "JavaScript Developer",
    "Soluciones Digitales",
  ];

  const tecnologias = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Supabase",
];

  const [indice, setIndice] = useState(0);
  const [animando, setAnimando] = useState(false);

  useEffect(() => {
  const intervalo = setInterval(() => {
    setAnimando(true);

    setTimeout(() => {
      setIndice((actual) => (actual + 1) % profesiones.length);
      setAnimando(false);
    }, 500);
  }, 3000);

  return () => clearInterval(intervalo);
}, []);

  return (
    <section id="inicio" className="hero">

  <div className="hero-contenido">

    {/* COLUMNA IZQUIERDA */}
    <div className="hero-texto">

      <p className="hero-saludo">
        Hola, soy
      </p>

      <h1>
        Alex Ato
      </h1>

      <h2 className={`hero-profesion ${animando ? "salir" : ""}`}>
        {profesiones[indice]}
      </h2>

      <p className="hero-descripcion">
        Creo sitios web modernos, funcionales y adaptados
        a las necesidades de cada proyecto.
      </p>

      <div className="hero-botones">

        <a
          href="#proyectos"
          className="btn btn-principal"
        >
          Ver mis proyectos
        </a>

        <a
          href="#contacto"
          className="btn btn-secundario"
        >
          Contactarme
        </a>

      </div>

    </div>


    {/* COLUMNA DERECHA */}
    <div className="hero-visual">

      <div className="codigo-card">
        <span>&lt;/&gt;</span>
      </div>

      <div className="tecnologias-flotantes">

        {tecnologias.map((tecnologia) => (
          <span key={tecnologia}>
            {tecnologia}
          </span>
        ))}

      </div>

    </div>

  </div>

</section>
  );
}

export default Hero;