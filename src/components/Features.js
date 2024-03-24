import React, { useEffect, useRef } from "react";
import { features } from "../data";
import { gsap } from "gsap";
  import imagebg from "../assets/img/99.png"  
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const Features = () => {
  const { title, subtitle, image, buttonText, items } = features;
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    // Define your animations
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    tl.from(section, { opacity: 0, y: 50, ease: "power3.out" });

    // Trigger the animation when the section enters the viewport
    const handleScroll = () => {
      const top = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight * 0.75) {
        tl.play();
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call handleScroll initially to check if section is already in view

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <section className="section" ref={sectionRef}>
      <div className="container mx-auto  lg:-mt-10  md:-mt-20  ssm:-mt-20" >
        <div className="flex flex-col lg:flex-row lg:gap-[100px]">
          {/* images */}
          <div className="box flex-1 order-1 lg:-order-1">
            <img src={image.type} alt="" className="img"/>
          </div>

          {/* title */}
          <div className="flex-1 flex flex-col justify-end">
            <h2 className="title">{title}</h2>
            <p className="subtitle">{subtitle}</p>
            <div>
              {items.map((item, index) => {
                // destructure item
                const { title, subtitle, icon } = item;
                return (
                  <div className="flex mb-6 lg:last:mb-0" key={index}>
                    <div className="text-2xl mr-4 lg:text-3xl">{icon}</div>
                    <div>
                      <h4 className="text-base lg:text-xl font-semibold mb-3">
                        {title}
                      </h4>
                      <p>{subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* items */}
        </div>
      </div>
    </section>
  );
};

export default Features;
