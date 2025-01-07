import React from "react";
import footerImg from "../../assets/footer.svg";
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center footer bg-base-200 text-base-content p-10 mt-20">
      <div className=" flex flex-row items-center justify-between gap-x-10">
        <aside>
          <img src={footerImg} alt="" />
        </aside>
        <nav className=" space-y-5">
          <h1 className="footer-title font-bold text-4xl">Contact Us</h1>
          <div className="flex items-center gap-3">
            <div className="bg-primaryColor p-1 rounded-full w-[40px] h-[40px] flex justify-center items-center">
              <FaPhone className="text-xl"></FaPhone>
            </div>
            <p className="text-lg font-bold">+123-456-7890</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-primaryColor p-1 rounded-full w-[40px] h-[40px] flex justify-center items-center">
              <IoMdMail className="text-xl"></IoMdMail>
            </div>
            <p className="text-lg font-bold">hello@fradelandspies.com</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-primaryColor p-1 rounded-full w-[40px] h-[40px] flex justify-center items-center">
              <FaLocationDot className="text-xl"></FaLocationDot>
            </div>
            <p className="text-lg font-bold">
              123 Anywhere ST., Any City, ST 12345
            </p>
          </div>
        </nav>
      </div>
      <p>
        Copyright © {new Date().getFullYear()} - All right reserved by Fradel
        and Spies Ltd
      </p>
    </footer>
  );
};

export default Footer;
