export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <section className="max-w-5xl mx-auto">

        <h1 className="text-6xl font-bold mb-4">
          Iker Sagués Zafra
        </h1>

        <p className="text-xl text-gray-400 mb-12">
          Estudiante de CFGS y creador de proyectos digitales.
        </p>

        <div className="grid gap-6">

          <div className="border border-gray-700 rounded-2xl p-6">
            <h2 className="text-3xl font-semibold mb-2">
              Portfolio Digital
            </h2>

            <p className="text-gray-400">
              Web creada con Next.js para mostrar proyectos digitales y habilidades.
            </p>
          </div>

          <div className="border border-gray-700 rounded-2xl p-6">
            <h2 className="text-3xl font-semibold mb-2">
              Apps con IA
            </h2>

            <p className="text-gray-400">
              Desarrollo de aplicaciones utilizando inteligencia artificial.
            </p>
          </div>

        </div>

      </section>
    </main>
  )
}