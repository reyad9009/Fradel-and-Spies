import React from "react";
import footerImg from "../../assets/footer.svg";
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center footer bg-base-200 text-base-content p-10 mt-20">
      <div className=" flex lg:flex-row flex-col items-center justify-between lg:gap-x-10">
        <aside>
          <img src={footerImg} alt="" />
        </aside>
        <nav className=" lg:space-y-5 space-y-2">
          <h1 className="footer-title font-bold lg:text-4xl text-xl">Contact Us</h1>
          <div className="flex items-center gap-3">
            <div className="bg-primaryColor lg:p-1 p-2 rounded-full lg:w-[40px] lg:h-[40px] flex justify-center items-center">
              <FaPhone className="lg:text-xl"></FaPhone>
            </div>
            <p className="lg:text-lg font-bold">+123-456-7890</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-primaryColor  lg:p-1 p-2 rounded-full lg:w-[40px] lg:h-[40px] flex justify-center items-center">
              <IoMdMail className="lg:text-xl"></IoMdMail>
            </div>
            <p className="lg:text-lg font-bold">hello@fradelandspies.com</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-primaryColor  lg:p-1 p-2 rounded-full lg:w-[40px] lg:h-[40px] flex justify-center items-center">
              <FaLocationDot className="lg:text-xl"></FaLocationDot>
            </div>
            <p className="lg:text-lg font-bold">
              123 Anywhere ST., Any City, ST 12345
            </p>
          </div>
        </nav>
      </div>
      <p className="text-center">
        Copyright © {new Date().getFullYear()} - All right reserved by Fradel
        and Spies Ltd
      </p>
    </footer>
  );
};

export default Footer;
