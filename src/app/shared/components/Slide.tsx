"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Keyboard, Mousewheel, Navigation } from "swiper/modules";
import { CardArtist, CardSong } from "./main/Cards";
import { useEffect, useState } from "react";
import { allArtists, allSongs } from "@/app/services/getData";

export const Slide = () => {
  const [songs, setSongs] = useState(null);

  useEffect(() => {
    setSongs(allSongs);
  }, []);

  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        678: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[Navigation, Mousewheel, Keyboard]}
      className="h-[300px] w-full"
    >
      {songs &&
        songs.tracks.items.map((song, index) => (
          <SwiperSlide key={index}>
            <CardSong
              name={song.data.name}
              image={song.data.albumOfTrack.coverArt.sources[0].url}
              artist={song.data.artists.items[0].profile.name}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export const SlideArtists = () => {
  const [artists, setArtists] = useState(null);

  useEffect(() => {
    setArtists(allArtists);
  }, []);

  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        678: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[Navigation, Mousewheel, Keyboard]}
      className="h-[300px] w-full"
    >
      {artists &&
        artists.artists.map((artist) => {
          return (
            <SwiperSlide key={artist.name}>
              <CardArtist name={artist.name} image={artist.image} />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};
