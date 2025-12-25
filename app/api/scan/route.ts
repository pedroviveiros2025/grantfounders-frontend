import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { company, project } = await req.json()

  const res = await fetch(process.env.ENGINE_URL!, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-engine-secret": process.env.ENGINE_SECRET!
    },
    body: JSON.stringify({
      org_id: company.toLowerCase().replace(/\s+/g, "_"),
      project_id: project.toLowerCase().replace(/\s+/g, "_"),
      inputs: {
        company,
        project,
        has_irb: false,
        has_dms_plan: false,
        has_milestones: false
      }
    })
  })

  const data = await res.json()
  return NextResponse.json(data)
}
