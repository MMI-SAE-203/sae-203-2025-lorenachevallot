import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_0B434XTH.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/activites.astro.mjs');
const _page2 = () => import('./pages/billetterie.astro.mjs');
const _page3 = () => import('./pages/contact.astro.mjs');
const _page4 = () => import('./pages/ecologie.astro.mjs');
const _page5 = () => import('./pages/film/_id_.astro.mjs');
const _page6 = () => import('./pages/invite/_id_.astro.mjs');
const _page7 = () => import('./pages/invite.astro.mjs');
const _page8 = () => import('./pages/programmation/date/_date_.astro.mjs');
const _page9 = () => import('./pages/programmation/_genre_.astro.mjs');
const _page10 = () => import('./pages/programmation.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/activites.astro", _page1],
    ["src/pages/billetterie.astro", _page2],
    ["src/pages/contact.astro", _page3],
    ["src/pages/ecologie.astro", _page4],
    ["src/pages/film/[id].astro", _page5],
    ["src/pages/invite/[id].astro", _page6],
    ["src/pages/invite/index.astro", _page7],
    ["src/pages/programmation/date/[date].astro", _page8],
    ["src/pages/programmation/[genre].astro", _page9],
    ["src/pages/programmation/index.astro", _page10],
    ["src/pages/index.astro", _page11]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "a802a94d-cc1b-41c3-bca7-a4381c7374ff"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
