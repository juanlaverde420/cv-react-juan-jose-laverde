import "./Experiencia.css"
export default function Experiencia() {
    return(
        <section className="experiencia-container">
      <div className="experiencia-card">
        <h2 className="experiencia-titulo">Experiencia Laboral</h2>
        <ul className="experiencia-lista">
          <li>
            <strong>Carnicería local</strong> — Atención al cliente, empaque de productos,
            limpieza y organización del área de trabajo.
          </li>
          <li>
            <strong>Trabajo en fincas</strong> — Apoyo en labores agrícolas, mantenimiento,
            logística y manejo básico de herramientas.
          </li>
          <li>
            <strong>Ayudante de construcción</strong> — Asistencia en tareas básicas de obra,
            preparación de materiales y apoyo al personal técnico.
          </li>
        </ul>
      </div>
    </section>
    )
}