export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start p-8">
      <header className="w-full max-w-5xl flex items-center justify-between py-6">
        <h1 className="text-4xl font-title text-midnight">NIXLUNA</h1>
        <nav>
          <a className="mr-4" href="/products">Boutique</a>
          <a className="header-cta" href="/products">Shop Now</a>
        </nav>
      </header>

      <section className="w-full max-w-5xl mt-12">
        <div className="bg-midnight text-snow rounded-lg p-10">
          <h2 className="text-3xl font-title">Élégance. Pureté. Désir.</h2>
          <p className="mt-4">Sélection de beauté et mode inspirée des icônes.</p>
        </div>
      </section>
    </main>
  )
}
