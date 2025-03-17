// app/api/site-metadata/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const siteMetadata = {
    title: "John Smith - Architecture Engineer",
    logoTitle: "John Smith",
    description:
      "Professional Architecture Engineer with extensive experience in design and construction",
    keywords: "architecture, engineering, construction, design, projects",
    author: "John Smith",
  };
  return NextResponse.json(siteMetadata);
}
