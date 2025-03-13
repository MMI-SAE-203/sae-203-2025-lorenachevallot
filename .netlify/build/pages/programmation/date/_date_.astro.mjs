import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate } from '../../../chunks/astro/server_BqO5gSP-.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../../chunks/Layout_Dk5XpXzN.mjs';
import { i as getAllFilmsByProjectionDate } from '../../../chunks/backend_zbxt_nIs.mjs';
import { $ as $$SelectDate } from '../../../chunks/SelectDate_DNjgT88j.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const $$date = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$date;
  const date = Astro2.params.date;
  let films = await getAllFilmsByProjectionDate();
  const hero = {
    title: date,
    imgHero: ""
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "hero": hero }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SelectDate", $$SelectDate, { "films": films })} ` })}`;
}, "C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/pages/programmation/date/[date].astro", void 0);

const $$file = "C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/pages/programmation/date/[date].astro";
const $$url = "/programmation/date/[date]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$date,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
