import { e as createComponent, m as maybeRenderHead, j as renderScript, h as addAttribute, r as renderTemplate } from './astro/server_BqO5gSP-.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { i as getAllFilmsByProjectionDate, f as formatDate } from './backend_zbxt_nIs.mjs';

const $$SelectDate = createComponent(async ($$result, $$props, $$slots) => {
  let films = await getAllFilmsByProjectionDate();
  const uniqueDates = [
    ...new Set(
      films.map((film) => formatDate(film.date_projection).date).filter(Boolean)
    )
  ].sort();
  return renderTemplate`${maybeRenderHead()}<div class="relative flex items-center justify-center gap-8 min-w-[40dvw]"> <select name="date" id="date" class="w-full py-3 px-4 appearance-none bg-white border border-gray-300 rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"> <option value="">Toutes les dates</option> ${uniqueDates.map((date) => {
    return renderTemplate`<option${addAttribute(date, "value")}>${date}</option>`;
  })} </select> <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"> <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg> </div> </div> ${renderScript($$result, "C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/components/SelectDate.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/components/SelectDate.astro", void 0);

export { $$SelectDate as $ };
