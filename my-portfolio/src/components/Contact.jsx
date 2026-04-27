import React from "react";
import Tilt from "react-parallax-tilt";
import { FaLinkedin, FaInstagram, FaEnvelope, FaGithub } from "react-icons/fa";

const contacts = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={60} color="#0A66C2" />,
    link: "https://www.linkedin.com/in/smrutilisha-maharana-21119b294",
    glow: "from-blue-400 to-indigo-600",
  },
  {
  name: "GitHub",
  icon: <FaGithub size={60} color="#ffffff" />,
  link: "https://github.com/Smrutilisha-Maharana",
  glow: "from-gray-400 to-slate-700",
 },
  {
    name: "Instagram",
    icon: <FaInstagram size={60} color="#E4405F" />,
    link: "https://www.instagram.com/zeesha_n_54",
    glow: "from-pink-400 to-purple-600",
  },
  {
    name: "Email",
    icon: <FaEnvelope size={60} color="#EA4335" />,
    link: "mailto:Smrutilisham@gmail.com",
    glow: "from-red-400 to-orange-500",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-black -z-10"></div>

      <h2 className="text-4xl font-bold text-white text-center mb-16">
        Contact Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">

        {contacts.map((contact, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            scale={1.08}
            transitionSpeed={1200}
            className="rounded-3xl"
          >
            <a href={contact.link} target="_blank" rel="noreferrer">
              <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10 flex flex-col items-center justify-center hover:shadow-2xl transition duration-500 group cursor-pointer">

                {/* Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${contact.glow} opacity-0 group-hover:opacity-20 blur-2xl transition duration-500 rounded-3xl`}
                ></div>

                {/* Icon */}
                <div className="relative mb-4 group-hover:scale-110 transition duration-500">
                  {contact.icon}
                </div>

                {/* Text */}
                <p className="relative text-white text-xl font-semibold">
                  {contact.name}
                </p>

              </div>
            </a>
          </Tilt>
        ))}

      </div>
    </section>
  );
};

export default Contact;