import { NextResponse } from "next/server";

export async function GET(_: Request, { params }: { params: { proxy: string[] } }) {
  return NextResponse.json({ message: "Proxy placeholder", target: params.proxy });
}
