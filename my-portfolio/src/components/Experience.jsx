import React from "react";
import Tilt from "react-parallax-tilt";
import { FaBriefcase } from "react-icons/fa";

const experienceData = [
  {
    role: "IoT and Data analytics Intern",
    company: "NIT Rourkela",
    duration: "June 2025 - July 2025",
    desc: "Worked on Soil Moisture Monitoring System using Arduino IDE and sensors.",
    glow: "from-green-400 to-emerald-600",
  },
  {
    role: "Core JAVA",
    company: "OCAC Bhubaneswar",
    duration: "June 2024 - July 2024",
    desc: "Worked on Arithmetic calculator on java.",
    glow: "from-green-400 to-emerald-600",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-black -z-10"></div>

      <h2 className="text-4xl font-bold text-white text-center mb-16">
        Internship Experience
      </h2>

      <div className="max-w-4xl mx-auto space-y-12">

        {experienceData.map((exp, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.05}
            transitionSpeed={1000}
          >
            <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition duration-500 group">

              {/* Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${exp.glow} opacity-0 group-hover:opacity-20 blur-2xl transition duration-500 rounded-3xl`}
              ></div>

              {/* Icon */}
              <div className="relative mb-4 text-white group-hover:scale-110 transition duration-500">
                <FaBriefcase size={60} />
              </div>

              <h3 className="relative text-2xl font-bold text-white">
                {exp.role}
              </h3>

              <p className="relative text-gray-300">
                {exp.company}
              </p>

              <p className="relative text-purple-300 mb-3">
                {exp.duration}
              </p>

              <p className="relative text-gray-400">
                {exp.desc}
              </p>

            </div>
          </Tilt>
        ))}

      </div>
    </section>
  );
};

export default Experience;