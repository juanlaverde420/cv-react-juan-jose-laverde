import { ExperienciaData } from "./Data"
import "./Experiencia.css"
export default function Experiencia() {
  const {Experiencia1, Experiencia2, Experiencia3} = ExperienciaData
    return(
        <section className="experiencia-container">
      <div className="experiencia-card">
        <h2 className="experiencia-titulo">Experiencia Laboral</h2>
        <ul className="experiencia-lista">
          <li>
            {Experiencia1}
          </li>
          <li>
            {Experiencia2}
          </li>
          <li>
            {Experiencia3}
          </li>
        </ul>
      </div>
    </section>
    )
}