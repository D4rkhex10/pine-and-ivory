import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") || "";
  
  // List of blocked keywords in User-Agent
  const blockedAgents = [
    "python-requests",
    "curl",
    "wget",
    "libwww-perl",
    "Scrapy",
    "Go-http-client",
    "Java",
    "axios",
    "aiohttp",
    "httpx",
  ];

  const isBlocked = blockedAgents.some((agent) =>
    userAgent.toLowerCase().includes(agent.toLowerCase())
  );

  if (isBlocked) {
    return new NextResponse(
      JSON.stringify({ error: "Access denied", message: "Suspicious activity detected." }),
      { status: 403, headers: { "content-type": "application/json" } }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes) - We might want to protect API too, but let's keep it safe for now or include it?
     *   Actually, protecting API is good.
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
