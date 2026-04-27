export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">

      {/* Background same like others */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-black -z-10"></div>

      <div className="max-w-3xl mx-auto text-center">

        {/* Centered Heading */}
        <h2 className="text-4xl font-bold text-white mb-10">
          About Me
        </h2>

        {/* Glass Card */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-lg hover:shadow-purple-500/20 transition duration-500">

          <p className="text-gray-300 leading-relaxed text-lg">
            I am a passionate frontend developer with experience in building 
            responsive and interactive web applications using React, Tailwind CSS 
            and modern JavaScript technologies. I love designing clean UI and 
            improving user experience.
          </p>

        </div>

      </div>

    </section>
  );
}