import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
]);

export default clerkMiddleware((auth, req) => {
  if (!isPublicRoute(req)) {
    auth().protect();
  }
});

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next (Next.js internals)
     * - static files (images, css, etc)
     */
    "/((?!_next|.*\\..*).*)",
    "/(api|trpc)(.*)",
  ],
};
