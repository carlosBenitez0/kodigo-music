"use client";

import { useEffect, useState } from "react";
import { allSongs } from "../services/getData";
import { SongData } from "../interfaces/IResponse";

export const useSearch = () => {
  const [search, setSearch] = useState<string>("");
  const [listOfSongs, setListOfSongs] = useState<SongData[]>([]);

  useEffect(() => {
    if (search) {
      const newListOfSongs = allSongs.tracks.items.filter((song: SongData) => {
        return song.data.name.toLowerCase().includes(search.toLowerCase());
      });
      setListOfSongs(newListOfSongs);
      console.log(newListOfSongs);
    } else {
      setListOfSongs(allSongs.tracks.items);
    }
  }, [search]);

  const handleSearchChange = (value: string) => {
    setSearch(value);
  };

  return { search, handleSearchChange, listOfSongs };
};
