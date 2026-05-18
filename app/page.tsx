export default function Home() {
  const technologies = [
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "GitHub",
    "Vercel",
    "OpenAI",
  ];

  const projects = [
    {
      title: "NautiChart Learn",
      description:
        "Plataforma educativa para practicar navegación costera con cartas náuticas digitales e inteligencia artificial.",
    },
    {
      title: "Portfolio Digital",
      description:
        "Portfolio profesional desarrollado con Next.js, desplegado en Vercel y conectado con GitHub.",
    },
    {
      title: "Future AI SaaS",
      description:
        "Próximo proyecto enfocado en automatización empresarial e inteligencia artificial escalable.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      
      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <p className="text-gray-400 mb-4">
          Developer • AI • Maritime Innovation
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Building digital products with AI & maritime innovation
        </h1>

        <p className="text-xl text-gray-400 max-w-2xl mb-10">
          Desarrollo aplicaciones web, automatizaciones y herramientas
          enfocadas en inteligencia artificial, educación marítima y productos
          digitales escalables.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:opacity-80 transition"
          >
            Ver proyectos
          </a>

          <a
            href="#contact"
            className="border border-gray-700 px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
          >
            Contacto
          </a>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="max-w-6xl mx-auto px-6 py-24"
      >
        <h2 className="text-4xl font-bold mb-12">
          Proyectos Destacados
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-zinc-900 p-6 rounded-2xl hover:scale-105 transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-12">
          Tecnologías
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
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-8">
          Sobre mí
        </h2>

        <p className="text-gray-400 max-w-3xl text-lg leading-relaxed">
          Soy estudiante de CFGS y desarrollador de proyectos digitales.
          Mi enfoque está en combinar desarrollo web, inteligencia artificial
          y conocimientos del sector marítimo para crear soluciones diferentes
          y con potencial real de negocio.
        </p>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-6 py-24"
      >
        <h2 className="text-4xl font-bold mb-8">
          Contacto
        </h2>

        <p className="text-gray-400 mb-8 max-w-2xl">
          Si quieres colaborar en proyectos web, automatización
          o ideas relacionadas con inteligencia artificial,
          puedes contactarme.
        </p>

        <a
          href="mailto:tuemail@gmail.com"
          className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:opacity-80 transition"
        >
          Envíame un email
        </a>
      </section>

    </main>
  );
}