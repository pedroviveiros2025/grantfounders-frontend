"use client";
import { useState } from "react";

export default function Start() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  async function runScan() {
    setLoading(true);

    const payload = {
      org_id: "brainbehavior_inc",
      project_id: "brainbehavior_clinical_readiness",
      agency: "NIH",
      phase: "I",
      kernel: "SBIR_PHASE_I_CLINICAL_KERNEL",
      kernel_version: "v1.1",
      inputs: {
        is_us_company: true,
        is_small_business: true,
        has_uei: false,
        has_sam_registration: false,
        has_irb: true,
        irb_status: "approved",
        has_dms_plan: false,
        dms_plan_type: "none",
        has_clinical_validation: false,
        clinical_stage: "preclinical",
        has_milestones: false,
        milestones_defined: false,
        has_ip_strategy: true,
        ip_type: "provisional",
        has_pi: true,
        pi_experience_level: "experienced",
        has_sbir_budget: false
      }
    };

    const res = await fetch("/api/scan", { method: "POST", body: JSON.stringify(payload) });
    const json = await res.json();
    setResult(json);
    setLoading(false);
  }

  return (
    <main className="min-h-screen p-10 text-white max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">NIH Clinical Readiness Scan™</h1>

      <button onClick={runScan} className="bg-green-500 text-black p-4 rounded-xl font-bold w-full mb-6">
        {loading ? "Scanning..." : "Run NIH Clinical Readiness Scan™"}
      </button>

      {result && (
        <div className="bg-black/40 rounded-xl p-6 space-y-3">
          <div>Score: <b>{result.score}</b></div>
          <div>Band: <b className="text-yellow-400">{result.band}</b></div>
          <div>Gate Pass: <b>{String(result.gate_pass)}</b></div>

          <h3 className="text-xl mt-4">Fixes Required:</h3>
          {result.fixes.map((f:any,i:number)=>(
            <div key={i} className="border-b border-white/10 py-2">
              <b>{f.severity}</b> — {f.message}
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
