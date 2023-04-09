import React from 'react'
import DropIcon from "../asserts/dropicon.svg";

const FAQCard = ({question, answer}) => {
  return (
    <details className="bg-[#fff] rounded-3xl font-[Manrope,sans-serif]">
          <summary className="list-none cursor-pointer p-3 pl-8 flex gap-5 items-center justify-between ">
            <span className="text-xl font-medium ml-2 text-[#1f2022] ">
              {question}
            </span>
            <span className="w-10 h-10 rounded-[50%] bg-[#1f2022] flex justify-center items-center min-w-[2.5rem]">
              <DropIcon className="dropIcon" />
            </span>
          </summary>
          <p className="p-3 pl-8 pr-8 pt-1 pb-10 text-[#797c83] font-[Varela,sans-serif] text-[1rem] leading-[145%]">
            {answer}
          </p>
        </details>
  )
}

export default FAQCard