type Props = {
  habilidades: string[];
};
//Componente que muestra una lista de habilidades pasadas como props

export default function Habilidades({ habilidades }: Props) {//usa habilidades como prop que es un array de strings
  return (
    <div
      className="
        mt-6 flex flex-col gap-6
        bg-gray-900/60 backdrop-blur-xl 
        border border-gray-800 rounded-3xl 
        p-8 shadow-2xl w-full
      "
    >
      <h2 className="text-3xl font-bold text-cyan-400 tracking-wide drop-shadow-lg">
        HABILIDADES
      </h2>

      <ul className="list-disc ml-5 space-y-2 text-gray-400 text-lg leading-relaxed">
        {habilidades.map((item, index) => ( //Agrega renderizado de la lista de habilidades
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
