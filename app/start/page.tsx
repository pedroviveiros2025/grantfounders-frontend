"use client"

import { useState } from "react"

export default function Start() {
  const [company, setCompany] = useState("")
  const [project, setProject] = useState("")
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const runScan = async () => {
    setLoading(true)
    setResult(null)

    const res = await fetch(process.env.NEXT_PUBLIC_ENGINE_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-engine-secret": process.env.NEXT_PUBLIC_ENGINE_SECRET!,
      },
      body: JSON.stringify({
        org_id: company,
        project_id: project,
        agency: "NIH",
        phase: "I",
        kernel: "SBIR_PHASE_I_CLINICAL_KERNEL",
        kernel_version: "v1.1",
        inputs: {
          company_name: company,
          project_name: project,
          involves_humans: true,
          is_clinical_trial: true,
          has_irb_partner: true,
          has_preliminary_data: true,
        },
      }),
    })

    const data = await res.json()
    setResult(data)
    setLoading(false)
  }

  return (
    <main className="min-h-screen p-10 max-w-xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold">NIH Clinical Readiness Scan™</h2>

      <input
        placeholder="Company name"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="w-full p-3 rounded bg-black/30"
      />

      <input
        placeholder="Project name"
        value={project}
        onChange={(e) => setProject(e.target.value)}
        className="w-full p-3 rounded bg-black/30"
      />

      <button
        onClick={runScan}
        className="w-full bg-gf-green p-3 rounded-xl text-black font-bold"
      >
        {loading ? "Scanning..." : "Run NIH Clinical Readiness Scan™"}
      </button>

      {result && (
        <pre className="bg-black/40 p-4 rounded text-xs overflow-auto">
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </main>
  )
}
