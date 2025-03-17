import { NextResponse } from "next/server";

export async function GET() {
  // Dummy data for services section
  const sectionTitle = {
    title: "My Expertise",
    subtitle: "Specialized Skills & Services",
  };

  return NextResponse.json(sectionTitle);
}
