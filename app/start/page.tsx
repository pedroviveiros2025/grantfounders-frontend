"use client"

import { useState } from "react"

export default function Start() {
  const [company, setCompany] = useState("")
  const [project, setProject] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)

  async function runScan() {
    setLoading(true)
    setResult(null)

    const res = await fetch(process.env.NEXT_PUBLIC_ENGINE_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_ENGINE_SECRET}`,
      },
      body: JSON.stringify({
        company,
        project,
        agency: "NIH",
        scan_type: "clinical_readiness",
      }),
    })

    const data = await res.json()
    setResult(data)
    setLoading(false)
  }

  return (
    <main className="min-h-screen p-10 max-w-xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">NIH Clinical Readiness Scan™</h1>

      <input
        value={company}
        onChange={e => setCompany(e.target.value)}
        placeholder="Company name"
        className="w-full p-3 rounded bg-black/30"
      />

      <input
        value={project}
        onChange={e => setProject(e.target.value)}
        placeholder="Project name"
        className="w-full p-3 rounded bg-black/30"
      />

      <button
        onClick={runScan}
        disabled={loading}
        className="w-full bg-gf-green p-4 rounded-xl text-black font-bold"
      >
        {loading ? "Scanning..." : "Run NIH Clinical Readiness Scan™"}
      </button>

      {result && (
        <pre className="bg-black/40 p-4 rounded text-sm overflow-auto">
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </main>
  )
}
