import React from "react"
import styled from "styled-components"


// copy code of blog => blogCard
let data = [
    {
      id: 1,
      type: "admin",
      date: "JAN. 18, 2021",
      com: "3 COMMENTS ",
      title: "Build your Dream Software & Engineering Career",
      desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      cover: "../images/blog/b1.webp",
    },
    {
      id: 2,
      type: "admin",
      date: "API. 25, 2022",
      com: "5 COMMENTS ",
      title: "Build your Dream Software & Engineering Career",
      desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      cover: "../images/blog/b2.webp",
    },
    {
      id: 3,
      type: "user",
      date: "MAY. 15, 2022",
      com: "10 COMMENTS ",
      title: "Build your Dream Software & Engineering Career",
      desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      cover: "../images/blog/b3.webp",
    },
    {
      id: 4,
      type: "admin",
      date: "JAN. 02, 2022",
      com: "3 COMMENTS ",
      title: "Build your Dream Software & Engineering Career",
      desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      cover: "../images/blog/b4.webp",
    },
    {
      id: 5,
      type: "admin",
      date: "DEC. 14, 2022",
      com: "3 COMMENTS ",
      title: "Build your Dream Software & Engineering Career",
      desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      cover: "../images/blog/b5.webp",
    },
    {
      id: 6,
      type: "user",
      date: "JAN. 18, 2021",
      com: "12 COMMENTS ",
      title: "Build your Dream Software & Engineering Career",
      desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      cover: "../images/blog/b6.webp",
    },
  ]
const Blog = () => {
  return (
    <DIV>
      <section className='blog'>
        <div className='container'>
          <h3 subtitle='OUR BLOG' title='Recent From Blog' />
          <div className='grid2'>
            {data.slice(0, 3).map((val) => (
              <div className='items shadow'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <div className='admin flexSB'>
                    <span>
                      <i className='fa fa-user'></i>
                      <label htmlFor=''>{val.type}</label>
                    </span>
                    <span>
                      <i className='fa fa-calendar-alt'></i>
                      <label htmlFor=''>{val.date}</label>
                    </span>
                    <span>
                      <i className='fa fa-comments'></i>
                      <label htmlFor=''>{val.com}</label>
                    </span>
                  </div>
                  <h1>{val.title}</h1>
                  <p>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </DIV>
  )
}

export default Blog

const DIV = styled.div`
   .blog img {
  width: 100%;
  height: 100%;
}
.blog .text {
  padding: 40px 30px;
}
.blog h1 {
  font-weight: 500;
  font-size: 22px;
  line-height: 30px;
  margin: 20px 0;
  transition: 0.5s;
}
.blog h1:hover {
  color: #1eb2a6;
  cursor: pointer;
}
.blog span {
  text-transform: uppercase;
  font-weight: 500;
  color: #1eb2a6;
}
.blog span label {
  margin-left: 10px;
  color: grey;
  font-size: 14px;
}
.blog span:nth-last-child(1) label {
  color: #1eb2a6;
}
.blog p {
  color: grey;
}
 
`