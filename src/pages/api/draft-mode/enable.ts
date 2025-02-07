import type { APIRoute } from "astro";
import { validatePreviewUrl } from '@sanity/preview-url-secret';
import { createSanityClient } from '@back/lib/client';

export const GET: APIRoute = async ({ request }) => {
  if (!import.meta.env.SANITY_API_READ_TOKEN) {
    return new Response("Preview mode missing token", { status: 401 });
  }

  const client = createSanityClient().withConfig({
    token: import.meta.env.SANITY_API_READ_TOKEN,
  });

  try {
    const { isValid, redirectTo = "/" } = await validatePreviewUrl(client, request.url);

    if (!isValid) {
      return new Response("Invalid secret", { status: 401 });
    }

    return new Response(null, {
      status: 307,
      headers: {
        Location: redirectTo,
        'Set-Cookie': 'sanity_preview=true; Path=/; HttpOnly; SameSite=Lax',
      },
    });
  } catch (err) {
    console.error('Error validating preview URL:', err);
    return new Response("Error validating preview URL", { status: 500 });
  }
};