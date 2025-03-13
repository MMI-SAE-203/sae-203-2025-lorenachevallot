import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, j as renderScript, i as renderComponent } from './astro/server_BqO5gSP-.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { a as getFilmById, f as formatDate } from './backend_zbxt_nIs.mjs';
import { f as flechedroite } from './element_fleche_droite_B78RPpqr.mjs';
/* empty css                           */

const $$Astro$1 = createAstro();
const $$CardFilm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardFilm;
  const props = Astro2.props;
  let film = await getFilmById(props.film.id);
  let dateHeure = formatDate(film.date_projection);
  return renderTemplate`${maybeRenderHead()}<div class="bg-white shadow-lg rounded-xl overflow-hidden max-w-[250px] lg:max-w-[300px] h-[580px] max-h-[580px] flex flex-col snap-center flex-shrink-0 transition-all duration-300 hover:shadow-xl relative"> <a${addAttribute(`/film/${film.id}`, "href")} class="block h-[60%] w-full"> <div class="relative overflow-hidden w-full h-full group"> <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 p-2"${addAttribute(film.affiche, "src")}${addAttribute(`Affiche de ${film.titre}`, "alt")}> <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> </div> </a> <a${addAttribute(`/film/${film.id}`, "href")} class="block flex-1"> <div class="px-4 h-full flex flex-col"> <h3 class="(--font-serif) text-xl font-bold text-gray-900 py-0"> ${film.titre} </h3> <div class="flex gap-3 text-black"> <div> <span class="text-sm font-medium">${dateHeure.date}</span> </div> <div class="flex items-center gap-1"> <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <span class="text-sm font-medium">${dateHeure.heure}</span> </div> </div> <div class="mb-auto"> <p class="text-xs uppercase text-black mb-1">Genres</p> <div class="flex flex-wrap gap-2"> ${film.genre.map((genre) => renderTemplate`<span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"> ${genre} </span>`)} </div> </div> </div> </a> </div>`;
}, "C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/components/CardFilm.astro", void 0);

const $$Astro = createAstro();
const $$Caroussel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Caroussel;
  const props = Astro2.props;
  const films = props.films;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col justify-center items-center gap-6 max-w-screen-xl mx-auto px-4 py-8" data-astro-cid-z2zkzbcf> <div class="relative w-full" data-astro-cid-z2zkzbcf> <div id="carousel" class="flex gap-4 md:gap-8 py-6 overflow-x-scroll scroll-smooth snap-x snap-mandatory no-scrollbar rounded-xl" data-astro-cid-z2zkzbcf> ${films.map((film) => renderTemplate`<div class="snap-center flex-shrink-0 transition-transform duration-300 hover:scale-105 w-64 md:w-72" data-astro-cid-z2zkzbcf> ${renderComponent($$result, "CardFilm", $$CardFilm, { "film": film, "data-astro-cid-z2zkzbcf": true })} </div>`)} </div> <button id="prevLarge" class="flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg text-white hover:bg-white transition-all z-10" data-astro-cid-z2zkzbcf> <img${addAttribute(flechedroite.src, "src")} alt="fleche gauche" class="w-6 h-6 rotate-180" data-astro-cid-z2zkzbcf> </button> <button id="nextLarge" class="flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg text-gray-800 hover:bg-white transition-all z-10" data-astro-cid-z2zkzbcf> <img${addAttribute(flechedroite.src, "src")} alt="fleche droite" class="w-6 h-6" data-astro-cid-z2zkzbcf> </button> </div> </div>  ${renderScript($$result, "C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/components/Caroussel.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/components/Caroussel.astro", void 0);

export { $$Caroussel as $ };
