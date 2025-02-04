export { renderers } from '../../../renderers.mjs';

const GET = async ({ request }) => {
  console.log("Desactivando modo borrador");
  return new Response(null, {
    status: 307,
    headers: {
      Location: "/",
      "Set-Cookie": "sanity_preview=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly; SameSite=Lax"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
