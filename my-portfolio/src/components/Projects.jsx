import React from "react";
import Tilt from "react-parallax-tilt";

const projects = [
  {
    title: "Resume Builder",
    desc: "A modern resume builder built using React and Tailwind CSS with creative UI design.",
    tech: ["React", "Tailwind CSS"],
  },
  {
    title: "Portfolio Website",
    desc: "A creative personal portfolio to showcase skills, projects and achievements.",
    tech: ["React", "JavaScript", "CSS"],
  },
  {
    title: "Snake Game",
    desc: "A classic snake game developed using Python with score tracking functionality.",
    tech: ["Python"],
  },
  {
    title: "IoT Soil Moisture Monitoring System",
    desc: "Smart agriculture system using Arduino to monitor soil moisture levels.",
    tech: ["C/C++", "Arduino IDE", "IoT"],
  },
  {
    title: "Calculator App",
    desc: "A simple calculator built using Java for performing basic arithmetic operations.",
    tech: ["Java"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-black -z-10"></div>

      <h2 className="text-4xl font-bold text-white text-center mb-16">
        My Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">

        {projects.map((project, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.05}
            transitionSpeed={1000}
            className="rounded-3xl"
          >
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:shadow-2xl hover:shadow-purple-500/30 transition duration-500 group">

              <h3 className="text-2xl font-bold text-white mb-3">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-5">
                {project.desc}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </Tilt>
        ))}

      </div>
    </section>
  );
};

export default Projects;