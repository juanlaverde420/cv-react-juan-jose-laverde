import { CabeceraData } from "./Data"
import "./Cabecera.css"
export default function Cabecera() {
  const { nombre, ocupacion, correo, telefono, ubicacion} = CabeceraData;
  return (
    <section className="perfil-container">
        <div className="foto-container">
            <img src="/img/juan.jpg.jpeg" alt="foto de juan jose laverde" className="foto" />
        </div>
      <div className="perfil-card">
        <h1 className="perfil-nombre">{nombre}</h1>
        <h2 className="perfil-titulo">
          {ocupacion}
        </h2>

        <div className="perfil-info">
          <p>
            <span className="perfil-label">Email:</span>{" "}
            <a href="mailto:juanjgl2007@hotmail.com">
              {correo}
            </a>
          </p>
          <p>
            <span className="perfil-label">Teléfono:</span>{" "}
            <a href="tel:+573118013700">{telefono}</a>
          </p>
          <p>
            <span className="perfil-label">Ubicación:</span>{ubicacion}
          </p>
        </div>
      </div>
    </section>
  )
}