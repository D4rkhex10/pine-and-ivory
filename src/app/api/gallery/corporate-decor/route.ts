import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";

export async function GET() {
  try {
    const dir = path.join(process.cwd(), "public", "services", "corporate-decor-gallery");
    const files = fs.readdirSync(dir);
    const images = files
      .filter((f) => /\.(png|jpe?g|gif|webp)$/i.test(f))
      .map((f) => `/services/corporate-decor-gallery/${encodeURIComponent(f)}`);

    if (images.length > 0) {
      return NextResponse.json({ images }, { status: 200 });
    }
  } catch {}

  const fallback = [
    "/services/corporate.jpg",
    "/services/furniture.jpg",
    "/services/corp.jpg",
  ];
  return NextResponse.json({ images: fallback }, { status: 200 });
}
