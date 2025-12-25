export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="max-w-xl text-center space-y-6">
        <h1 className="text-5xl font-bold text-gf-blue">GrantFounders™</h1>
        <p className="text-lg opacity-80">
          Federal Readiness Intelligence for NIH, NSF, DoD & Government Grants.
        </p>
        <a
          href="/start"
          className="inline-block bg-gf-blue px-6 py-3 rounded-xl text-black font-semibold"
        >
          Check My Federal Readiness →
        </a>
      </div>
    </main>
  )
}
