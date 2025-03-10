import React from "react";
import { PROJECTS } from "../data";
import { motion } from "framer-motion";

const projectVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 50,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
      bounce: 1,
    },
  },
};

const Projects = () => {
  return (
    <section className="px-6 py-10 my-10" id="work">
      <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-5">
        Projects
      </h1>
      <div className="h-1 w-20 mb-8 bg-white"></div>

      <div className="flex flex-wrap items-center justify-center gap-6">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="relative rounded-lg overflow-hidden w-[350px] h-[350px] lg:w-[470px] lg:h-[375px] xl:w-[550px] xl:h-[400px] transition"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={projectVariants}
          >
            <img
              src={project.image}
              alt={project.name}
              className="absolute inset-0 w-full h-full object-fit transition-opacity duration-300"
            />
            <div className="absolute z-20 bottom-0 left-0 w-full h-[60%] px-6 flex flex-col justify-evenly backdrop-blur-lg bg-black/40 text-white">
              <h2 className="text-3xl font-bold mb-2">{project.name} |</h2>
              <p className="text-lg">{project.description}</p>
              <div className="flex gap-3 my-2">
                {project.techs.map((tech) => (
                  <img src={tech} alt="" className="size-5" />
                ))}
              </div>
              <div className="flex gap-5 mt-2">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener norefferer"
                  className="bg-white text-stone-900 rounded-2xl py-2 px-2 w-33 text-sm text-center hover:bg-black hover:text-white transition-all duration-400"
                >
                  View on Github
                </a>
                <a
                  href={project.vercelLink}
                  target="_blank"
                  rel="noopener norefferer"
                  className="bg-white text-stone-900 rounded-2xl py-2 px-2 w-33 text-sm text-center hover:bg-black hover:text-white transition-all duration-400"
                >
                  Open project
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
