import "./Perfil.css"
export default function Perfil() {
    return(
       <section className="perfil-container">
      <div className="perfil-card">
        {/* Título principal */}
        <h1 className="perfil-titulo">Perfil</h1>

        {/* Descripción personal */}
        <div className="perfil-descripcion">
          <p>
            Estudiante en formación del <strong>SENA (Servicio Nacional de Aprendizaje)</strong>,
            apasionado por la tecnología y el desarrollo de soluciones innovadoras.
            Poseo habilidades en <strong>programación</strong>, <strong>diseño</strong> y
            <strong> resolución de problemas</strong>, siempre buscando mejorar mis capacidades
            para crear soluciones eficientes y funcionales.
          </p>
        </div>

        {/* Aptitudes */}
        <div className="perfil-seccion">
          <h3 className="perfil-subtitulo">Aptitudes</h3>
          <ul className="perfil-lista">
            <li>Conocimiento intermedio en <strong>Python</strong></li>
            <li>Manejo de <strong>bases de datos</strong></li>
            <li>Diseño web con <strong>Tailwind CSS</strong> y <strong>Bootstrap</strong></li>
            <li>Creatividad en la solución de problemas</li>
            <li>Buen manejo de <strong>oratoria</strong> y comunicación</li>
          </ul>
        </div>

        {/* Hobbies */}
        <div className="perfil-seccion">
          <h3 className="perfil-subtitulo">Hobbies</h3>
          <ul className="perfil-lista perfil-lista-hobbies">
            <li>Streamear</li>
            <li>Jugar PlayStation</li>
            <li>Cocinar</li>
            <li>Jugar baloncesto</li>
          </ul>
        </div>
      </div>
    </section>
    )
}