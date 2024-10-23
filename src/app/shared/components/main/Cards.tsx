interface CardSongProps {
  name: string;
  image: string;
  artist: string;
}
export const CardSong = ({ name, image, artist }: CardSongProps) => {
  // Puedes añadir un estado para manejar la carga de la imagen si es necesario
  return (
    <div className="shadow-lg shadow-slate-900/50 rounded-md mx-4 min-h-[240px]">
      <div className="rounded-md">
        <div className="h-[150px] w-full rounded-t-md overflow-hidden">
          {image ? (
            <img
              className="rounded-t-md h-[150px] w-full object-cover"
              src={image}
              alt={name}
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center bg-gray-200 rounded-t-md">
              <p>Cargando...</p>
            </div>
          )}
        </div>
      </div>
      <div className="text-gray-800 backdrop-blur-2xl bg-gray-300/10 p-4 rounded-b-md h-[120px] flex flex-col justify-between">
        <p className="font-bold mb-4 line-clamp-2">{name}</p>
        <p>{artist}</p>
      </div>
    </div>
  );
};

interface CardArtistProps {
  name: string;
  image: string;
}

export const CardArtist = ({ name, image }: CardArtistProps) => {
  return (
    <div className="shadow-lg shadow-slate-900/50 rounded-md mx-4">
      <div className="rounded-md p-4">
        <div className="h-[150px] w-full rounded-full flex items-center justify-center overflow-hidden">
          {image ? (
            <img
              className="w-[150px] h-[150px] object-cover rounded-full bg-center"
              src={image}
              alt={name}
            />
          ) : (
            <div className="w-[150px] h-[150px] flex items-center justify-center bg-gray-200 rounded-full">
              <p>Cargando...</p>
            </div>
          )}
        </div>
      </div>
      <div className="text-gray-800 backdrop-blur-2xl bg-gray-300/10 p-4 rounded-b-md">
        <p className="font-bold">{name}</p>
      </div>
    </div>
  );
};
