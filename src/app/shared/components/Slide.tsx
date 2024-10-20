"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Keyboard, Mousewheel, Navigation } from "swiper/modules";
import { CardSong } from "./main/Cards";
import { useEffect, useState } from "react";

export const Slide = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const url =
        "https://spotify23.p.rapidapi.com/search/?type=multi&offset=0&limit=10&numberOfTopResults=5";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "94aa133bb8msh7ce1e94598f1f27p1f38ccjsnde4f08b81105",
          "x-rapidapi-host": "spotify23.p.rapidapi.com",
        },
      };
      console.log(options);

      try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
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
      <SwiperSlide key={1}>
        <CardSong />
      </SwiperSlide>
      <SwiperSlide key={2}>
        <CardSong />
      </SwiperSlide>
      <SwiperSlide key={3}>
        <CardSong />
      </SwiperSlide>
      <SwiperSlide key={4}>
        <CardSong />
      </SwiperSlide>
      <SwiperSlide key={5}>
        <CardSong />
      </SwiperSlide>
      <SwiperSlide key={6}>
        <CardSong />
      </SwiperSlide>
      <SwiperSlide key={7}>
        <CardSong />
      </SwiperSlide>
      <SwiperSlide key={8}>
        <CardSong />
      </SwiperSlide>
      <SwiperSlide key={9}>
        <CardSong />
      </SwiperSlide>
      <SwiperSlide key={10}>
        <CardSong />
      </SwiperSlide>
    </Swiper>
  );
};
