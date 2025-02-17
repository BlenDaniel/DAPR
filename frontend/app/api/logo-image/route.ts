// app/api/logo-image/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const logoImageData = {
    src: "/assets/photo.jpg",
  };
  return NextResponse.json(logoImageData);
}
