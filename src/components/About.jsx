import React from "react";
import { ABOUT_CONTENT, STRENGTHS, WEAKNESSES } from "../data";
import { motion } from "framer-motion";
import { RiCheckFill, RiCloseFill } from "@remixicon/react";
import { LuCheck } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

const About = () => {
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="px-6 py-10" id="about">
      <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-5">
        About
      </h1>
      <div className="h-1 w-20 mb-8 bg-white"></div>

      <div className="max-w-4xl mx-auto px-5">
        {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            className="text-xl md:text-2xl lg:text-4xl mb-10 leading-relaxed text-justify"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={textVariants}
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
      <div className="flex flex-col justify-center md:flex-row mx-auto gap-15 px-4 my-20">
        <div className="flex flex-col">
          <h2 className="text-4xl mb-10">Pros</h2>
          <div>
            {STRENGTHS.points.map((strength, index) => (
              <div className="flex items-baseline gap-2">
                <LuCheck className="text-green-500 " />
                <p key={index} className="text-2xl mb-6 w-full text-justify">
                  {strength}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-4xl mb-10">Cons</h2>
          <div>
            {WEAKNESSES.points.map((weakness, index) => (
              <div className="flex items-baseline gap-2">
                <IoClose className="text-red-500" />
                <p key={index} className="text-2xl mb-6 w-full text-justify">
                  {weakness}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
