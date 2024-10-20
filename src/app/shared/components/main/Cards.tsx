export const CardSong = () => {
  return (
    <div className="shadow-lg shadow-slate-900/50 rounded-md mx-4">
      <div className="rounded-md">
        <div className=" h-[150px] w-full bg-gray-400 rounded-t-md"></div>
      </div>
      <div className="text-gray-800 backdrop-blur-2xl bg-gray-300/10 p-4 rounded-b-md">
        <p className="font-bold">Titulo</p>
        <p>Artista</p>
        <p>Fecha de lanzamiento</p>
      </div>
    </div>
  );
};
