// app/api/site-metadata/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const sectionTitle = {
    title: "Client Testimonials",
    subtitle: "What Our Clients Say About Us",
  };

  return NextResponse.json(sectionTitle);
}
