import React from "react";
import Tilt from "react-parallax-tilt";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    institute: "GIFT AUTONOMOUS COLLEGE BHUBANESWER",
    year: "2023 - 2027",
    marks: "8.5 CGPA",
    glow: "from-blue-400 to-indigo-600",
  },
  {
    degree: "Higher Secondary (12th)",
    institute: "VISWASS HIGHER SECONDARY SCHOOL BHUBANESWER",
    year: "2021 - 2023",
    marks: "81%",
    glow: "from-pink-400 to-purple-600",
  },
  {
    degree: "Secondary (10th)",
    institute: "GOVT.HIGH SCHOOL GANGAPADA KHORDHA",
    year: "2020 - 2021",
    marks: "72%",
    glow: "from-green-400 to-emerald-600",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-black -z-10"></div>

      <h2 className="text-4xl font-bold text-white text-center mb-16">
        My Education
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">

        {educationData.map((edu, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.05}
            transitionSpeed={1000}
            className="rounded-3xl"
          >
            <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition duration-500 group">

              {/* Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${edu.glow} opacity-0 group-hover:opacity-20 blur-2xl transition duration-500 rounded-3xl`}
              ></div>

              {/* Icon */}
              <div className="relative mb-4 text-white group-hover:scale-110 transition duration-500">
                <FaGraduationCap size={60} />
              </div>

              {/* Degree */}
              <h3 className="relative text-xl font-bold text-white mb-2">
                {edu.degree}
              </h3>

              {/* Institute */}
              <p className="relative text-gray-300 mb-2">
                {edu.institute}
              </p>

              {/* Year */}
              <p className="relative text-gray-400 mb-2">
                {edu.year}
              </p>

              {/* Marks */}
              <p className="relative text-lg font-semibold text-purple-300">
                Marks: {edu.marks}
              </p>

            </div>
          </Tilt>
        ))}

      </div>
    </section>
  );
};

export default Education;