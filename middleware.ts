import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/api/entries/")) {
    const id = request.nextUrl.pathname.replace("/api/entries/", "");
    console.log({ id });
    const checkMongoIDRegExp = new RegExp("^[0-9a-fA-F]{24}$");
    if (!checkMongoIDRegExp.test(id)) {
      /* const url = request.nextUrl.clone();
      url.pathname = "/api/bad-request";
      url.search = `?message=${id} no es un ID de Mongo válido`;
      return NextResponse.rewrite(url); */
      return new NextResponse(
        JSON.stringify({
          ok: false,
          mensaje: `${id} no es un ID de Mongo válido`,
        }),
        { status: 400, headers: { "content-type": "application/json" } }
      );
    }
  }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/api/:path*", "/api/entries/:path*"],
};
