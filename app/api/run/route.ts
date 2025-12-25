import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const body = await req.json()

  const res = await fetch(process.env.ENGINE_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-engine-secret": process.env.ENGINE_SECRET!
    },
    body: JSON.stringify({
      org_id: "gf_zero",
      project_id: body.project,
      agency: body.agency,
      inputs: body
    })
  })

  const data = await res.json()
  return NextResponse.json(data)
}
