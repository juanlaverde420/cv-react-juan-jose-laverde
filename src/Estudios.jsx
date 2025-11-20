import { EstudiosData } from "./Data"
import "./Estudios.css"
export default function Estudios() {
  const {EstudioBachiller, FechaBachiller, EstudioTecnologo, FechaTecnologo } = EstudiosData;
    return(
    <section className="estudios-container">
      <div className="estudios-card">
        <h1 className="estudios-titulo">Formación Académica</h1>

        {/* Bachiller */}
        <div className="estudio-item">
          <h2 className="estudio-tipo">Bachiller</h2>
          <p className="estudio-institucion">
            {EstudioBachiller}
          </p>
          <p className="estudio-fecha">{FechaBachiller}</p>
        </div>

        {/* Tecnólogo */}
        <div className="estudio-item">
          <h2 className="estudio-tipo">Tecnólogo</h2>
          <p className="estudio-institucion">{EstudioTecnologo}</p>
          <p className="estudio-fecha">{FechaTecnologo}</p>
        </div>
      </div>
    </section>
    )
}