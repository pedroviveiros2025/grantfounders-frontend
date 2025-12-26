import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // kernel deterministic mock real (engine)
    const rules = [
      { key: "has_sam", label: "SAM / UEI", weight: 15 },
      { key: "has_irb", label: "IRB", weight: 15 },
      { key: "has_dms_plan", label: "DMS Plan", weight: 15 },
      { key: "has_milestones", label: "Milestones", weight: 15 },
      { key: "has_clinical_validation", label: "Clinical Validation", weight: 20 },
      { key: "has_ip_strategy", label: "IP Strategy", weight: 20 }
    ];

    let score = 0;
    const fixes:any[] = [];

    for (const r of rules) {
      const ok = body.inputs?.[r.key] === true;
      if (ok) score += r.weight;
      else fixes.push({
        rule_key: r.key,
        severity: "FAIL",
        message: `${r.label} missing`
      });
    }

    const band = score >= 80 ? "GREEN" : score >= 60 ? "ORANGE" : "RED";

    return NextResponse.json({
      agency: "NIH",
      phase: "I",
      score,
      band,
      fixes,
      kernel_signature: "GF-SOVEREIGN-KERNEL-v1"
    });

  } catch (e:any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
