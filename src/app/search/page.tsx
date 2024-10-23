"use client";

import { useSearch } from "../hook/useSearch";
import { Aside } from "../shared/components/Aside";
import { CardSong } from "../shared/components/main/Cards";

import { HeaderSearch } from "./components/HeaderSearch";

const SearchPage = () => {
  const { listOfSongs } = useSearch();

  return (
    <div className="min-h-screen w-full bg-gray-100 relative z-0">
      <div className="left-72 top-72 bg-gradient-to-br blur-sm from-purple-500 to-green-500 w-48 h-48 rounded-full absolute"></div>
      <div className="left-20 top-60 bg-gradient-to-bl blur-lg from-orange-500 to-green-500 w-10 h-10 rounded-full absolute"></div>
      <div className="right-[500px] top-24 bg-gradient-to-tr blur-md from-yellow-500 to-red-500 w-20 h-20 rounded-full absolute"></div>
      <div className="right-10 top-36 bg-gradient-to-br blur-md from-blue-500 to-purple-500 w-96 h-96 rounded-full absolute"></div>
      <div className="bottom-10 left-96 bg-gradient-to-br blur-md from-black to-gray-500 w-44 h-44 rounded-full absolute"></div>
      <div className="z-10 min-h-screen w-full grid grid-cols-[auto,1fr] grid-rows-[auto,1fr] relative">
        <Aside />
        <HeaderSearch />
        <main className="p-4 pt-8 min-w-full overflow-hidden">
          <h2 className="text-2xl mb-8 ml-4">Canciones</h2>
          <div className="grid grid-cols-4 gap-4">
            {listOfSongs.map((song) => {
              return (
                <CardSong
                  key={song.data.name}
                  name={song.data.name}
                  image={song.data.albumOfTrack.coverArt.sources[0].url}
                  artist={song.data.artists.items[0].profile.name}
                />
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
};

export default SearchPage;
