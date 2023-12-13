// import React from 'react'
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import slide1 from '../images/nouha/music.png'
import slide2 from '../images/nouha/slide2.png'
import slide3 from '../images/nouha/music.png'
import slide4  from '../images/nouha/slide2.png'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
         clickable: true,
       }}
        modules={[Autoplay,Pagination]}
        className="mySwiper brand_slider py-6 px-6 rounded-xl dark:bg-black"
      >
        <SwiperSlide>
          <div className="slide_item py-4 px-8 rounded-md">
            <img src={slide1} alt="slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide_item py-4 px-8 rounded-md">
            <img src={slide2} alt="slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide_item py-4 px-8 rounded-md">
            <img src={slide3} alt="slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide_item py-4 px-8 rounded-md">
            <img src={slide4} alt="slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide_item py-4 px-8 rounded-md">
            <img src={slide1} alt="slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide_item py-4 px-8 rounded-md">
            <img src={slide2} alt="slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide_item py-4 px-8 rounded-md">
            <img src={slide3} alt="slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide_item py-4 px-8 rounded-md">
            <img src={slide4} alt="slide" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
