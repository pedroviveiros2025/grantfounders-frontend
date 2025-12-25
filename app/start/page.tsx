"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Start() {
  const router = useRouter();
  const [company, setCompany] = useState("");
  const [project, setProject] = useState("");
  const [loading, setLoading] = useState(false);

  async function runScan() {
    setLoading(true);

    const res = await fetch("/api/run", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        org_id: company,
        project_id: project,
        agency: "NIH",
        phase: "I",
        kernel: "SBIR_PHASE_I_CLINICAL_KERNEL",
        kernel_version: "v1.1",
        inputs: {
          has_sam: false,
          has_irb: true,
          has_dms_plan: false,
          has_milestones: false,
          has_clinical_validation: false,
          has_ip_strategy: false
        }
      })
    });

    const json = await res.json();
    sessionStorage.setItem("gf_result", JSON.stringify(json));
    router.push("/cockpit");
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center space-y-6">
      <h1 className="text-4xl font-bold">NIH Clinical Readiness Scan™</h1>

      <input value={company} onChange={e => setCompany(e.target.value)} placeholder="Company Name" className="w-96 p-3 rounded bg-black/30"/>
      <input value={project} onChange={e => setProject(e.target.value)} placeholder="Project Name" className="w-96 p-3 rounded bg-black/30"/>

      <button onClick={runScan} disabled={loading} className="w-96 bg-gf-green p-4 rounded-xl text-black font-bold">
        {loading ? "Scanning..." : "Run NIH Clinical Readiness Scan™"}
      </button>
    </main>
  );
}
