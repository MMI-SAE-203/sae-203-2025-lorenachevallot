import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { n as NOOP_MIDDLEWARE_HEADER, o as decodeKey } from './chunks/astro/server_BqO5gSP-.mjs';
import 'cookie';
import 'es-module-lexer';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

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
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
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

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/","cacheDir":"file:///C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/node_modules/.astro/","outDir":"file:///C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/dist/","srcDir":"file:///C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/","publicDir":"file:///C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/public/","buildClientDir":"file:///C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/dist/","buildServerDir":"file:///C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/activites.DdgwFIGl.css"}],"routeData":{"route":"/activites","isIndex":false,"type":"page","pattern":"^\\/activites\\/?$","segments":[[{"content":"activites","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/activites.astro","pathname":"/activites","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/activites.DdgwFIGl.css"}],"routeData":{"route":"/billetterie","isIndex":false,"type":"page","pattern":"^\\/billetterie\\/?$","segments":[[{"content":"billetterie","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/billetterie.astro","pathname":"/billetterie","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/activites.DdgwFIGl.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/activites.DdgwFIGl.css"}],"routeData":{"route":"/ecologie","isIndex":false,"type":"page","pattern":"^\\/ecologie\\/?$","segments":[[{"content":"ecologie","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ecologie.astro","pathname":"/ecologie","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/activites.DdgwFIGl.css"}],"routeData":{"route":"/film/[id]","isIndex":false,"type":"page","pattern":"^\\/film\\/([^/]+?)\\/?$","segments":[[{"content":"film","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/film/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/activites.DdgwFIGl.css"}],"routeData":{"route":"/invite/[id]","isIndex":false,"type":"page","pattern":"^\\/invite\\/([^/]+?)\\/?$","segments":[[{"content":"invite","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/invite/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/activites.DdgwFIGl.css"}],"routeData":{"route":"/invite","isIndex":true,"type":"page","pattern":"^\\/invite\\/?$","segments":[[{"content":"invite","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/invite/index.astro","pathname":"/invite","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/activites.DdgwFIGl.css"}],"routeData":{"route":"/programmation/date/[date]","isIndex":false,"type":"page","pattern":"^\\/programmation\\/date\\/([^/]+?)\\/?$","segments":[[{"content":"programmation","dynamic":false,"spread":false}],[{"content":"date","dynamic":false,"spread":false}],[{"content":"date","dynamic":true,"spread":false}]],"params":["date"],"component":"src/pages/programmation/date/[date].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/activites.DdgwFIGl.css"},{"type":"inline","content":".no-scrollbar[data-astro-cid-z2zkzbcf]{-ms-overflow-style:none;scrollbar-width:none}.no-scrollbar[data-astro-cid-z2zkzbcf]::-webkit-scrollbar{display:none}\n"}],"routeData":{"route":"/programmation/[genre]","isIndex":false,"type":"page","pattern":"^\\/programmation\\/([^/]+?)\\/?$","segments":[[{"content":"programmation","dynamic":false,"spread":false}],[{"content":"genre","dynamic":true,"spread":false}]],"params":["genre"],"component":"src/pages/programmation/[genre].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/activites.DdgwFIGl.css"},{"type":"inline","content":".no-scrollbar[data-astro-cid-z2zkzbcf]{-ms-overflow-style:none;scrollbar-width:none}.no-scrollbar[data-astro-cid-z2zkzbcf]::-webkit-scrollbar{display:none}\n"}],"routeData":{"route":"/programmation","isIndex":true,"type":"page","pattern":"^\\/programmation\\/?$","segments":[[{"content":"programmation","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/programmation/index.astro","pathname":"/programmation","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/activites.DdgwFIGl.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/pages/activites.astro",{"propagation":"none","containsHead":true}],["C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/pages/billetterie.astro",{"propagation":"none","containsHead":true}],["C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/pages/ecologie.astro",{"propagation":"none","containsHead":true}],["C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/pages/film/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/pages/invite/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/pages/invite/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/pages/programmation/[genre].astro",{"propagation":"none","containsHead":true}],["C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/pages/programmation/date/[date].astro",{"propagation":"none","containsHead":true}],["C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/pages/programmation/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/activites@_@astro":"pages/activites.astro.mjs","\u0000@astro-page:src/pages/billetterie@_@astro":"pages/billetterie.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/ecologie@_@astro":"pages/ecologie.astro.mjs","\u0000@astro-page:src/pages/film/[id]@_@astro":"pages/film/_id_.astro.mjs","\u0000@astro-page:src/pages/invite/[id]@_@astro":"pages/invite/_id_.astro.mjs","\u0000@astro-page:src/pages/invite/index@_@astro":"pages/invite.astro.mjs","\u0000@astro-page:src/pages/programmation/date/[date]@_@astro":"pages/programmation/date/_date_.astro.mjs","\u0000@astro-page:src/pages/programmation/[genre]@_@astro":"pages/programmation/_genre_.astro.mjs","\u0000@astro-page:src/pages/programmation/index@_@astro":"pages/programmation.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BIQwByOW.mjs","C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_C3LfhCUy.mjs","C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/components/Caroussel.astro?astro&type=script&index=0&lang.ts":"_astro/Caroussel.astro_astro_type_script_index_0_lang.Co5J8kMR.js","C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/components/SelectDate.astro?astro&type=script&index=0&lang.ts":"_astro/SelectDate.astro_astro_type_script_index_0_lang.x17MWzBL.js","C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/components/SelectGenre.astro?astro&type=script&index=0&lang.ts":"_astro/SelectGenre.astro_astro_type_script_index_0_lang.CTeVmKiY.js","C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.D4erPo47.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/components/Caroussel.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const e=document.getElementById(\"carousel\"),s=document.getElementById(\"prev\"),c=document.getElementById(\"next\"),n=document.getElementById(\"prevLarge\"),l=document.getElementById(\"nextLarge\");if(!e)return;function i(){const t=e.querySelector(\".snap-center\");if(!t)return 300;const o=parseInt(window.getComputedStyle(e).gap)||0;return t.offsetWidth+o}function r(){return e.scrollWidth-e.clientWidth}function d(){let t=i();e.scrollBy({left:-t,behavior:\"smooth\"})}function a(){let t=i();r(),e.scrollLeft+t,e.scrollBy({left:t,behavior:\"smooth\"})}s&&s.addEventListener(\"click\",d),c&&c.addEventListener(\"click\",a),n&&n.addEventListener(\"click\",d),l&&l.addEventListener(\"click\",a),e.addEventListener(\"mouseenter\",()=>{n&&n.classList.replace(\"hidden\",\"flex\"),l&&l.classList.replace(\"hidden\",\"flex\")}),e.addEventListener(\"mouseleave\",()=>{window.innerWidth>=768&&(n&&n.classList.replace(\"flex\",\"hidden\"),l&&l.classList.replace(\"flex\",\"hidden\"))}),e.addEventListener(\"scroll\",()=>{const t=e.scrollLeft===0,o=e.scrollLeft>=r()-10;s&&s.classList.toggle(\"opacity-50\",t),n&&n.classList.toggle(\"opacity-50\",t),c&&c.classList.toggle(\"opacity-50\",o),l&&l.classList.toggle(\"opacity-50\",o)})});"],["C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/components/SelectDate.astro?astro&type=script&index=0&lang.ts","document.getElementById(\"date\")?.addEventListener(\"change\",t=>{let e=t.target?.value;e?window.location.href=`/programmation/date/${e}`:window.location.href=\"/programmation\"});"],["C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/components/SelectGenre.astro?astro&type=script&index=0&lang.ts","document.getElementById(\"genre\")?.addEventListener(\"change\",e=>{let n=e.target?.value;window.location.href=`/programmation/${n}`});"],["C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/components/Header.astro?astro&type=script&index=0&lang.ts","const o=document.querySelector(\"#menu-btn\"),s=document.querySelector(\"#menu\"),a=document.body,c=document.querySelector(\".header\"),i=document.querySelectorAll(\".dropdown-toggle\");o&&s&&o.addEventListener(\"click\",()=>{const e=o.ariaExpanded===\"true\",t=!e;o.ariaExpanded=String(t),s.ariaHidden=String(e),a.classList.toggle(\"noscroll\",t),c?.classList.toggle(\"black\",t)});window.innerWidth<1024&&i.forEach(e=>{e.addEventListener(\"click\",t=>{if(window.innerWidth<1024){t.preventDefault();const n=e.nextElementSibling,r=n.querySelector(\".dropdown-content\"),l=e.querySelector(\".underline-animation\");n.style.maxHeight?(n.style.maxHeight=null,r.style.transform=\"scaleY(0)\",l.style.transform=\"translateY(4px)\"):(n.style.maxHeight=n.scrollHeight+\"px\",r.style.transform=\"scaleY(1)\",l.style.transform=\"translateY(0)\")}})});"]],"assets":["/_astro/element_facebook.BrsiaxEM.svg","/_astro/element_insta.Dq_hScMm.svg","/_astro/element_ytb.DBLvkrJF.svg","/_astro/element_twitter.BG_9kG7c.svg","/_astro/image_realisateurs.AtGRqLHb.webp","/_astro/image_paysage.DRBDds6B.webp","/_astro/image_sensibilisation.CjWwY401.webp","/_astro/image_paysage_header.CsLmlikN.webp","/_astro/element_fleche_droite.BOcedmpQ.svg","/_astro/element_logo_initial.9_fqK7WJ.svg","/_astro/element_loupe.C94zG7x3.svg","/_astro/logo.TVxJKD6R.svg","/_astro/inter-cyrillic-400-normal.BLGc9T1a.woff2","/_astro/inter-greek-ext-400-normal.Bput3-QP.woff2","/_astro/arvo-latin-400-normal.D5AA_J7c.woff2","/_astro/inter-greek-400-normal.DxZsaF_h.woff2","/_astro/inter-vietnamese-400-normal.DMkecbls.woff2","/_astro/inter-cyrillic-ext-400-normal.Dc4VJyIJ.woff2","/_astro/inter-latin-400-normal.BOOGhInR.woff2","/_astro/inter-latin-ext-400-normal.hnt3BR84.woff2","/_astro/montserrat-cyrillic-400-normal.BNZrkLa0.woff2","/_astro/montserrat-cyrillic-ext-400-normal.C8cdMEH1.woff2","/_astro/montserrat-vietnamese-400-normal.CgEMIOQI.woff2","/_astro/montserrat-latin-ext-400-normal.Cd0_BKvP.woff2","/_astro/montserrat-latin-400-normal.CIMKXMQI.woff2","/_astro/inter-cyrillic-400-normal.ZzOtrSSW.woff","/_astro/arvo-latin-400-normal.DYCPRCiO.woff","/_astro/inter-greek-ext-400-normal.DCpCPQOf.woff","/_astro/inter-greek-400-normal.BZzXV7-1.woff","/_astro/inter-vietnamese-400-normal.BUNmGMP1.woff","/_astro/inter-latin-ext-400-normal.C1t-h-pH.woff","/_astro/inter-cyrillic-ext-400-normal.BPnxn4xp.woff","/_astro/inter-latin-400-normal.gitzw0hO.woff","/_astro/montserrat-cyrillic-ext-400-normal.BWKiD3Kv.woff","/_astro/montserrat-vietnamese-400-normal.B33MQ3yC.woff","/_astro/montserrat-cyrillic-400-normal.DpKvHuFb.woff","/_astro/montserrat-latin-400-normal.Sf4eHQyG.woff","/_astro/montserrat-latin-ext-400-normal.Cy-iUbkq.woff","/_astro/activites.DdgwFIGl.css","/favicon.svg"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"51OGEWcEC4BlEw+qLjSYomMaputb00x45t8gwgTC5BA="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
