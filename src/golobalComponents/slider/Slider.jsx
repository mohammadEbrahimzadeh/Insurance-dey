import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
export default function Slider({ images }) {
  return (
    <div className="Slider col-12  mt-1">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-100 "
      >
        {images.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <img className="w-100 h-100" src={item.src} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
