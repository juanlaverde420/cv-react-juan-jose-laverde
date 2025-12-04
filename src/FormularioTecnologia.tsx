import "./Formulario.css";
import { useState } from "react";

type Props = {
  onAgregar: (tecnologia: string) => void;
};

export default function FormularioTecnologia({ onAgregar }: Props) {
  const [tecnologia, setTecnologia] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tecnologia.trim() === "") return;
    onAgregar(tecnologia);
    setTecnologia("");
  };

  return (
    <form onSubmit={handleSubmit} className="formulario-tecnologia">
      <h2 className="formulario-titulo">Agregar Tecnología</h2>

      <input
        type="text"
        value={tecnologia}
        onChange={(e) => setTecnologia(e.target.value)}
        placeholder="Escribe una tecnología..."
      />

      <button type="submit">
        Agregar
      </button>
    </form>
  );
}