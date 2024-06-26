import React from "react";
// import styles from "../../styles/portfolio.module.css";
// import PricingSvg from "../../asserts/pricing.svg";
import FAQCard from "../components/FAQCard";

const FAQ = () => {
  const fullExperience = () => {
    const dateStart = new Date("2023/04/01");
    const dateEnd = new Date();
    let fulldiff =
      (dateEnd.getFullYear() - dateStart.getFullYear() - 1) * 12 +
      11 -
      dateStart.getMonth() +
      dateEnd.getMonth();
    let dif = (fulldiff / 12).toFixed(1);
    console.log(dif);
    return dif > 0 ? dif : 0;
  };

  return (
    <div className="bg-[#08072D] pb-36" name="faq">
      <div className="flex flex-col items-center text-center pt-[60px] pb-20 px-5 text-4xl text-white gap-2 font-bold font-[Merriweather,serif]">
        <span>Examples of USP</span>
      </div>
      <div className="max-w-4xl px-5 m-auto shadow-[0 10px 15px -10px rgba(31,32,34,.1)] faqWrapper flex flex-col gap-8">
        <div className="bg-[#fff] rounded-3xl font-[Manrope,sans-serif]">
          <div className="list-none cursor-pointer p-6 flex gap-5 items-center justify-between ">
            <span className="text-xl font-semibold text-[#1f2022] ">
              Here are a few examples of unique selling propositions (USPs) that
              you may want to consider for your software freelancing company:
            </span>
          </div>
          <div className="p-3 pl-10 pr-8 pt-1 pb-10 text-[#797c83] font-[Varela,sans-serif] text-[1.1rem] leading-[145%]">
            <ul className="list-disc flex flex-col gap-3">
              <li>
                We use Nocode Tools to make software in less time and in
                affordable price.
              </li>
              <li>
                We specialize in developing custom software solutions for
                businesses in the [industry] industry.
              </li>
              <li>
                We offer a fixed-price software development model, so you know
                exactly how much your project will cost before you start.
              </li>
              <li>
                We have a team of dedicated developers who will work on your
                project from start to finish.
              </li>
              <li>
                We offer a 100% satisfaction guarantee on all of our work.
              </li>
              <li>
                By including a USP in your description, you can help to
                differentiate your company from the competition and make it more
                attractive to potential clients.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col items-center text-center pt-44 pb-20 px-5 text-4xl text-white gap-2 font-bold font-[Merriweather,serif]">
        <span>Frequently Asked Questions</span>
      </div>
      <div className="max-w-xl px-5 m-auto shadow-[0 10px 15px -10px rgba(31,32,34,.1)] faqWrapper flex flex-col gap-8">
        <FAQCard question="How long does it take to develop a Flutterflow app?" answer="The timeline for developing a Flutterflow app can vary based on the complexity of the app and the availability of our development team. We will provide you with an estimated timeline once we have more information about your project requirements" />
        <FAQCard question="How many members you have in your team?" answer="At the moment, our FlutterFlow & Flutter freelance team consists of few trusted and experienced members who can be brought in on an as-needed basis for larger or more complex projects. This approach allows us to be flexible and scale up or down as required, depending on the project's size and scope. We believe in the power of teamwork and collaboration, and we work closely with our clients to ensure clear communication and a shared vision for the project." />
        <FAQCard question="How much experience does your team have in Flutter and Flutterflow?" answer={<>We have been working as a FlutterFlow freelancer team for the past <span className="text-[#ce4bfd]">{1.5 + parseFloat(fullExperience())} years</span>, and We have a total of <span className="text-[#ce4bfd]">{3 +  parseFloat(fullExperience())} years</span> of experience with Flutter development. During this time, We have worked on a variety of projects, ranging from simple mobile apps to complex, custom-built solutions for clients in various industries. We have a deep understanding of the Flutter framework and the FlutterFlow platform, and We are proficient in developing and designing high-quality Flutter applications. As a freelancer, We prioritize communication and collaboration with our clients, and We work closely with them to ensure that their vision is realized in the final product. Our experience allows us to provide valuable insights and suggestions to clients, making their projects even more successful.</>} />
        <FAQCard question="How do you handle project payments?" answer={<>
          we believe in creating a transparent and professional payment process to build trust with our clients. Here is a breakdown of how we handle project payments for our clients:
          <br/>
          <br/>
        <span className="text-[#ce4bfd] font-medium">Initial Payment </span>
        : When a client hires us for a project, we request an initial payment to cover the upfront costs of the project that will be <span className="text-[#ce4bfd]">25%</span> of the project cost.
        <br/>
        <br/>
        <span className="text-[#ce4bfd] font-medium">Intermediate Payment </span>
        : When we completed half of the project then we will give a progress report to client and give client an idea that how we will processed in future, we request an Intermediate payment to cover <span className="text-[#ce4bfd]">25%</span> of the project cost.
        <br/>
        <br/>
        <span className="text-[#ce4bfd] font-medium">Final Payment </span>
        : Once the project is completed, we send the client a final invoice for the remaining balance. After receiving payment, we close out the project.
        </>} />
      </div> */}
    </div>
  );
};

export default FAQ;
