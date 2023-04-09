import React from "react";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Home.module.css";
import { Link } from "react-scroll";

const Header = () => {
  const [menuOpen, setmenuOpen] = useState(false);
  const handleMenuInactive = () => {
    setmenuOpen(false);
  };
  return (
    <header className="bg-[#efeff4] border-solid border-[#d6dae0] border-b-[1px] fixed top-0 right-0 left-0 z-[10000]">
      <div className="max-w-7xl m-auto flex gap-6 h-full items-center px-10 py-3">
        <Link
          to="topMain"
          smooth={true}
          duration={(dis) => console.log(dis)}
          className="cursor-pointer"
        >
          <img src="/logo.png" className="h-12" />
        </Link>
        <div className="flex flex-grow justify-end md:justify-between items-center">
          <nav className="hidden md:block">
            <ul className="flex h-full items-center">
              <li className="px-5 py-2 text-[1.1rem] font-medium">
                <Link
                  activeClass="active"
                  to="workflow"
                  smooth={true}
                  duration={(dis) => console.log(dis)}
                  className="cursor-pointer text-[#222] duration-200 ease-in-out hover:text-[#4c6aff]"
                >
                  Workflow
                </Link>
              </li>
              <li className="px-5 py-2 text-[1.1rem] font-medium">
                <Link
                  activeClass="active"
                  to="portfolio"
                  smooth={true}
                  duration={(dis) => console.log(dis)}
                  className="cursor-pointer text-[#222] duration-200 ease-in-out hover:text-[#4c6aff]"
                >
                  Portfolio
                </Link>
              </li>
              <li className="px-5 py-2 text-[1.1rem] font-medium">
                <Link
                  activeClass="active"
                  to="pricing"
                  smooth={true}
                  duration={(dis) => console.log(dis)}
                  className="cursor-pointer text-[#222] duration-200 ease-in-out hover:text-[#4c6aff]"
                >
                  Pricing
                </Link>
              </li>
              <li className="px-5 py-2 text-[1.1rem] font-medium">
                <Link
                  activeClass="active"
                  to="faq"
                  smooth={true}
                  duration={(dis) => console.log(dis)}
                  className="cursor-pointer text-[#222] duration-200 ease-in-out hover:text-[#4c6aff]"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>
          <button className="py-2 px-4 bg-[#e19dfa] rounded-[5rem] text-white text-[1rem] font-medium font-[Manrope,sans-serif] ease-in duration-75 hover:opacity-80 hidden md:block ">
            Let&apos;s Talk
          </button>
          <div
            className={`${styles.menuIcon} ${
              menuOpen ? styles.open : ""
            } flex md:hidden`}
            onClick={() => setmenuOpen((ele) => !ele)}
          >
            <div className={styles["menu-icon-line-top"]}></div>
            <div className={styles["menu-icon-line-middle"]}></div>
            <div className={styles["menu-icon-line-bottom"]}></div>
          </div>
        </div>
      </div>
      <nav
        className={`block p-0 h-0 border-solid border-[#d6dae0] overflow-hidden fixed w-full z-[10000] bg-[#efeff4] transition-all duration-500 ${
          menuOpen ? "h-fit p-5 active" : "h-0 p-0"
        } ${styles.menuopen} ${menuOpen ? styles.active : ""} `}
      >
        <ul className="flex flex-col gap-3 h-full items-center">
          <li className="px-5 py-2 text-[1.35rem] sm:text-[1.1rem] font-medium">
            <Link
              activeClass="active"
              to="workflow"
              smooth={true}
              onClick={handleMenuInactive}
              duration={(dis) => console.log(dis)}
              delay={500}
              className="cursor-pointer text-[#222] duration-200 ease-in-out hover:text-[#4c6aff]"
            >
              Workflow
            </Link>
          </li>
          <li className="px-5 py-2 text-[1.35rem] sm:text-[1.1rem] font-medium">
            <Link
              activeClass="active"
              to="portfolio"
              smooth={true}
              onClick={handleMenuInactive}
              duration={(dis) => console.log(dis)}
              delay={500}
              className="cursor-pointer text-[#222] duration-200 ease-in-out hover:text-[#4c6aff]"
            >
              Portfolio
            </Link>
          </li>
          <li className="px-5 py-2 text-[1.35rem] sm:text-[1.1rem] font-medium">
            <Link
              activeClass="active"
              to="pricing"
              smooth={true}
              onClick={handleMenuInactive}
              duration={(dis) => console.log(dis)}
              delay={500}
              className="cursor-pointer text-[#222] duration-200 ease-in-out hover:text-[#4c6aff]"
            >
              Pricing
            </Link>
          </li>
          <li className="px-5 py-2 text-[1.35rem] sm:text-[1.1rem] font-medium">
            <Link
              activeClass="active"
              to="faq"
              smooth={true}
              onClick={handleMenuInactive}
              duration={(dis) => console.log(dis)}
              delay={500}
              className="cursor-pointer text-[#222] duration-200 ease-in-out hover:text-[#4c6aff]"
            >
              FAQ
            </Link>
          </li>
          <li>
            <a className="py-2 px-4 bg-[#e19dfa] rounded-[5rem] text-white text-[1.35rem] sm:text-[1.1rem] font-medium font-[Manrope,sans-serif] ease-in duration-75 hover:opacity-80 ">
              Let&apos; Talk
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
