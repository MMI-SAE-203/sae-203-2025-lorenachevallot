import { e as createComponent, m as maybeRenderHead, j as renderScript, h as addAttribute, r as renderTemplate, i as renderComponent } from '../chunks/astro/server_BqO5gSP-.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Caroussel } from '../chunks/Caroussel_B06RkYHI.mjs';
import { $ as $$Layout } from '../chunks/Layout_Dk5XpXzN.mjs';
import { i as getAllFilmsByProjectionDate } from '../chunks/backend_zbxt_nIs.mjs';
import 'clsx';
import { $ as $$SelectDate } from '../chunks/SelectDate_DNjgT88j.mjs';
export { renderers } from '../renderers.mjs';

const $$SelectGenre = createComponent(async ($$result, $$props, $$slots) => {
  let films = await getAllFilmsByProjectionDate();
  return renderTemplate`${maybeRenderHead()}<div class="relative flex items-center justify-center gap-8 min-w-[40dvw]"> <select name="genre" id="genre" class="w-full py-3 px-4 appearance-none bg-white border border-gray-300 rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"> <option value="">Tous les genres</option> ${films.map((film) => film.genre[0]).concat(films.map((film) => film.genre[1])).filter(
    (genre, index, self) => genre && self.indexOf(genre) === index
  ).map((genre) => renderTemplate`<option${addAttribute(genre, "value")}>${genre}</option>`)} </select> <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"> <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg> </div> </div> ${renderScript($$result, "C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/components/SelectGenre.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/components/SelectGenre.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const hero = {
    title: "Programmation"
  };
  let films = await getAllFilmsByProjectionDate();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "hero": hero }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col md:flex-row gap-4 w-full"> ${renderComponent($$result2, "SelectGenre", $$SelectGenre, { "films": films })} ${renderComponent($$result2, "SelectDate", $$SelectDate, { "films": films })} </div> ${renderComponent($$result2, "Caroussel", $$Caroussel, { "films": films })} ` })}`;
}, "C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/pages/programmation/index.astro", void 0);

const $$file = "C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/pages/programmation/index.astro";
const $$url = "/programmation";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
