// app/api/site-metadata/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const siteMetadata = {
    title: "My Website",
  };
  return NextResponse.json(siteMetadata);
}
