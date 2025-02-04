import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ request }) => {
  console.log("Desactivando modo borrador");
  return new Response(null, {
    status: 307,
    headers: {
      Location: '/',
      'Set-Cookie': 'sanity_preview=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly; SameSite=Lax',
    },
  });
};