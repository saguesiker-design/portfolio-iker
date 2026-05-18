export default function Home() {
  const technologies = [
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "GitHub",
    "Vercel",
    "OpenAI",
    "Automation",
  ];

  const projects = [
    {
      title: "NautiChart Learn",
      description:
        "Plataforma educativa para navegación costera con cartas náuticas digitales interactivas.",
      result: "Proyecto único dentro del sector marítimo.",
    },
    {
      title: "AI Automation",
      description:
        "Automatización de procesos empresariales usando inteligencia artificial.",
      result: "Ahorro de tiempo y escalabilidad.",
    },
    {
      title: "Portfolio Platform",
      description:
        "Portfolio profesional desarrollado con Next.js y desplegado en Vercel.",
      result: "Marca personal digital.",
    },
  ];

  return (
    <main className="min-h-screen text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-lg border-b border-zinc-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-lg">Iker.dev</h1>

          <div className="flex gap-6 text-sm">
            <a href="#projects" className="hover:text-blue-400 transition">
              Projects
            </a>

            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>

            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-40 pb-24">
        <p className="text-blue-400 mb-4">
          AI Developer • Maritime Innovation • Automation
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Building scalable digital products with AI
        </h1>

        <p className="text-xl text-gray-400 max-w-2xl mb-10">
          Desarrollo productos digitales, automatización y soluciones
          tecnológicas enfocadas en inteligencia artificial y sector marítimo.
        </p>

        <div className="flex flex-wrap gap-4">

          {/* BOTÓN VIEW PROJECTS */}
          <a
            href="#projects"
            className="bg-white px-6 py-3 rounded-xl font-medium hover:opacity-80 transition"
            style={{ color: "black" }}
          >
            View Projects
          </a>

          {/* BOTÓN CONTACT */}
          <a
            href="#contact"
            className="border border-gray-700 px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
          >
            Contact Me
          </a>

        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="max-w-6xl mx-auto px-6 py-24"
      >
        <h2 className="text-4xl font-bold mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hover:border-blue-500 transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {project.description}
              </p>

              <p className="text-blue-400 text-sm">
                {project.result}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-12">
          Tech Stack
        </h2>

        <div className="flex flex-wrap gap-4">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="bg-zinc-800 px-5 py-3 rounded-xl text-gray-300"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-24"
      >
        <h2 className="text-4xl font-bold mb-8">
          Why Work With Me?
        </h2>

        <p className="text-gray-400 max-w-3xl text-lg leading-relaxed">
          Combino desarrollo web, inteligencia artificial y conocimiento
          marítimo para crear productos en nichos donde casi nadie está
          innovando.
        </p>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-6 py-24"
      >
        <h2 className="text-4xl font-bold mb-8">
          Let’s Build Something
        </h2>

        <p className="text-gray-400 mb-8 max-w-2xl">
          Si quieres colaborar en proyectos digitales, IA o automatización.
        </p>

        <a
          href="mailto:sagues.iker@iesnautica.cat"
          className="bg-white px-6 py-3 rounded-xl font-medium hover:opacity-80 transition"
          style={{ color: "black" }}
        >
          Contact Me
        </a>
      </section>

    </main>
  );
}