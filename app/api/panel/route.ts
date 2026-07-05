import { getDemoSnapshot } from "@/lib/panel/demo-data";
import type { PanelSnapshot } from "@/lib/panel/types";
import { NextResponse } from "next/server";

export async function GET() {
  const data: PanelSnapshot = getDemoSnapshot();
  return NextResponse.json(data);
}
