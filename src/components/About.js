import React from "react";
import img from "../assets/img/testimonial.png";
// import img1 from '../assets/img/teracota.jpeg'
import img2 from '../assets/img/woodplank (1) (1).png'
import img3 from '../assets/img/9.jpg'
import img4 from '../assets/img/lighting.png'
import img5 from '../assets/img/cladding.jpg'
import img6 from '../assets/img/metal (1).jpg'
import img7 from '../assets/img/m4prelam-pb-exterior.jpg'
import styled from "styled-components";
function About() {
  return (
    <>
      <DIV className="bg-white ">
        <section className="pt-20 ">
          <div className="container  m-auto">
            <div className="heading mx-2 mb-10">
              <h2 className="text1 primary text-center text-3xl" >
                About <span>Infinia</span>
              </h2>

              <div className="fade-in about1">
                {" "}
                {/* Add animation class */}
                {/* <img src={img} alt="" /> */}
                <p className="text-base font-normal leading-7 text-gray-600 mt-5 mb-12 ">
                  Welcome to Infinia Industries Pvt Ltd – Central India's
                  Premier Manufacturer of Innovative Building Solutions! At
                  Infinia Industries, we take pride in being the forefront of
                  innovation, carving a niche as the leading manufacturer of
                  Wood Polymer Composite, Regenerated Plastic, and Terra Cotta
                  products in Central India.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="">
                <h3
                  className="text-2xl font-bold mx-2 p-0  text-gray-700"
                  style={{ textAlign: "center" }}
                >
                  Our Expertise:{" "}
                </h3>

                <div className="text-base font-normal ">
                  <div className="article">
                   
                    <article >
                      <div>
                        <img
                          src={img2}
                          alt=""
                        />
                      </div>
                      <h2> Wood Polymer Composite (WPC)</h2>
                      <p>
                        Infinia Industries excels in the production of Wood
                        Polymer Composite, a revolutionary material that
                        combines the natural aesthetics of wood with the
                        durability of polymer.
                      </p>
                    </article>

                    <article>
                      <div>
                        <img
                          src={img3}
                          alt=""
                        />
                      </div>
                      <h2>Regenerated Plastic</h2>
                      <p>
                        Contributing to the global effort to combat plastic
                        waste, our Regenerated Plastic products are manufactured
                        with a focus on environmental sustainability.
                      </p>
                    </article>

                    <article>
                      <div>
                        <img
                          src={img3}
                          alt=""
                        />
                      </div>
                      <h2>Terra Cotta Products</h2>
                      <p>
                        Rooted in tradition and crafted with modern precision,
                        our Terra Cotta products add a touch of timeless
                        elegance to architectural and landscaping projects.
                      </p>
                    </article>


                  </div>
                </div>
                <h3
                  className="text-xl font-bold mx-2 text-gray-700 mb-2"
                  style={{ textAlign: "center" }}
                >
                  Why Choose Infinia industries:
                </h3>

                <div className="main">
                  <down className="down">
                    <div>
                      <img
                        className="img"
                        src={img2}
                        alt=""
                      />
                    </div>
                    <div className="subdown">
                      <h2>Climate Responsive:</h2>
                      <p>
                        Our products are engineered to adapt to diverse
                        climates, ensuring optimal performance and longevity in
                        any environment
                      </p>
                    </div>
                  </down>
                  <down className="down">
                    <div>
                      <img
                        className="img"
                        src={img4}
                        alt=""
                      />
                    </div>
                    <div className="subdown">
                      <h2>Extended Usable Life:</h2>
                      <p>
                        Infinia products boast a longer lifespan compared to
                        alternatives in the market, providing sustainable
                        solutions that stand the test of time.
                      </p>
                    </div>
                  </down>
                  <down className="down">
                    <div>
                      <img
                        className="img"
                        src={img5}
                        alt=""
                      />
                    </div>
                    <div className="subdown">
                      <h2>Superior Quality:</h2>
                      <p>
                        Quality is at the heart of everything we do. Our
                        commitment to excellence ensures that our products meet
                        and exceed industry standards
                      </p>
                    </div>
                  </down>
                  <down className="down">
                    <div>
                      <img
                        className="img"
                        src={img6}
                        alt=""
                      />
                    </div>
                    <div className="subdown">
                      <h2>Cost-Effective Solutions:</h2>
                      <p>
                        We understand the value of cost-effective solutions
                        without compromising on quality. Infinia products offer
                        unmatched value for your investment.
                      </p>
                    </div>
                  </down>
                  <down className="down">
                    <div>
                      <img
                        className="img"
                        src={img7}
                        alt=""
                      />
                    </div>
                    <div className="subdown">
                      <h2>Sustainability Champions:</h2>
                      <p>
                        At Infinia Industries, sustainability isn't just a goal;
                        it's a responsibility. Our products actively contribute
                        to preventing deforestation and reducing plastic waste.
                      </p>
                    </div>
                  </down>
                </div>
              </div>
            </div>
          </div>
        </section>
      </DIV>
    </>
  );
}

export default About;

const DIV = styled.div`
.about1{
    display: flex;
    margin-top: 30px;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    /* flex-wrap: wrap; */
    overflow: hidden;
    font-weight: 600;
}
.about1 img{
    height: 300px;
    width: 400px;
}
article {
    width: 100%;
    max-width: 400px;
    padding: 1rem;
    background-color: #fff;
    border: 1px solid #d5d5d5;
    border-radius: 10px;
    box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.1);
    animation: slide-in-right-to-left 0.5s ease-in-out forwards;
  }
  article img{
    height: 100%;
    width: 100%;
  }
  .article{
    width: 100%;
    display: flex;
    gap: 2rem;
    padding: 10px;
    margin :10px;
    flex-direction: row;
    justify-content: center;
    /* justify-content: center;
    align-items: center; */
  }
  article img {
    border-radius: 5px;
    animation-name: fade;
    animation-duration: 1s;
  }
  
  article h2 {
    margin: 0.5rem 0;
    padding: 2px;
    font: 600 24px sans-serif;
    color: black;
    animation: fadetext 2s ease-in-out forwards;
  }
  
  article p {
    margin-bottom: 1rem;
    padding: 2px;
    color: #777;
    font-family: sans-serif;
    animation: fadetext 2.2s ease-in-out forwards;
  }
  
  article button {
    padding: 0.5rem 0.7rem;
    display: block;
    background-color: #03a9f4;
    border: none;
    border-radius: 5px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s all;
    animation: slide-in-top-to-bottom 1.5s;
  }
  
  article button:hover {
    background-color: #29b6f6;
    transform: translatey(-2px);
    box-shadow: 0 7px 7px rgba(0, 0, 0, 0.1);
  }
  
  article button:active {
    transform: translatey(0);
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.1);
  }
  
  @keyframes slide-in-right-to-left {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
  
  @keyframes slide-in-top-to-bottom {
    0% {
      opacity: 0;
      transform: translatey(100%);
    }
    50% {
      opacity: 0;
      transform: translatey(100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes fade {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
  
    50% {
      opacity: 0;
      transform: translateX(-100%);
    }
  
    100% {
      opacity: 1;
    }
  }
  
  @keyframes fadetext {
    0% {
      opacity: 0;
    }
  
    50% {
      opacity: 0;
    }
  
    100% {
      opacity: 1;
    }
  }


  .down{
    width: 48%;
    /* max-width: 320px; */
    padding: 10px;
    background-color: #fff;
    border: 1px solid #d5d5d5;
    border-radius: 10px;
    box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.1);
    animation: slide-in-right-to-left 0.5s ease-in-out forwards;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 1rem;
height: 50%;
  }
  .down .img{
    height: 110px ;
    width: 400px;
    animation: fade;
  }
  .subdown{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 5px;
    margin-left: 20px;
  }
  .main {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    padding: 10px;
    margin: 10px;
    /* justify-content: center;
    width: 600px; */
}



/* Default styles */

/* Tablet styles */
@media only screen and (max-width: 768px) {
    .about1{
        display: flex;
        margin-top: 30px;
        gap: 2rem;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        /* flex-wrap: wrap; */
    }
    .about1 img{
        height: 300px;
        width: 400px;
    }
    .container {
      width: 90%; /* Adjust width for tablets */
    }
  
    .main {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 20px;
        padding: 10px;
        margin: 10px;
        justify-content: start;
        width: 600px;
    }

    .article{
      /* width: 100%; */
      max-width: 500px;
      padding: 1rem;
      /* background-color: #fff; */
      /* border: 1px solid #d5d5d5; */
      border-radius: 10px;
      /* box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.1); */
      animation: slide-in-right-to-left 0.5s ease-in-out forwards;
        flex-direction: column;
    }
    .down {
      width: 50%;
      display: flex;      
      flex-direction: column;
  } 
    
  }
  
  /* Mobile styles */
  @media screen and (max-width: 320px) {
    .about1{
      overflow: hidden;
      /* width: 50%; */
    }
      .main {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          /* gap: 20px; */
          /* padding: -6px; */
          /* margin: 10px; */
          /* justify-content: center; */
          width: 500px;
        }
         .article {
            width: 100%;  
            flex-direction: column;
        } 
         .down {
            width: 43%;
            display: flex;
            flex-direction: column;
        } 
   
    .text1{
        margin-top: 40px;
    }
  }
  

  
`
