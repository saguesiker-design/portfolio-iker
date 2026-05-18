export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <section className="max-w-6xl mx-auto px-6 py-32">

        <p className="text-gray-400 mb-4">
          Portfolio Digital
        </p>

        <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-6">
          Iker Sagués
        </h1>

        <p className="text-xl text-gray-400 max-w-2xl mb-10">
          Estudiante de CFGS y creador de proyectos digitales,
          aplicaciones web y herramientas con inteligencia artificial.
        </p>

        <div className="flex gap-4">

          <button className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:opacity-80 transition">
            Ver proyectos
          </button>

          <button className="border border-gray-700 px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">
            Contacto
          </button>

        </div>

      </section>

    </main>
  )
}