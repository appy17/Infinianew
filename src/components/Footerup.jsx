import React from "react";
import image1 from "../assets/img/Screenshot 2024-06-18 143818.png";

function Footerup() {
  return (
    <div className="bg-[#212121]">
      <div className="font-[sans-serif]  mx-auto relative mt-4 px-4 sm:px-6 lg:px-8 ">
        <div className="grid md:grid-cols-2 gap-8 py-8  ">
          <div className="image_div text-center flex flex-col items-center justify-center  md:mt-[-70px]  relative">
            <img 
              className="absolute sm:mb-7  left-1/2 transform -translate-x-1/2 md:left-[-139px] md:transform-none h-[180px]   md:h-[579px] md:ml-[150px] md:w-[1000px] lg:"
              src={image1} 
              style={{ marginTop: '-20px' }} 
            /> 
          </div>

          <form className="form_div lg:ml-18  md:w-[375px]  lg:w-[675px] lg:mt-0    ">
            {/* <h2 className="text-3xl sm:text-4xl md:text-5xl mv:mb-20 text-gray-100  font-bold text-center mb-6 ">
              Contact Us Today
            </h2> */}
          <p className="text-sm sm:text-base md:text-5xl text-gray-100 mb-6 text-center" style={{marginTop:'50px'}}>
            Contact Us Today
            </p>
            <div className="max-w-md mx-auto space-y-3 relative">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-gray-100 py-3 px-4 text-sm outline-[#E99C40] focus-within:bg-transparent"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-gray-100 py-3 px-4 text-sm outline-[#E99C40] focus-within:bg-transparent"
              />
              <input
                type="text"
                placeholder="Phone No."
                className="w-full bg-gray-100 py-3 px-4 text-sm outline-[#E99C40] focus-within:bg-transparent"
              />
              <textarea
                placeholder="Message"
                rows="6"
                className="w-full bg-gray-100 px-4 text-sm pt-3 outline-[#E99C40] focus-within:bg-transparent"
              ></textarea>

              <button
                type="button"
                className="text-white w-full relative bg-[#E99C40] hover:bg-black text-sm px-6 py-3 mt-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  fill="#fff"
                  className="mr-2 inline"
                  viewBox="0 0 548.244 548.244"
                >
                  <path
                    fillRule="evenodd"
                    d="M392.19 156.054L211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                    clipRule="evenodd"
                    data-original="#000000"
                  />
                </svg>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footerup;
