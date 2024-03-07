// Footer.js
import React from "react";
import { footer } from "../data";
import Logo from "../assets/img/INFINIA_LOGO.png";

const Footer = () => {
  return (
    <footer className="  justify-center items-top grid mt-4 text-black py-6 w-100">
      <div className="flex flex-wrap justify-start gap-12 mx-auto mb-5">
        <div className="mr-50 flex justify-start text">
        <img src={Logo} alt="" style={{height:"100px",width:"100px"}} />
        </div>
        <div className="flex flex-wrap justify-between gap-14 text-center mr-12 ml-10 ">
          <div className="flex justify-start items-start flex-col text-right ">
            <div
              className="text-lg "
              style={{
                borderBottomWidth: "5px",
                width: "150px",
                textAlign: "start",
              }}
            >
              <a
                href="#"
                className="hover:text-orange-400 text-xl font-medium boder-b-4 "
              >
                Call
              </a>
            </div>
            <div className="mt-6 text-blue-800"></div>
            <br />
            <div className="text-xl font-medium">Connect</div>
            <div className="flex gap-x-4">
              {footer.social.map((item, index) => {
                return (
                  <>
                    <div
                      className="w-12 h-12 text-2xl bg-white-700 rounded-full flex justify-center items-center transition-transform transform hover:-translate-y-1 hover:bg-accent"
                      key={index}
                    >
                      <a
                        href={item.href}
                        className="text-start justify-start ali hover:color-red"
          >
                        {item.icon}
                      </a>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className=" text-start">
            <h5
              href="#"
              className="hover:text-orange-400 text-xl font-medium "
              style={{
                borderBottomWidth: "5px",
                width: "150px",
                textAlign: "start",
              }}
            >
              Email
            </h5>
            <div className="mt-6 text-blue-800">
              <a href="#">info@infinia.com</a>
            </div>
            <br />
            <div className="text-xl font-medium text-start">
              Download our App
            </div>
          </div>
          <div className="text-start">
            <h5
              href="#"
              className="hover:text-orange-400 text-xl font-medium text-start"
              style={{
                borderBottomWidth: "5px",
                width: "150px",
                textAlign: "start",
              }}
            >
              Useful links
            </h5>

            <div className="mt-6 flex flex-col leading-10 text-start text-lg">
              <a className="hover:underline" href="#"></a>
              <a className="hover:underline" href="#">
                Privacy Policy 
              </a>
              <a className="hover:underline" href="#">
                Catalogue
              </a>
              <a className="hover:underline" href="#">
                FAQs
              </a>
              <a className="hover:underline" href="#">
                Cookies Policy
              </a>
              <a className="hover:underline" href="#">
                Help
              </a>
            </div>
          </div>
          <div className="text-start">
            <h2
              href="#"
              className=" text-xl font-medium text-start hover:text-orange-400"
              style={{
                borderBottomWidth: "5px",
                width: "150px",
                textAlign: "start",
              }}
            >
              About Us
            </h2>

            <div className="mt-6 flex flex-col leading-10 text-start text-lg">
              <a className="hover:underline" href="#">
                Home
              </a>
              <a className="hover:underline" href="#">
                About
              </a>
              <a className="hover:underline" href="#">
                Brands
              </a>
              <a className="hover:underline" href="#">
                Contact Us
              </a>
              <a className="hover:underline" href="#">
                Our History
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="text-center mt-10 text-xl font-medium">
        <p className="mb-2">&copy; infinia 2024 - All rights reserved.</p>
        <p>Designed and Developed by © Royals WebTech 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
