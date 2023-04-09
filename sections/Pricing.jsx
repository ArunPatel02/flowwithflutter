import React from "react";
import styles from "../styles/portfolio.module.css";
import PricingSvg from "../asserts/pricing.svg";
import PricingCard from "../components/PricingCard";

const Pricing = () => {
  return (
    <div className="bg-[#26282f]" name="pricing">
      <div className={styles.heading}>Pricing</div>
      <div className="flex flex-col items-center text-center mt-8 px-5 text-5xl text-white gap-2 font-bold font-[Merriweather,serif]">
        <span className="flex relative">
          <span>Affordable pricing</span>{" "}
          <PricingSvg
            viewBox="0 0 42 46"
            className="absolute -top-4 -right-8 w-[2.625rem] h-[2.875rem] "
          />{" "}
        </span>
        <span>for FlutterFlow & Flutter projects</span>
      </div>
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-1 sm:grid-cols-1 gap-8 max-w-[1200px] m-auto px-8 mt-16 items-center">
        <PricingCard
          heading="Launch"
          subheading="Best if you have your UI designs ready and need to jump-start development in FlutterFlow"
          price=" 45 - 50"
          points={[
            "Mobile and web application development",
            "Visual code editing",
            "Cloud hosting and deployment",
            "E-commerce integration",
            "Third-party integrations",
            "User authentication and management",
            "Analytics and monitoring",
            "Troubleshooting and bug fixing",
            "Code review and optimization",
            "Custom development",
            "Performance tuning",
            "Maintenance and updates",
            "Migration services"
          ]}
          isPopular={true}
        />
      </div>
    </div>
  );
};

export default Pricing;
