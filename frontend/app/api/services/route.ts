import { NextResponse } from "next/server";

export async function GET() {
  // Dummy data for services
  const services = [
    {
      id: "architectural-design",
      title: "Architectural Design",
      icon: ["fas", "draw-polygon"],
      description:
        "Creating innovative and functional designs that meet client needs while adhering to building codes and regulations.",
    },
    {
      id: "structural-engineering",
      title: "Structural Engineering",
      icon: ["fas", "laptop-code"],
      description:
        "Ensuring buildings are structurally sound and can withstand environmental forces through precise calculations and analysis.",
    },
    {
      id: "project-management",
      title: "Project Management",
      icon: ["fas", "edit"],
      description:
        "Overseeing projects from conception to completion, managing timelines, budgets, and resources effectively.",
    },
    {
      id: "sustainable-design",
      title: "Sustainable Design",
      icon: ["fas", "bullhorn"],
      description:
        "Implementing eco-friendly solutions and energy-efficient systems to minimize environmental impact.",
    },
  ];

  return NextResponse.json(services);
}
