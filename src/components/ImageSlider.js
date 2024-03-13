import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../assets/img/Slider_1.jpeg";
import images2 from "../assets/img/Slider_2.jpeg";
import images3 from "../assets/img/Slider_3.jpg";
import images4 from "../assets/img/Slider_4.jpg";
 import images5 from "../assets/img/Slider_5.jpg";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../slider.css";

const ImageSlider = () => {
  return (
    <div className=" mt-6 w-full  lg:h-[600px]">
      <Swiper
        className="imageSlider  lg:h-[100%] lg:p-10"
        modules={[Navigation, Pagination, Autoplay]}
        navigation={true}
        autoplay={true}
        pagination={true}
      >
        <SwiperSlide>
          <div className="slider">
            <img className="w-full lg:-mt-10 lg:h-full object-cover brightness-75" src={image1} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider">
            <img className="w-full lg:h-full lg:-mt-5 object-cover brightness-75" src={images2} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider">
            <img className="w-full  lg:h-full object-cover brightness-75" src={images3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider">
            <img className="w-full lg:-mt-5 lg:h-full object-cover brightness-75" src={images4} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider">
            <img className="w-full lg:h-full object-cover brightness-75" src={images5} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
      {/* <div className="absolute inset-0 flex flex-col mt-[600px] items-center justify-center text-center text-white">
        
        <button className='bg-[rgba(248,196,117,0.71)] hover:bg-[rgba(221,162,74,0.8)] transition marker:transition-bg duration-500 px-[20px] z-10 py-[6px] mb-[80px] text-lg rounded-md backdrop-blur-md transition lg:px-[35px] lg:py-[9px] lg:mb-[194px] lg:mt-[20px]'>Explore</button>
      </div> */}
    </div>
  );
};

export default ImageSlider;
