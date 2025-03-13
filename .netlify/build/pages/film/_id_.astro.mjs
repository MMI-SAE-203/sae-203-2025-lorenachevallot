import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_BqO5gSP-.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_Dk5XpXzN.mjs';
import { a as getFilmById, f as formatDate } from '../../chunks/backend_zbxt_nIs.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const id = Astro2.params.id;
  let film = await getFilmById(id);
  let dateHeure = formatDate(film.date_projection);
  const embedUrl = film.bande_annonce.includes("v=") ? `https://www.youtube.com/embed/${film.bande_annonce.split("v=")[1]}` : "";
  const hero = {
    title: film.titre
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "hero": hero }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-screen-md mx-auto py-8 px-4 lg:px-0 text-black"> <section class="mb-8"> <h1 class="text-3xl font-bold mb-4 text-center md:text-left"> ${film.title} </h1> <div class="flex flex-col md:flex-row md:gap-6"> <div class="w-full md:w-1/2 mb-4 md:mb-0"> <img${addAttribute(film.affiche, "src")} alt="Affiche du film" class="w-full h-auto object-cover"> </div> <div class="w-full md:w-1/2 flex flex-col"> <div class="bg-(--color-turquoise) py-6 px-4 md:px-6 text-center text-black w-full h-full flex flex-col justify-between"> <h2 class="text-2xl font-semibold mb-4">Diffusion</h2> <div class="flex-1 flex flex-col justify-center"> <p class="text-base font-serif">${dateHeure.date}</p> <p class="text-base font-serif mb-4"> ${dateHeure.heure} </p> <div class="w-full max-w-xs h-[1px] bg-black mx-auto mb-4"></div> <p class="text-base font-serif mb-6"> ${film.lieu_projection} </p> </div> </div> <div class="hidden md:block text-center mt-4"> <button class="w-full px-6 py-2 font-sans bg-black text-white hover:bg-gray-800 transition-colors">
BILLETTERIE
</button> </div> </div> </div> </section> <section class="mb-8"> <h2 class="text-xl font-semibold mb-2">Synopsis</h2> <p class="leading-relaxed">${film.description}</p> </section> <div class="mb-8 text-center"> <img${addAttribute(film.photosupp, "src")} class="w-full h-auto"> </div> <section class="mb-8"> <h2 class="text-xl font-semibold mb-2">
Biographie du réalisateur
</h2> <p class="leading-relaxed">${film.bio_realisateur}</p> </section> <section class="mb-8"> <div class="relative w-full" style="padding-bottom: 56.25%;"> <iframe${addAttribute(embedUrl, "src")} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="absolute top-0 left-0 w-full h-full">
                </iframe> </div> </section> <div class="flex flex-col lg:flex-row lg:gap-8 mb-8"> <section class="lg:w-1/2 mb-8 lg:mb-0 order-2 lg:order-1"> <h2 class="text-xl font-semibold mb-4">Notre Invité spécial</h2> <div class="flex flex-col md:flex-row lg:flex-col items-start gap-4"> <img${addAttribute(film.expand?.invite.photo, "src")} alt="Invité Spécial" class="w-48 h-auto object-cover"> <div> <h3 class="text-lg font-semibold mb-2"> ${film.expand?.invite.nom} ${film.expand?.invite.prenom} </h3> <p class="leading-relaxed"> ${film.expand?.invite.bio} </p> </div> </div> </section> <section class="lg:w-1/2 order-1 lg:order-2 mb-8 lg:mb-0"> <h2 class="text-xl font-semibold mb-4">Informations</h2> <ul class="font-serif list-inside space-y-1 mb-4"> <li>Durée&nbsp;: ${film.duree}</li> <li>Genre&nbsp;: ${film.genre}</li> <li>Langue&nbsp;: ${film.langue}</li> <li>
Réalisateur&nbsp;: ${film.nom_realisateur}${film.prenom_realisateur} </li> <li> ${film.expand?.invite.nom}&nbsp;: ${film.expand?.invite.nom} ${film.expand?.invite.prenom} </li> </ul> </section> </div> <div class="md:hidden text-center mb-8"> <button class="w-full px-6 py-2 font-sans bg-black text-white hover:bg-gray-800 transition-colors">
BILLETTERIE
</button> </div> </main> ` })}`;
}, "C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/pages/film/[id].astro", void 0);

const $$file = "C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/pages/film/[id].astro";
const $$url = "/film/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
