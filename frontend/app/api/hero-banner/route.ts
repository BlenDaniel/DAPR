// app/api/hero-banner/route.ts

import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function GET() {
  try {
    // Read the JSON file
    const filePath = path.join(
      process.cwd(),
      "public",
      "data",
      "hero-banner.json"
    );
    const fileContents = await fs.readFile(filePath, "utf8");
    const data = JSON.parse(fileContents);

    // Return the data as JSON
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error reading hero banner data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
