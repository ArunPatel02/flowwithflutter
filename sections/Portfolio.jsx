import React, { useEffect } from "react";
import styles from "../styles/portfolio.module.css";
import mobileImage from "../asserts/portfolio/mob.png";
import img1 from "../asserts/portfolio/image2.jpg";
import img2 from "../asserts/portfolio/image3.jpg";
import img3 from "../asserts/portfolio/image4.jpg";
import img4 from "../asserts/portfolio/image5.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Image from "next/image";
// ..

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      disable: window.innerWidth > 600 ? false : true,
    });
  }, []);

  return (
    <div className="bg-[#08072D] pt-8 pb-8" name="portfolio">
      <div className={styles.heading}>Our recent projects</div>
      <div className="max-w-[550px] px-5 m-auto text-center font-ce mt-9 text-6xl text-[#ffff] font-bold font-[Merriweather,serif] leading-[1]">
        Examples of what we can do for you
      </div>
      <div
        id="example-anchor"
        className="px-10 flex-col sm:flex-row flex justify-center h-fit gap-3 items-center sm:items-start"
      >
        <div className=" flex flex-col gap-10 sm:gap-24 pt-16 mt-0 sm:mt-10 order-2 sm:order-none">
          <img
            data-aos="fade-left"
            data-aos-offset="500"
            data-aos-duration="500"
            src={img1.src}
            className="w-auto sm:w-[22rem]"
          />
          <img
            data-aos="fade-left"
            data-aos-offset="500"
            data-aos-duration="500"
            src={img2.src}
            className="w-auto sm:w-[22rem]"
          />
        </div>
        <div className="mt-10 order-1 sm:order-none">
          <img src={mobileImage.src} className="w-[31.25rem]" />
        </div>
        <div className="flex flex-col gap-10 sm:gap-24 mt-10 order-3 sm:order-none">
          <img
            data-aos="fade-right"
            data-aos-offset="500"
            data-aos-duration="500"
            src={img3.src}
            className="w-auto sm:w-[22rem]"
          />
          <img
            src={img4.src}
            data-aos="fade-right"
            data-aos-offset="500"
            data-aos-duration="500"
            className="w-auto sm:w-[22rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
