import React from "react";
import styles from "../styles/portfolio.module.css";

const Workflow = () => {
  return (
    <div name="workflow" className="pb-24 bg-[#08072ded]">
      <div className={styles.heading}>
        Design + Development + Publishing within 28 days
      </div>
      <div className="flex flex-col items-center text-center mt-8 px-5 text-5xl text-[#ffff] gap-2 font-bold font-[Merriweather,serif]">
        <span>We bring together</span>
        <span>everything needed to</span>
        <span className="text-[#A371FF]">launch your product</span>
      </div>
      <p className="max-w-[600px] px-5 m-auto mt-6 text-center text-[1.2rem] font-light text-[#ffff] font-[Merriweather,serif]">
        Save cost when you build your product with our bespoke and affordable
        <strong className="ml-2 font-semibold"> Nocode </strong> pricing with no
        lock-ins.
      </p>
    </div>
  );
};

export default Workflow;
