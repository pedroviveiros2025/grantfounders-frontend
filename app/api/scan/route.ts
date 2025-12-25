import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const res = await fetch(process.env.NEXT_PUBLIC_ENGINE_URL!, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-engine-secret": process.env.ENGINE_SECRET!
    },
    body: JSON.stringify(body)
  });

  const data = await res.json();
  return NextResponse.json(data);
}
