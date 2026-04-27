import { FaLinkedin, FaInstagram, FaEnvelope, FaGithub} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-10 px-6 relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-black -z-10"></div>

      <div className="max-w-6xl mx-auto text-center">

        {/* Name */}
        <h2 className="text-2xl font-bold text-white mb-3">
          Smrutilisha Maharana
        </h2>

        {/* About Line */}
        <p className="text-gray-400 mb-6">
          Frontend Developer | React Developer | IoT Enthusiast
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-6">

          <a
            href="https://www.linkedin.com/in/smrutilisha-maharana-21119b294"
            target="_blank"
            className="text-white text-2xl hover:text-blue-400 hover:scale-125 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Smrutilisha-Maharana"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-gray-400 hover:scale-125 transition duration-300"
      >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/zeesha_n_54"
            target="_blank"
            className="text-white text-2xl hover:text-pink-400 hover:scale-125 transition duration-300"
          >
            <FaInstagram />
          </a>

          <a
            href="mailto:Smrutilisham@gmail.com"
            className="text-white text-2xl hover:text-purple-400 hover:scale-125 transition duration-300"
          >
            <FaEnvelope />
          </a>

        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          © 2026 Smrutilisha Maharana | All Rights Reserved
        </p>

      </div>

    </footer>
  );
}