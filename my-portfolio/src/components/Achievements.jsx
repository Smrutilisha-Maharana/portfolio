import React from "react";
import Tilt from "react-parallax-tilt";
import { FaCertificate } from "react-icons/fa";

const achievementsData = [
  {
    title: "software Testing",
    org: "NPTEL",
    year: "2025",
    image: "/nptel.png",
    certificate: "/certificates/software-testing.pdf",
    glow: "from-yellow-400 to-orange-500",
  },
  {
    title: "DSA using JAVA",
    org: "NPTEL",
    year: "2025",
    image: "/nptel.png",
    certificate: "/certificates/dsa-java.pdf",
    glow: "from-blue-400 to-indigo-600",
  },
  {
    title: "Introduction to industry 4.0 and industrial internet of things",
    org: "NPTEL",
    year: "2024",
    image: "/nptel.png",
    certificate: "/certificates/industry4.pdf",
    glow: "from-green-400 to-emerald-600",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 px-6 relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-black -z-10"></div>

      <h2 className="text-4xl font-bold text-white text-center mb-16">
        Achievements & Certificates
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">

        {achievementsData.map((item, index) => (
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
                className={`absolute inset-0 bg-gradient-to-r ${item.glow} opacity-0 group-hover:opacity-20 blur-2xl transition duration-500 rounded-3xl`}
              ></div>

              {/* Icon */}
             <div className="relative mb-4 group-hover:scale-110 transition duration-500">
                <img
                    src={item.image}
                    alt="NPTEL Logo"
                    className="w-16 h-16 object-contain"
                />
            </div>

              <h3 className="relative text-xl font-bold text-white mb-2">
                {item.title}
              </h3>

              <p className="relative text-gray-300 mb-1">
                {item.org}
              </p>

              <p className="relative text-purple-300">
                {item.year}
              </p>
              <a
                 href={item.certificate}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="relative mt-4 inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm px-4 py-2 rounded-lg hover:scale-105 transition duration-300"
            >
             View Certificate
             </a>

            </div>
          </Tilt>
        ))}

      </div>
    </section>
  );
};

export default Achievements;