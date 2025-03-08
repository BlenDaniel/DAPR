// app/api/site-metadata/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const siteMetadata = [
    {
      id: "string",
      html: "string",
      title: "My Website",
      coverImage: "/assets/photo.jpg",
    },
  ];
  return NextResponse.json(siteMetadata);
}
