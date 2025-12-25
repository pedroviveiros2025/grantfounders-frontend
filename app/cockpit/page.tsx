export default function FederalCockpit() {
  return (
    <main className="min-h-screen bg-gf-dark text-white px-10 py-12 space-y-10">

      <header className="space-y-2">
        <h1 className="text-4xl font-bold text-gf-blue">Federal Cockpit™</h1>
        <p className="opacity-80 max-w-3xl">
          This cockpit simulates how U.S. federal agencies evaluate your project for funding.
          You are viewing your private Federal Decision Layer.
        </p>
      </header>

      <section className="grid grid-cols-3 gap-6">

        <div className="bg-black/40 rounded-xl p-6 border border-white/10">
          <h3 className="font-bold text-lg">Agency</h3>
          <p className="mt-2 text-gf-blue">NIH — SBIR Phase I</p>
        </div>

        <div className="bg-black/40 rounded-xl p-6 border border-white/10">
          <h3 className="font-bold text-lg">Project</h3>
          <p className="mt-2">BrainBehavior™</p>
        </div>

        <div className="bg-black/40 rounded-xl p-6 border border-white/10">
          <h3 className="font-bold text-lg">Decision Band</h3>
          <p className="mt-2 text-gf-yellow font-bold text-xl">ORANGE</p>
        </div>

      </section>

      <section className="grid grid-cols-2 gap-10">

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Federal Gate</h2>

          {[
            ["Eligibility", "PASS"],
            ["SAM / UEI", "PENDING"],
            ["IRB", "PASS"],
            ["DMS Plan", "FAIL"],
            ["Milestones", "FAIL"],
            ["Clinical Validation", "PENDING"],
            ["IP Strategy", "PENDING"]
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between bg-black/30 px-4 py-3 rounded-lg">
              <span>{k}</span>
              <span className={
                v === "PASS" ? "text-gf-green" :
                v === "FAIL" ? "text-gf-red" :
                "text-gf-yellow"
              }>{v}</span>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Federal Score</h2>

          <div className="bg-black/40 p-6 rounded-xl border border-white/10 space-y-2">
            <p className="text-6xl font-bold text-gf-yellow">61</p>
            <p className="uppercase tracking-wide opacity-70">Readiness Score</p>
          </div>

          <div className="bg-black/30 p-4 rounded-lg">
            <p>
              BrainBehavior™ is <span className="text-gf-red font-bold">NOT</span> submission-ready for NIH SBIR Phase I.
            </p>
          </div>
        </div>

      </section>

      <section className="pt-10">
        <a href="/start" className="inline-block bg-gf-blue text-black px-8 py-4 rounded-xl font-bold">
          Run New Federal Scan →
        </a>
      </section>

    </main>
  )
}
