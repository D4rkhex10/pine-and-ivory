import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";

export async function GET() {
  try {
    const dir = path.join(process.cwd(), "public", "services", "smart-home-gallery");
    const files = fs.readdirSync(dir);
    const images = files
      .filter((f) => /\.(png|jpe?g|gif|webp)$/i.test(f))
      .map((f) => `/services/smart-home-gallery/${encodeURIComponent(f)}`);

    if (images.length > 0) {
      return NextResponse.json({ images }, { status: 200 });
    }
  } catch {}

  const fallback = [
    "/services/smarthome-solutions-background.jpg",
    "/services/furniture.jpg",
    "/services/corporate.jpg",
  ];
  return NextResponse.json({ images: fallback }, { status: 200 });
}
