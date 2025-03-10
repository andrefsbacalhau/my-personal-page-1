import React from "react";
import { motion } from "framer-motion";
import { HERO_CONTENT } from "../data";
import myPic from "../assets/myPic.png";

const textVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 2, ease: "easeOut" } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const imageVariants = {
  hidden: { opacity: 0, x: 200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.5, duration: 1.2, ease: "easeInOut" },
  },
};

const Hero = () => {
  return (
    <section>
      <div className="relative z-10 min-h-screen flex flex-wrap flex-col md:flex-row items-center justify-center text-white mx-5 lg:px-10">
        <motion.div
          className="w-full md:w-1/2 p-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-2xl md-text-3xl lg:text-5xl my-14 mt-24"
            variants={textVariants}
          >
            {HERO_CONTENT.greeting}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl lg:-text-4xl mb-4"
            variants={textVariants}
          >
            {HERO_CONTENT.introduction}
          </motion.p>
          <motion.p
            className="text-xl md:text-2xl lg:-text-4xl mb-4"
            variants={textVariants}
          >
            {HERO_CONTENT.description}
          </motion.p>
          <motion.a
            className="bg-stone-50 text-stone-900 p-3 lg:p-4 mt-8 inline-block rounded-2xl border border-transparent hover:bg-black hover:text-white hover:border-white transition-colors duration-300"
            href={HERO_CONTENT.resumeLink}
            download
            variants={textVariants}
          >
            {HERO_CONTENT.resumeLinkText}
          </motion.a>
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 p-8"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <img
            src={myPic}
            alt="André's Profile Pic"
            width={550}
            height={550}
            className="rounded-full hover:scale-[1.02] transition-scale duration-1200"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
