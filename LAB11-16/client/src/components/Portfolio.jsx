/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../css/Portfolio_style.css";

const Portfolio = () => {
  const [curpage, setCurPage] = useState(1);
  const [sliding, setSliding] = useState(false);
  const [click, setClick] = useState(true);
  const [svg, setSvg] = useState(true); // Corrected the setter name
  const pagePrefix = "slide";
  const transitionPrefix = "circle";

  const leftSlide = () => {
    if (click) {
      console.log("Left slide clicked");
      setClick(false);
      setSliding(true);
      const nextPage = curpage === 1 ? 5 : curpage - 1;
      const svgValue = nextPage === 1 ? true : false;
      setCurPage(nextPage);
      setSvg(svgValue);
      const slideElements = Array.from({ length: 4 }, (_, index) =>
        document.getElementById(pagePrefix + (index + 1))
      );
      slideElements.forEach((element) => element.classList.add("tran"));
      setTimeout(() => {
        move();
        slideElements.forEach((element) => element.classList.remove("tran"));
        setClick(true);
      }, 200);
    }
  };

  const rightSlide = () => {
    if (click) {
      console.log("Right slide clicked");
      setClick(false);
      setSliding(true);
      const nextPage = curpage === 4 ? 1 : curpage + 1;
      const svgValue = nextPage === 1 ? true : false;
      setCurPage(nextPage);
      setSvg(svgValue);
      const slideElements = Array.from({ length: 4 }, (_, index) =>
        document.getElementById(pagePrefix + (index + 1))
      );
      slideElements.forEach((element) => element.classList.add("tran"));
      setTimeout(() => {
        move();
        slideElements.forEach((element) => element.classList.remove("tran"));
        setClick(true);
      }, 200);
    }
  };

  const move = () => {
    if (sliding) {
      setSliding(false);
      if (svg) {
        for (let j = 1; j <= 9; j++) {
          const c = document.getElementById(transitionPrefix + j);
          c.classList.remove("steap");
          c.classList.add("streak");
          console.log("streak");
        }
      } else {
        for (let j = 10; j <= 18; j++) {
          const c = document.getElementById(transitionPrefix + j);
          c.classList.remove("steap");
          c.classList.add("streak");
          console.log("streak");
        }
      }
      setTimeout(() => {
        for (let i = 1; i <= 4; i++) {
          if (i === curpage) {
            const a = document.getElementById(pagePrefix + i);
            a.classList.add("up1");
          } else {
            const b = document.getElementById(pagePrefix + i);
            b.classList.remove("up1");
          }
        }
        setSliding(true);
      }, 600);
      setTimeout(() => {
        setClick(true);
      }, 1700);

      setTimeout(() => {
        if (svg) {
          for (let j = 1; j <= 9; j++) {
            const c = document.getElementById(transitionPrefix + j);
            c.classList.remove("streak");
            c.classList.add("steap");
          }
        } else {
          for (let j = 10; j <= 18; j++) {
            const c = document.getElementById(transitionPrefix + j);
            c.classList.remove("streak");
            c.classList.add("steap");
          }
          setSliding(true);
        }
      }, 850);
      setTimeout(() => {
        setClick(true);
      }, 1700);
    }
  };

  return (
    <>
      <Nav />
      <section id="portfolio-header">
        <h1>อิทธิกร สิริเวชพันธุ์</h1>
        <img
          src="https://img5.pic.in.th/file/secure-sv1/avatar.jpeg"
          alt="รูปภาพ"
        />
      </section>
      <div id="page">
        <main>
          <section id="skills">
            <h2>ทักษะ</h2>
            <ul>
              <li>
                ทักษะการใช้ภาษา Front-end HTML, CSS, JavaScript, React, Svelte
              </li>
              <li>ออกแบบ UX/UI: Front-end Developer</li>
              <li>ทักษะการใช้ภาษา Back-end Python, Java, PHP, Node.js</li>
              <li>ทักษะด้านการออกแบบและพัฒนาซอฟต์แวร์</li>
              <li>ทักษะด้านการจัดการเวลา</li>
              <li>ทักษะด้านการเรียนรู้สิ่งใหม่</li>
            </ul>
          </section>
          <section id="performance" className="parent">
            <h2>ผลงาน</h2>
            <div className="slider">
              <button
                type="button"
                id="right"
                className="right"
                name="button"
                onClick={rightSlide}
              >
                <svg
                  version="1.1"
                  id="Capa_1"
                  width="40px"
                  height="40px "
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 477.175 477.175"
                  style={{ enableBackground: "new 0 0 477.175 477.175" }}
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      style={{ fill: "#9d9d9d" }}
                      d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
                    c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z
                    "
                    />
                  </g>
                </svg>
              </button>
              <button
                type="button"
                id="left"
                className="left"
                name="button"
                onClick={leftSlide}
              >
                <svg
                  version="1.1"
                  id="Capa_2"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 477.175 477.175"
                  style={{ enableBackground: "new 0 0 477.175 477.175" }}
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      style={{ fill: "#9d9d9d" }}
                      d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
                    c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"
                    />
                  </g>
                </svg>
              </button>
              <svg
                id="svg2"
                className="up2"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink" // Use xmlnsXlink instead of xmlns:xlink
              >
                <circle
                  id="circle1"
                  className="circle1 steap"
                  cx="34px"
                  cy="49%"
                  r="20"
                />
                <circle
                  id="circle2"
                  className="circle2 steap"
                  cx="34px"
                  cy="49%"
                  r="100"
                />
                <circle
                  id="circle3"
                  className="circle3 steap"
                  cx="34px"
                  cy="49%"
                  r="180"
                />
                <circle
                  id="circle4"
                  className="circle4 steap"
                  cx="34px"
                  cy="49%"
                  r="260"
                />
                <circle
                  id="circle5"
                  className="circle5 steap"
                  cx="34px"
                  cy="49%"
                  r="340"
                />
                <circle
                  id="circle6"
                  className="circle6 steap"
                  cx="34px"
                  cy="49%"
                  r="420"
                />
                <circle
                  id="circle7"
                  className="circle7 steap"
                  cx="34px"
                  cy="49%"
                  r="500"
                />
                <circle
                  id="circle8"
                  className="circle8 steap"
                  cx="34px"
                  cy="49%"
                  r="580"
                />
                <circle
                  id="circle9"
                  className="circle9 steap"
                  cx="34px"
                  cy="49%"
                  r="660"
                />
              </svg>
              <svg
                id="svg1"
                className="up2"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <circle
                  id="circle10"
                  className="circle10 steap"
                  cx="648px"
                  cy="49%"
                  r="20"
                />
                <circle
                  id="circle11"
                  className="circle11 steap"
                  cx="648px"
                  cy="49%"
                  r="100"
                />
                <circle
                  id="circle12"
                  className="circle12 steap"
                  cx="648px"
                  cy="49%"
                  r="180"
                />
                <circle
                  id="circle13"
                  className="circle13 steap"
                  cx="648px"
                  cy="49%"
                  r="260"
                />
                <circle
                  id="circle14"
                  className="circle14 steap"
                  cx="648px"
                  cy="49%"
                  r="340"
                />
                <circle
                  id="circle15"
                  className="circle15 steap"
                  cx="648px"
                  cy="49%"
                  r="420"
                />
                <circle
                  id="circle16"
                  className="circle16 steap"
                  cx="648px"
                  cy="49%"
                  r="500"
                />
                <circle
                  id="circle17"
                  className="circle17 steap"
                  cx="648px"
                  cy="49%"
                  r="580"
                />
                <circle
                  id="circle18"
                  className="circle18 steap"
                  cx="648px"
                  cy="49%"
                  r="660"
                />
              </svg>
              <div
                id="slide1"
                className={curpage === 1 ? "slide1 up1" : "slide1"}
              ></div>
              <div
                id="slide2"
                className={curpage === 2 ? "slide2 up1" : "slide2"}
              ></div>
              <div
                id="slide3"
                className={curpage === 3 ? "slide3 up1" : "slide3"}
              ></div>
              <div
                id="slide4"
                className={curpage === 4 ? "slide4 up1" : "slide4"}
              ></div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
