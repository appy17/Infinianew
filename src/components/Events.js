import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/core';
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import styled from 'styled-components';

const videos = [
  { source: "https://player.vimeo.com/progressive_redirect/playback/617209007/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=d5b4b95263bc1cdd7d56a2592c0370fa35a874ed20271164cb261bdc245f06cf" },
  { source: "https://player.vimeo.com/progressive_redirect/playback/823476801/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=dbfbcba1448d8dfc1902392cbc50ab7d65efde5d89904698e271c27a9df54bcc" },
  { source: "https://player.vimeo.com/progressive_redirect/playback/906221402/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=c43dc800311f8ff72706443bf31aa58b24dfc180d4a06e502ec56fb64caab89d" },
  { source: "https://player.vimeo.com/progressive_redirect/playback/914356391/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=41679e8e0d9ca5cd689658f1e928443b0b8367173cc1c37d240a7df8b6d7d064" },
  { source: "https://player.vimeo.com/progressive_redirect/playback/912374706/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=4ebdc5cb476709711e6164f8c9ed8604d6644129fccda4253095d2f39cc5fb98" },
  { source: "https://player.vimeo.com/progressive_redirect/playback/887320409/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=33def70707ee651a93d8285e4e56e8ee02b6aec482b1e519ab8e6318f9cf8ce3" },
];

export default function Event() {
  const [swiper, setSwiper] = useState(null);
  const videoRefs = useRef([]);

 
  const handleSlideChange = () => {
    if (swiper) {
      swiper.slides.forEach((slide, index) => {
        const video = videoRefs.current[index];
        if (swiper.activeIndex === index) {
          video.play();
        } else {
          video.pause();
        }
      });
    }
  };

  useEffect(()=> {
    handleSlideChange()
  },[swiper])

console.log("component render")

  return (
    <DIV>
      <h1 className='title text-center'>Events</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        initialSlide={1}
        onSwiper={setSwiper}
        onSlideChange={handleSlideChange}
      >
        {videos.map((item, index) => (
          <SwiperSlide key={index}>
            <video
            className=''
              ref={(el) => (videoRefs.current[index] = el)}
              autoPlay
              loop
              muted
              preload="auto"
              src={item.source}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </DIV>
  );
}

const DIV = styled.div`
  .swiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 500px;
    height: 282px;
  }

  .swiper-slide video {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
