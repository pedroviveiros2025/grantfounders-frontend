"use client";
import { useEffect, useState } from "react";

export default function Cockpit() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const d = sessionStorage.getItem("gf_result");
    if (d) setData(JSON.parse(d));
  }, []);

  if (!data) return <div className="p-10">No scan data.</div>;

  return (
    <main className="p-12 space-y-8">
      <h1 className="text-4xl font-bold text-gf-blue">Federal Cockpit™</h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-black/40 p-6 rounded-xl">
          <h3>Agency</h3>
          <b>{data.agency} — Phase {data.phase}</b>
        </div>
        <div className="bg-black/40 p-6 rounded-xl">
          <h3>Band</h3>
          <b className="text-yellow-400">{data.band}</b>
        </div>
        <div className="bg-black/40 p-6 rounded-xl">
          <h3>Score</h3>
          <span className="text-5xl">{data.score}</span>
        </div>
      </div>

      <h2 className="text-2xl font-bold">Federal Gate</h2>

      <div className="space-y-3">
        {data.fixes.map((f:any) => (
          <div key={f.rule_key} className="bg-black/30 p-4 rounded-lg">
            <b className="text-red-400">{f.severity}</b> — {f.message}
          </div>
        ))}
      </div>
    </main>
  );
}
