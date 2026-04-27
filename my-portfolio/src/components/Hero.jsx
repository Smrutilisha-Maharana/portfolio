import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaInstagram, FaEnvelope, FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden text-center">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-black -z-10"></div>

      <div className="max-w-4xl mx-auto">

        {/* Profile Image */}
        <img
          src="/logo.png"
          alt="Profile"
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 mx-auto rounded-full border-4 border-purple-400 shadow-lg shadow-purple-500/40 mb-4 sm:mb-6 hover:scale-110 transition duration-500"
        />

        {/* Name */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
          Smrutilisha Maharana
        </h1>

        {/* Typing Animation */}
        <div className="mt-2">
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              2000,
              "React Developer",
              2000,
              "IoT Enthusiast",
              2000,
              "Creative Designer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-sm sm:text-lg md:text-xl text-blue-300"
          />
        </div>

        {/* Resume Button */}
        <div className="mt-6 sm:mt-8">
          <a
            href="/resume.pdf"
            download
            className="px-5 py-2 sm:px-6 sm:py-2 md:px-8 md:py-3 text-sm sm:text-base bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:scale-110 hover:shadow-purple-500/40 transition duration-500"
          >
            Download Resume
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 sm:gap-6 mt-6 sm:mt-8">

          <a
            href="https://www.linkedin.com/in/smrutilisha-maharana-21119b294"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl sm:text-2xl hover:text-blue-400 hover:scale-125 transition duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/Smrutilisha-Maharana"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl sm:text-2xl hover:text-gray-400 hover:scale-125 transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.instagram.com/zeesha_n_54"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl sm:text-2xl hover:text-pink-400 hover:scale-125 transition duration-300"
          >
            <FaInstagram />
          </a>

          <a
            href="mailto:Smrutilisham@gmail.com"
            className="text-white text-xl sm:text-2xl hover:text-purple-400 hover:scale-125 transition duration-300"
          >
            <FaEnvelope />
          </a>

        </div>

      </div>
    </section>
  );
}