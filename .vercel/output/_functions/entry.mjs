import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_B64gx2zH.mjs';
import { manifest } from './manifest_BHlR7NgC.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/draft-mode/disable.astro.mjs');
const _page2 = () => import('./pages/api/draft-mode/enable.astro.mjs');
const _page3 = () => import('./pages/post/_slug_.astro.mjs');
const _page4 = () => import('./pages/studio/_---params_.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/draft-mode/disable.ts", _page1],
    ["src/pages/api/draft-mode/enable.ts", _page2],
    ["src/pages/post/[slug].astro", _page3],
    ["node_modules/@sanity/astro/dist/studio/studio-route.astro", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "af094241-84d4-4358-98a2-68c651a60f30",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
