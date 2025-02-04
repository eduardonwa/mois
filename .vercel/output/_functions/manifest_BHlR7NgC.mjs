import 'kleur/colors';
import { g as decodeKey } from './chunks/astro/server_DHF89q1R.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Dk2v-qm3.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || undefined,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : undefined,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///root/code/mois/","cacheDir":"file:///root/code/mois/node_modules/.astro/","outDir":"file:///root/code/mois/dist/","srcDir":"file:///root/code/mois/src/","publicDir":"file:///root/code/mois/public/","buildClientDir":"file:///root/code/mois/dist/client/","buildServerDir":"file:///root/code/mois/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/draft-mode/disable","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/draft-mode\\/disable\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"draft-mode","dynamic":false,"spread":false}],[{"content":"disable","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/draft-mode/disable.ts","pathname":"/api/draft-mode/disable","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/draft-mode/enable","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/draft-mode\\/enable\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"draft-mode","dynamic":false,"spread":false}],[{"content":"enable","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/draft-mode/enable.ts","pathname":"/api/draft-mode/enable","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"html,body{margin:0;width:100%;height:100%}\n"}],"routeData":{"route":"/post/[slug]","isIndex":false,"type":"page","pattern":"^\\/post\\/([^/]+?)\\/?$","segments":[[{"content":"post","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/post/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"body{margin:0;padding:0}\n"}],"routeData":{"type":"page","isIndex":false,"route":"/studio/[...params]","pattern":"^\\/studio(?:\\/(.*?))?\\/?$","segments":[[{"content":"studio","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@sanity/astro/dist/studio/studio-route.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"#background[data-astro-cid-mmc7otgs]{position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;filter:blur(100px)}#container[data-astro-cid-mmc7otgs]{font-family:Inter,Roboto,Helvetica Neue,Arial Nova,Nimbus Sans,Arial,sans-serif;height:100%}main[data-astro-cid-mmc7otgs]{height:100%;display:flex;justify-content:center}#hero[data-astro-cid-mmc7otgs]{display:flex;align-items:start;flex-direction:column;justify-content:center;padding:16px}h1[data-astro-cid-mmc7otgs]{font-size:22px;margin-top:.25em}#links[data-astro-cid-mmc7otgs]{display:flex;gap:16px}#links[data-astro-cid-mmc7otgs] a[data-astro-cid-mmc7otgs]{display:flex;align-items:center;padding:10px 12px;color:#111827;text-decoration:none;transition:color .2s}#links[data-astro-cid-mmc7otgs] a[data-astro-cid-mmc7otgs]:hover{color:#4e5056}#links[data-astro-cid-mmc7otgs] a[data-astro-cid-mmc7otgs] svg[data-astro-cid-mmc7otgs]{height:1em;margin-left:8px}#links[data-astro-cid-mmc7otgs] a[data-astro-cid-mmc7otgs].button{color:#fff;background:linear-gradient(83.21deg,#3245ff,#bc52ee);box-shadow:inset 0 0 0 1px #ffffff1f,inset 0 -2px #0000003d;border-radius:10px}#links[data-astro-cid-mmc7otgs] a[data-astro-cid-mmc7otgs].button:hover{color:#e6e6e6;box-shadow:none}pre[data-astro-cid-mmc7otgs]{font-family:ui-monospace,Cascadia Code,Source Code Pro,Menlo,Consolas,DejaVu Sans Mono,monospace;font-weight:400;background:linear-gradient(14deg,#d83333,#f041ff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin:0}h2[data-astro-cid-mmc7otgs]{margin:0 0 1em;font-weight:400;color:#111827;font-size:20px}p[data-astro-cid-mmc7otgs]{color:#4b5563;font-size:16px;line-height:24px;letter-spacing:-.006em;margin:0}code[data-astro-cid-mmc7otgs]{display:inline-block;background:linear-gradient(66.77deg,#f3cddd,#f5cee7) padding-box,linear-gradient(155deg,#d83333,#f041ff 18%,#f5cee7 45%) border-box;border-radius:8px;border:1px solid transparent;padding:6px 8px}.box[data-astro-cid-mmc7otgs]{padding:16px;background:#fff;border-radius:16px;border:1px solid white}#news[data-astro-cid-mmc7otgs]{position:absolute;bottom:16px;right:16px;max-width:300px;text-decoration:none;transition:background .2s;backdrop-filter:blur(50px)}#news[data-astro-cid-mmc7otgs]:hover{background:#ffffff8c}@media screen and (max-height: 368px){#news[data-astro-cid-mmc7otgs]{display:none}}@media screen and (max-width: 768px){#container[data-astro-cid-mmc7otgs]{display:flex;flex-direction:column}#hero[data-astro-cid-mmc7otgs]{display:block;padding-top:10%}#links[data-astro-cid-mmc7otgs]{flex-wrap:wrap}#links[data-astro-cid-mmc7otgs] a[data-astro-cid-mmc7otgs].button{padding:14px 18px}#news[data-astro-cid-mmc7otgs]{right:16px;left:16px;bottom:2.5rem;max-width:100%}h1[data-astro-cid-mmc7otgs]{line-height:1.5}}\nhtml,body{margin:0;width:100%;height:100%}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/root/code/mois/node_modules/@sanity/astro/dist/studio/studio-route.astro",{"propagation":"none","containsHead":true}],["/root/code/mois/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/root/code/mois/src/pages/post/[slug].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/api/draft-mode/disable@_@ts":"pages/api/draft-mode/disable.astro.mjs","\u0000@astro-page:src/pages/api/draft-mode/enable@_@ts":"pages/api/draft-mode/enable.astro.mjs","\u0000@astro-page:node_modules/@sanity/astro/dist/studio/studio-route@_@astro":"pages/studio/_---params_.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/post/[slug]@_@astro":"pages/post/_slug_.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/root/code/mois/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CtgdCPfH.mjs","\u0000@astrojs-manifest":"manifest_BHlR7NgC.mjs","/root/code/mois/node_modules/@sanity/astro/dist/visual-editing/visual-editing-component":"_astro/visual-editing-component.DWbFe4zB.js","@astrojs/react/client.js":"_astro/client.AGiIY9hB.js","/root/code/mois/node_modules/sanity/lib/_chunks-es/resources.mjs":"_astro/resources.DyNmdpbi.js","/root/code/mois/node_modules/sanity/lib/_chunks-es/resources3.mjs":"_astro/resources3.BdoQ4U3G.js","/root/code/mois/node_modules/sanity/lib/_chunks-es/resources2.mjs":"_astro/resources2.CLZ6A-x4.js","/root/code/mois/node_modules/sanity/lib/_chunks-es/ViteDevServerStopped.mjs":"_astro/ViteDevServerStopped.BePOaAXp.js","/root/code/mois/node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js":"_astro/stegaEncodeSourceMap.Cb0Awif5.js","/root/code/mois/node_modules/sanity/lib/_chunks-es/resources4.mjs":"_astro/resources4.BOSA_nEj.js","/root/code/mois/node_modules/sanity/lib/_chunks-es/index3.mjs":"_astro/index3.ByQqtXoa.js","/root/code/mois/node_modules/sanity/lib/_chunks-es/resources5.mjs":"_astro/resources5.BFA70_1M.js","/root/code/mois/node_modules/sanity/lib/_chunks-es/PresentationToolGrantsCheck.mjs":"_astro/PresentationToolGrantsCheck.DaxyJJ-8.js","/root/code/mois/node_modules/sanity/lib/_chunks-es/BroadcastDisplayedDocument.mjs":"_astro/BroadcastDisplayedDocument.Chfts-qd.js","/root/code/mois/node_modules/@sanity/vision/lib/_chunks-es/resources.mjs":"_astro/resources.ZHnmeZfg.js","/root/code/mois/node_modules/@sanity/vision/lib/_chunks-es/SanityVision.mjs":"_astro/SanityVision.BPHisNPS.js","/root/code/mois/node_modules/sanity/lib/_chunks-es/index.mjs":"_astro/index.JAczRWlB.js","/root/code/mois/node_modules/sanity/lib/_chunks-es/index2.mjs":"_astro/index2.CBfE_YcD.js","/root/code/mois/node_modules/sanity/lib/_chunks-es/QRCodeSVG.mjs":"_astro/QRCodeSVG.DWIRcn2A.js","/root/code/mois/node_modules/sanity/lib/_chunks-es/LoaderQueries.mjs":"_astro/LoaderQueries.Dc7dvkX7.js","/root/code/mois/node_modules/sanity/lib/_chunks-es/LiveQueries.mjs":"_astro/LiveQueries.fFwg17p9.js","/root/code/mois/node_modules/sanity/lib/_chunks-es/PostMessageDocuments.mjs":"_astro/PostMessageDocuments.CdqgjYa3.js","/root/code/mois/node_modules/sanity/lib/_chunks-es/PostMessageRefreshMutations.mjs":"_astro/PostMessageRefreshMutations.BSnOSmsc.js","/root/code/mois/node_modules/sanity/lib/_chunks-es/PostMessagePerspective.mjs":"_astro/PostMessagePerspective.BmX28SxA.js","/root/code/mois/node_modules/sanity/lib/_chunks-es/PostMessagePreviewSnapshots.mjs":"_astro/PostMessagePreviewSnapshots.DH0MHBFN.js","/root/code/mois/node_modules/sanity/lib/_chunks-es/PostMessageSchema.mjs":"_astro/PostMessageSchema.DBDp9Pz0.js","/root/code/mois/node_modules/sanity/lib/_chunks-es/PostMessageTelemetry.mjs":"_astro/PostMessageTelemetry.xZrYlMsL.js","/root/code/mois/node_modules/@sanity/astro/dist/studio/studio-component":"_astro/studio-component.BvJhuCPX.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/astro.Dm8K3lV8.svg","/_astro/background.BPKAcmfN.svg","/stats.html","/favicon.svg","/_astro/BroadcastDisplayedDocument.Chfts-qd.js","/_astro/DisplayedDocumentBroadcaster.DYfF5bFa.js","/_astro/LiveQueries.fFwg17p9.js","/_astro/LoaderQueries.Dc7dvkX7.js","/_astro/PostMessageDocuments.CdqgjYa3.js","/_astro/PostMessagePerspective.BmX28SxA.js","/_astro/PostMessagePreviewSnapshots.DH0MHBFN.js","/_astro/PostMessageRefreshMutations.BSnOSmsc.js","/_astro/PostMessageSchema.DBDp9Pz0.js","/_astro/PostMessageTelemetry.xZrYlMsL.js","/_astro/PresentationToolGrantsCheck.DaxyJJ-8.js","/_astro/QRCodeSVG.DWIRcn2A.js","/_astro/SanityVision.BPHisNPS.js","/_astro/ViteDevServerStopped.BePOaAXp.js","/_astro/browser.Ck6fnom_.js","/_astro/client.AGiIY9hB.js","/_astro/client.B76MnFfN.js","/_astro/index.CQkWGOce.js","/_astro/index.EmWCQ-Q3.js","/_astro/index.JAczRWlB.js","/_astro/index2.CBfE_YcD.js","/_astro/index3.ByQqtXoa.js","/_astro/resolveEditInfo.B7J32-hP.js","/_astro/resources.DyNmdpbi.js","/_astro/resources.ZHnmeZfg.js","/_astro/resources2.CLZ6A-x4.js","/_astro/resources3.BdoQ4U3G.js","/_astro/resources4.BOSA_nEj.js","/_astro/resources5.BFA70_1M.js","/_astro/stegaEncodeSourceMap.Cb0Awif5.js","/_astro/studio-component.5JEdvz6o.js","/_astro/studio-component.BvJhuCPX.js","/_astro/utils.BIMmukQr.js","/_astro/visual-editing-component.DWbFe4zB.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"ln/bufvFbQcHmGT7lGi7CecF0dgfviDJGIEM0kNHwrM="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
