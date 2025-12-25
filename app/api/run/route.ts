import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const payload = await req.json();

  const res = await fetch(process.env.NEXT_ENGINE_URL!, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-engine-secret": process.env.ENGINE_SECRET!   // ← segredo REAL
    },
    body: JSON.stringify(payload)
  });

  const json = await res.json();
  return NextResponse.json(json);
}
