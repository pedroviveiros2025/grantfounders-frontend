export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-xl text-center space-y-6">
        <h1 className="text-5xl font-bold text-gf-blue">GrantFounders™</h1>

        <p className="opacity-80 text-lg">
          The Federal Funding Intelligence OS.
        </p>

        <p className="opacity-70 text-sm">
          Instantly verify your NIH SBIR/STTR readiness and receive a compliance correction roadmap.
        </p>

        <a
          href="/start"
          className="inline-block bg-gf-blue px-6 py-3 rounded-xl text-black font-bold"
        >
          Start NIH Readiness Scan →
        </a>
      </div>
    </main>
  )
}
