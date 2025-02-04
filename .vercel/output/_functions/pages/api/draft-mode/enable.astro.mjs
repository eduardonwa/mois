import { validatePreviewUrl } from '@sanity/preview-url-secret';
import { c as createSanityClient } from '../../../chunks/client_Chv-MGxd.mjs';
export { renderers } from '../../../renderers.mjs';

const GET = async ({ request }) => {
  const client = createSanityClient().withConfig({
    token: "skhe28sXyY1qE1TikcueRmuB5xp1qLoqWTTYhMl3nu9vjC5qQhdMagDUIJB6AIcFHU66R3Vxb1dJ4YCdtIQMLSB12ein7bqA0Wc6vOviSZzJUbNrxM77Mw499YAGSRMjjODlK6iBK9xvg8a2nospmgoTBua7lh9arCPQIe9PHgiv7T7Ami7S"
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
        "Set-Cookie": "sanity_preview=true; Path=/; HttpOnly; SameSite=Lax"
      }
    });
  } catch (err) {
    console.error("Error validating preview URL:", err);
    return new Response("Error validating preview URL", { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
