import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate } from '../../chunks/astro/server_BqO5gSP-.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_Dk5XpXzN.mjs';
import { j as getFilmByGenre } from '../../chunks/backend_zbxt_nIs.mjs';
import { $ as $$Caroussel } from '../../chunks/Caroussel_B06RkYHI.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$genre = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$genre;
  const genre = Astro2.params.genre;
  let films = await getFilmByGenre(genre);
  console.log(genre);
  console.log(films);
  const hero = {
    title: genre || "Tous les films",
    imgHero: ""
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "hero": hero }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Caroussel", $$Caroussel, { "films": films })} ` })}`;
}, "C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/pages/programmation/[genre].astro", void 0);

const $$file = "C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/pages/programmation/[genre].astro";
const $$url = "/programmation/[genre]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$genre,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
