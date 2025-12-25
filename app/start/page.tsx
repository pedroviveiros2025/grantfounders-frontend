export default function Start() {
  return (
    <main className="min-h-screen p-10 max-w-xl mx-auto space-y-4">
      <h2 className="text-3xl font-bold">Federal Readiness Bot™</h2>

      <input placeholder="Company name" className="w-full p-3 rounded bg-black/30"/>
      <input placeholder="Project name" className="w-full p-3 rounded bg-black/30"/>

      <select className="w-full p-3 rounded bg-black/30">
        <option>NIH</option>
        <option>NSF</option>
        <option>DoD</option>
      </select>

      <button className="w-full bg-gf-green p-3 rounded-xl text-black font-bold">
        Run Federal Readiness
      </button>
    </main>
  )
}
