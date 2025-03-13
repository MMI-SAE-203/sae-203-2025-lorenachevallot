import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BqO5gSP-.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_Dk5XpXzN.mjs';
import { g as getAllActivitiesByProjectionDate, f as formatDate } from '../chunks/backend_zbxt_nIs.mjs';
export { renderers } from '../renderers.mjs';

const $$Activites = createComponent(async ($$result, $$props, $$slots) => {
  const activites = await getAllActivitiesByProjectionDate();
  activites.map((activite) => {
    activite.date = formatDate(activite.date);
    return activite;
  });
  console.log(activites);
  const hero = {
    title: "Activit\xE9s"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "hero": hero }, { "default": ($$result2) => renderTemplate`${activites.map((activite) => renderTemplate`${maybeRenderHead()}<section class="max-w-5xl mx-auto my-12 bg-white py-8 rounded-xl"> <div class="px-6"> <h2 class="text-3xl font-semibold mb-6 pb-2 border-b-4 border-(--color-blue) inline-block text-black"> ${activite.titre} </h2> <div class="flex flex-col gap-4 items-center"> <div class="w-full"> <div class="mt-2 p-3 bg-white rounded-lg shadow-sm border-l-4 border-black"> <h4 class="font-medium text-black">
Date :
</h4> <p class="text-gray-700 mt-1"> ${activite.date.date} </p> </div> <div class="mt-6 p-3 bg-white rounded-lg shadow-sm border-l-4 border-black"> <!-- Ajout de mt-6 pour l'espacement --> <h4 class="font-medium text-black">
Description :
</h4> <p class="text-gray-700 mt-1"> ${activite.description} </p> </div> </div> </div> </div> </section>`)}` })}`;
}, "C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/pages/activites.astro", void 0);

const $$file = "C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/pages/activites.astro";
const $$url = "/activites";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Activites,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
