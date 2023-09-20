import React, { useLayoutEffect, useRef } from "react";
import mob1 from "../asserts/mob1.png";
import mob2 from "../asserts/mob2.png";
import mob3 from "../asserts/mob3.png";
import mob4 from "../asserts/mob4.png";

const Hero = () => {
  const sectionContainer = useRef();
  const customMobileWrapper1 = useRef();
  const customMobileWrapper2 = useRef();
  const headingWrapper = useRef();

  useLayoutEffect(() => {
    const setHeroSecHeight = () => {
      //   console.log(window.innerHeight, window.innerWidth);
      let height1 = getComputedStyle(
        customMobileWrapper1.current
      ).getPropertyValue("height");
      let height2 = getComputedStyle(
        customMobileWrapper2.current
      ).getPropertyValue("height");
      let height3 = getComputedStyle(headingWrapper.current).getPropertyValue(
        "height"
      );
      //   console.log(
      //     parseInt(height1.split("px")[0]),
      //     parseInt(height2.split("px")[0]) + 128
      //   );
      let requireHeight = Math.max(
        parseInt(height1.split("px")[0]),
        parseInt(height2.split("px")[0]) + 128
      );
      console.log(requireHeight);
      if (window.innerWidth < 640) {
        sectionContainer.current.style.height =
          String(requireHeight + parseInt(height3.split("px")[0]) - 100) + "px";
        sectionContainer.current.style.overflow = "hidden";
      } else {
        sectionContainer.current.style.height =
          String(requireHeight + 100) + "px";
        sectionContainer.current.style.removeProperty("overflow");
      }
    };
    setHeroSecHeight();
    window.addEventListener("resize", setHeroSecHeight);

    return () => {
      window.removeEventListener("resize", setHeroSecHeight);
    };
  }, []);

  return (
    <div className="bg-[#efeff4]" name="topMain">
      <div
        className="h-[190vh] flex flex-col sm:flex-row"
        ref={sectionContainer}
      >
        <div
          className="ml-[4.5rem] mr-12 h-screen flex-[0] sm:flex-[0.4] mt-28 sm:mt-0 sticky top-0"
          ref={headingWrapper}
        >
          <div className="text-[3.2rem] text-[#26282f] font-[Merriweather,serif] flex flex-col justify-center h-full">
            <h1 className="text-[3.25rem] tracking-[-1px] font-bold leading-[1.25]">
              <span>
                We build{" "}
                <span className="text-[#e19dfa] text-[3.25rem]">scalable </span>{" "}
                and{" "}
                <span className="text-[#e19dfa] text-[3.25rem]">
                  responsive softwares
                </span>
              </span>
              <span> in less time.</span>
            </h1>
            <p className="text-[1.125rem] font-medium mt-6 font-[Manrope,sans-serif]">
              We are a team of
              <span className="ml-[6px] font-semibold">
                experienced and talented software developers
              </span>
              who offer a wide range of services to businesses of all sizes. We
              specialize in developing{" "}
              <span className="ml-[6px] font-semibold">
                custom software solutions{" "}
              </span>
              that meet the specific needs of our clients.We specially use
              Nocode tools for minimizing the time.
            </p>

            <p className="text-[1.125rem] font-bold mt-8 font-[Manrope,sans-serif]">
              Our services include:
            </p>
            <ul className="text-[1.025rem] font-medium mt-1 ml-6 font-[Manrope,sans-serif] list-disc">
              <li> Mobile app development and Flutterflow.</li>
              <li>Web development</li>
              <li>Desktop application development</li>
              <li>Software maintenance and suppor</li>
            </ul>
          </div>
        </div>
        <div className="flex-[0] sm:flex-[0.6]">
          <div className="flex gap-1 rotate-[0deg] justify-center mt-14">
            <div className="flex flex-col gap-3" ref={customMobileWrapper1}>
              <img src={mob1.src} className="w-[288px]" />
              <img src={mob2.src} className="w-[288px]" />
            </div>
            <div
              className="flex flex-col gap-1 translate-y-24 sm:translate-y-32"
              ref={customMobileWrapper2}
            >
              <img src={mob3.src} className="w-[288px]" />
              <img src={mob4.src} className="w-[288px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
