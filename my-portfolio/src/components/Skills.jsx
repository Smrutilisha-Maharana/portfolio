import React from "react";
import Tilt from "react-parallax-tilt";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJava,
  FaPython,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiC
} from "react-icons/si";

const skills = [
  { name: "C", icon: <SiC size={60} color="#A8B9CC" />, glow: "from-gray-400 to-gray-600" },
  { name: "Java", icon: <FaJava size={60} color="#f89820" />, glow: "from-orange-400 to-red-500" },
  { name: "Python", icon: <FaPython size={60} color="#FFD43B" />, glow: "from-blue-400 to-yellow-400" },
  { name: "HTML", icon: <FaHtml5 size={60} color="#E34F26" />, glow: "from-orange-400 to-red-500" },
  { name: "CSS", icon: <FaCss3Alt size={60} color="#1572B6" />, glow: "from-blue-400 to-indigo-500" },
  { name: "JavaScript", icon: <SiJavascript size={60} color="#F7DF1E" />, glow: "from-yellow-300 to-yellow-500" },
  { name: "React", icon: <FaReact size={60} color="#61DBFB" />, glow: "from-cyan-400 to-blue-500" },
  { name: "Tailwind", icon: <SiTailwindcss size={60} color="#38BDF8" />, glow: "from-teal-300 to-cyan-500" },
  { name: "MongoDB", icon: <SiMongodb size={60} color="#4DB33D" />, glow: "from-green-400 to-emerald-600" },
  { name: "NodeJS", icon: <FaNodeJs size={60} color="#68A063" />, glow: "from-green-400 to-lime-500" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-black -z-10"></div>

      <h2 className="text-4xl font-bold text-white text-center mb-16">
        My Creative Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            scale={1.08}
            transitionSpeed={1200}
            className="rounded-3xl"
          >
            <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center hover:shadow-2xl transition duration-500 group">

              {/* Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${skill.glow} opacity-0 group-hover:opacity-20 blur-2xl transition duration-500 rounded-3xl`}
              ></div>

              {/* Icon */}
              <div className="relative mb-4 group-hover:scale-110 transition duration-500 font-bold">
                {skill.icon}
              </div>

              {/* Text */}
              <p className="relative text-white text-lg font-semibold">
                {skill.name}
              </p>

            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Skills;