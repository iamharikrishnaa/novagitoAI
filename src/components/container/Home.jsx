import React from "react";
import hero from "../../assets/hero.png";
import { logos } from "../../Data";
import { motion } from "framer-motion";
const Home = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <div className="section" id="home">
      <div className="md:flex items-center justify-center">
        <div>
          {/* <div className="font-bold text-xs text-Teal mb-4">
            {" "}
            your e-learning partner
          </div> */}
          <div className="sm:text-[4.5rem] text-IndianRed text-[1.825rem] font-bold">
            REINVENT YOUR <br /> BUSINESS
          </div>
          <div className="font-bold text-xs text-Teal mb-4">
            {" "}
            with Your Data and AI using our expertise
          </div>
          <p className="text-sm leading-7 text-gray max-w-sm">
            Embark on a journey of business evolution, where the fusion of your
            data and AI, coupled with our expert guidance, propels you towards
            unparalleled growth.
          </p>
          <div className="mt-6 border w-fit">
            <button className="px-6 py-3 font-bold text-IndianRed hover:text-black rounded-lg mr-4 text-sm">
              Learn More
            </button>
            {/* <button className="px-6 py-3 font-bold border border-solid border-gray rounded-lg text-sm">
              Discover
            </button> */}
          </div>
        </div>
        <div className="md:w-[60%]">
          <img src={hero} alt="" />
        </div>
      </div>
      <div>
        <p className="text-center text-xl">
          We collaborate with{" "}
          <span className="text-Teal">
            100+ leading universities ans companies
          </span>
        </p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex items-center justify-center flex-wrap gap-8 p-2 md:w-full sm:w-[170%] xs:w-[340%] w-[480%] animate-slide"
        >
          {logos.map((logo, index) => (
            <motion.div variants={item} className="w-28" key={index}>
              <img src={logo} alt="" className="w-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
