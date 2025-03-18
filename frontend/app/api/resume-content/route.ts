import { NextResponse } from "next/server";

export async function GET() {
  // In a real app, this would likely come from a database or CMS
  const resumeSummary = {
    content:
      "<p>As an Architecture Engineer with over 20 years of experience, I've built a career focused on innovative design, sustainable solutions, and effective project management. Below you'll find my professional experience, education, and key skills.</p>",
  };

  return NextResponse.json(resumeSummary);
}
