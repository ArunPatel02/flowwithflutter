import React from "react";
import footerimage from "../asserts/footer.png";

const Footer = () => {
  return (
    <footer className="px-8 py-14 bg-[#26282f]">
      <div className="flex justify-center">
        <img src={footerimage.src} className="h-14" />
      </div>
      <p className="max-w-[280px] text-center text-white m-auto mt-6 font-[Manrope,sans-serif] text-[1rem] leading-normal">
        Unlimited FlutterFlow Development, the cost-effective way!
      </p>

      <p className="text-[#d6dae0] text-[0.875rem] text-center mt-24 font-[Manrope,sans-serif]">
        © 2023 FlutterFul Studio
        <br />
        All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
