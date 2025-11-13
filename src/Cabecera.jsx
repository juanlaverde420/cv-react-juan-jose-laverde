import "./Cabecera.css"
export default function Cabecera() {
  return (
    <section className="perfil-container">
      <div className="perfil-card">
        <h1 className="perfil-nombre">Juan José Garcia Laverde</h1>
        <h2 className="perfil-titulo">
          Estudiante de Análisis y Desarrollo de Software
        </h2>

        <div className="perfil-info">
          <p>
            <span className="perfil-label">Email:</span>{" "}
            <a href="mailto:juanjgl2007@hotmail.com">
              juanjgl2007@hotmail.com
            </a>
          </p>
          <p>
            <span className="perfil-label">Teléfono:</span>{" "}
            <a href="tel:+573118013700">+57 311 801 3700</a>
          </p>
          <p>
            <span className="perfil-label">Ubicación:</span> Medellín, Colombia
          </p>
        </div>
      </div>
    </section>
  )
}