"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Keyboard, Mousewheel, Navigation } from "swiper/modules";
import { CardSong } from "./main/Cards";

export const Slide = () => {
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
