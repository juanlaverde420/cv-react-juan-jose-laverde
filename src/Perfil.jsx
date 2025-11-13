import { PerfilData } from "./Data"
import "./Perfil.css"
export default function Perfil() {
  const {descripcion, aptitud1, aptitud2, aptitud3, aptitud4, aptitud5, hobbie1, hobbie2, hobbie3, hobbie4} = PerfilData
    return(
       <section className="perfil-container">
      <div className="perfil-card">
        {/* Título principal */}
        <h1 className="perfil-titulo">Perfil</h1>

        {/* Descripción personal */}
        <div className="perfil-descripcion">
          <p>
            {descripcion}
          </p>
        </div>

        {/* Aptitudes */}
        <div className="perfil-seccion">
          <h3 className="perfil-subtitulo">Aptitudes</h3>
          <ul className="perfil-lista">
            <li>{aptitud1}</li>
            <li>{aptitud2}</li>
            <li>{aptitud3}</li>
            <li>{aptitud4}</li>
            <li>{aptitud5}</li>
          </ul>
        </div>

        {/* Hobbies */}
        <div className="perfil-seccion">
          <h3 className="perfil-subtitulo">Hobbies</h3>
          <ul className="perfil-lista perfil-lista-hobbies">
            <li>{hobbie1}</li>
            <li>{hobbie2}</li>
            <li>{hobbie3}</li>
            <li>{hobbie4}</li>
          </ul>
        </div>
      </div>
    </section>
    )
}