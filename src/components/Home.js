import React from "react";
import Hero from "./Hero";
import ImageSlider from "./ImageSlider";
import Features from "./Features";
import NewItems from "./NewItems";
import FeaturesSecond from "./FeaturesSecond";
import Address from "./Address";
import Newsletter from "./Newsletter";
import Testimonial from "./Testimonial";
import Products from "./Products";
import AboutInfinia from "./AboutInfinia";
import "aos/dist/aos.css"; // Import the styles
import AOS from "aos"; // Import the AOS library

const Home = () => {
  AOS.init({
    duration: 1500,
    once: true,
    offset:50,
  
  }); // Run this effect only once when the component mounts
  return (
    <div style={{overflow:"hidden"}}>
      <div data-aos="fade-down">
        <Hero />
      </div>
      <div data-aos="zoom-in">
        <ImageSlider />
      </div>
      <div data-aos="zoom-in">
        <Features />
      </div>
      <div data-aos="zoom-in">
        <NewItems />
      </div>
      <div data-aos="fade-right">
        <FeaturesSecond />
      </div>
      <div data-aos="fade-left">
        <AboutInfinia />
      </div>
      <div data-aos="zoom-in">
        <Products />
      </div>
      <div data-aos="fade-right">
        <Testimonial />
      </div>
      <div data-aos="zoom-in">
        <Address />
      </div>
      <div data-aos="zoom-in">
        <Newsletter />
      </div>

      {/* <BrandCarousel /> */}
    </div>
  );
};

export default Home;