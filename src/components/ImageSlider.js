import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../assets/img/front.webp";
import images2 from "../assets/img/front3.webp";
import images3 from "../assets/img/image3.webp";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../slider.css";

const ImageSlider = () => {
  return (
    <div className="border-red p-1 mt-6 w-full">
      <Swiper
        className="imageSlider mt-10 lg:h-[600px] lg:p-10"
        modules={[Navigation, Pagination, Autoplay]}
        navigation={true}
        autoplay={true}
        pagination={true}
      >
        <SwiperSlide>
          <div className="slider">
            <img className="w-full h-full border-r-8" src={image1} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="">
            <img className=" w-full h-full border-r-8" src={images2} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="">
            <img className=" w-full h-full border-r-8" src={images3} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageSlider;
