"use client"

import { useState } from "react"

export default function Start() {
  const [company, setCompany] = useState("")
  const [project, setProject] = useState("")
  const [agency, setAgency] = useState("NIH")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)

  async function runScan() {
    setLoading(true)
    const res = await fetch("/api/run", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ company, project, agency })
    })
    const data = await res.json()
    setResult(data)
    setLoading(false)
  }

  return (
    <main className="min-h-screen p-10 max-w-xl mx-auto space-y-4">
      <h2 className="text-3xl font-bold">NIH Clinical Readiness Scan™</h2>

      <input onChange={e => setCompany(e.target.value)} placeholder="Company name" className="w-full p-3 rounded bg-black/30"/>
      <input onChange={e => setProject(e.target.value)} placeholder="Project name" className="w-full p-3 rounded bg-black/30"/>

      <button onClick={runScan} className="w-full bg-gf-green p-3 rounded-xl text-black font-bold">
        {loading ? "Running..." : "Run NIH Clinical Readiness Scan™"}
      </button>

      {result && (
        <pre className="bg-black/40 p-4 rounded-xl text-xs overflow-auto">
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </main>
  )
}
