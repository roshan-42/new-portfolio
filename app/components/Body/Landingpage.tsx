"use client";
import React, { useRef, useState } from "react";
import Navbar from "../Navbar/Navbar";
import profile from "@/public/assets/profile.jpg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { RiContactsBook2Line } from "react-icons/ri";
import { FaGraduationCap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import Link from "next/link";

import { TiLocation } from "react-icons/ti";
import { FaDownload } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import { IoDocumentTextOutline } from "react-icons/io5";
import Image from "next/image";
import Resume from "./Resume";
import Skills from "./Skills";
import Works from "./Works";
import About from "./About";
import Contact from "./Contact";
import { motion } from "framer-motion";

const Landingpage = () => {
  const scrollRef = useRef(null);
  const [show, setShow] = useState(0);
  return (
    <div className=" h-[80rem] lg:h-[60rem]  w-screen flex justify-center overflow-hidden ">
      <div className="w-[85%] ">
        {/* <Navbar /> */}
        <div className=" flex flex-col lg:grid lg:grid-cols-7 gap-4 mt-14 sm:mt-28 ">
          {/* =================First Grid======================== */}
          <motion.div
            initial={{ opacity: 0, translateX: -50 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className="relative col-span-2 bg-white flex flex-col items-center rounded-xl gap-3 p-5"
          >
            <Image
              className="z-10 absolute border-red-200 border-2 -top-28 h-48 w-48 rounded-lg"
              src={profile}
              alt=""
            />
            <p className="text-2xl font-semibold mt-28">Roshan Acharya</p>
            <p className="bg-gray-200 p-1 px-2 rounded-lg">React Developer</p>
            <div className="flex gap-2">
              <Link href={"https://github.com/roshan-42"} target="blank">
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                  whileTap={{ scale: 0.8 }}
                >
                  <FaGithub />
                </motion.button>
              </Link>
              <Link
                href={"https://www.linkedin.com/in/roshanacharya42/"}
                target="blank"
              >
                {" "}
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                  whileTap={{ scale: 0.8 }}
                >
                  <FaLinkedin color="007AB5" />
                </motion.button>
              </Link>
              <Link
                href={
                  "https://www.instagram.com/roshanacharya042?igsh=Z3Y4a3d1NWo3MW9n&utm_source=qr"
                }
                target="blank"
              >
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                  whileTap={{ scale: 0.8 }}
                >
                  <AiFillInstagram color="#EE2A7B" size={20} />
                </motion.button>
              </Link>
            </div>
            {/* =====================Second part=============== */}
            <div className="bg-gray-200 rounded-xl w-[100%] flex flex-col gap-3 p-3">
              {/* =========Phone================ */}
              <div className="flex  gap-2">
                <div className="bg-white drop-shadow-md p-2 rounded-lg">
                  <IoPhonePortraitOutline />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-xs">Phone</p>
                  <p className="text-xs sm:text-md">9863503450</p>
                </div>
              </div>
              {/* ================Email=================== */}
              <div className="flex items-center gap-2">
                <div className="bg-white drop-shadow-md p-2 rounded-lg">
                  <MdEmail />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-xs">Email</p>
                  <p className="text-xs sm:text-md">
                    roshanacharya207@gmail.com
                  </p>
                </div>
              </div>
              {/* =====================Location====================== */}
              <div className="flex  gap-2">
                <div className="bg-white drop-shadow-md p-2 rounded-lg">
                  <TiLocation />
                </div>
                <div className="flex flex-col ">
                  <p className="text-xs">Location</p>
                  <p className="text-xs sm:text-md">Kathmandu, Nepal</p>
                </div>
              </div>
            </div>
            <a href="./assets/CV.pdf" download="MyExampleDoc" target="_blank">
              <motion.button
                whileHover={{ scale: 1.2 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                whileTap={{ scale: 0.8 }}
                className="bg-red-400 p-2 hover:bg-white hover:border-2 hover:border-red-400 hover:text-black rounded-lg flex gap-2 items-center text-white"
              >
                <FaDownload />
                Download CV
              </motion.button>
            </a>
          </motion.div>
          {/* =================== Second Grid ========================== */}
          <motion.div
            initial={{ opacity: 0, translateX: 50 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className="col-span-5   rounded-xl "
          >
            <div className="flex  gap-5  justify-end px-3 text-gray-800">
              <div className=" flex gap-5  bg-white p-4 px-14 text-lg rounded-lg overflow-scroll sm:overflow-hidden">
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => setShow(0)}
                  className={`${
                    show == 0 ? "bg-red-400 text-white" : "bg-gray-200"
                  }  flex flex-col items-center bg-gray-200 p-2 rounded-md w-24 hover:bg-red-400 hover:text-white transition-all`}
                >
                  <FaUser /> About
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => setShow(1)}
                  className={`${
                    show == 1 ? "bg-red-400 text-white" : "bg-gray-200"
                  }  flex flex-col items-center bg-gray-200 p-2 rounded-md w-24 hover:bg-red-400 hover:text-white transition-all`}
                >
                  <IoDocumentTextOutline /> Resume
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => setShow(2)}
                  className={`${
                    show == 2 ? "bg-red-400 text-white" : "bg-gray-200"
                  }  flex flex-col items-center bg-gray-200 p-2 rounded-md w-24 hover:bg-red-400 hover:text-white transition-all`}
                >
                  <MdOutlineWork /> Works
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => setShow(3)}
                  className={`${
                    show == 3 ? "bg-red-400 text-white" : "bg-gray-200"
                  }  flex flex-col items-center bg-gray-200 p-2 rounded-md w-24 hover:bg-red-400 hover:text-white transition-all`}
                >
                  <GiAutoRepair /> Skills
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => setShow(4)}
                  className={`${
                    show == 4 ? "bg-red-400 text-white" : "bg-gray-200"
                  }  flex flex-col items-center bg-gray-200 p-2 rounded-md w-24 hover:bg-red-400 hover:text-white transition-all`}
                >
                  <RiContactsBook2Line /> Contact
                </motion.button>
              </div>
            </div>
            {/* ====================Second part=========================== */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="bg-white mt-5 p-5 rounded-lg h-fit sm:h-[50vh] overflow-y-scroll"
            >
              {/* =================About Me================== */}
              <div className={` ${show == 0 ? "block" : "hidden"} `}>
                <About />
              </div>
              {/* =========================Resume============================ */}
              <div className={` ${show == 1 ? "block" : "hidden"} relati `}>
                <Resume />
              </div>
              {/* =============================Works=============== */}
              <div className={` ${show == 2 ? "block" : "hidden"} `}>
                <Works />
              </div>
              {/* ============================Skills=================== */}
              <div className={` ${show == 3 ? "block" : "hidden"} `}>
                <Skills />
              </div>
              {/* ============================Contact=================== */}
              <div className={` ${show == 4 ? "block" : "hidden"} `}>
                <Contact />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
