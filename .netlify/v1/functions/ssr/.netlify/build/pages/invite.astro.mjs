import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, i as renderComponent } from '../chunks/astro/server_BqO5gSP-.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_Dk5XpXzN.mjs';
import 'clsx';
import { b as getInvitesById, e as getAllInvitesSortedByName, h as getAnimatorInvited } from '../chunks/backend_zbxt_nIs.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$CardInvite = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardInvite;
  const props = Astro2.props;
  let invite = await getInvitesById(props.invites.id);
  return renderTemplate`${maybeRenderHead()}<article class="p-6 flex flex-col shadow-sm rounded-sm md:flex-row md:items-start lg:max-w-[70dvw] space-y-6 md:space-y-0 md:space-x-6"> <div class="relative bg-white p-6 flex items-center justify-center"> <div class="absolute top-2 left-2 flex flex-col"> <div class="w-16 md:w-20 lg:w-24 h-[2.5px] bg-black"></div> <div class="h-12 md:h-16 lg:h-20 w-[2px] bg-black"></div> </div> <img${addAttribute(invite.photo, "src")} alt="Photo de l'invité" class="w-full max-w-[16rem] md:max-w-[20rem] lg:max-w-[24rem] h-auto object-cover"> </div> <div class="text-center md:text-left flex-1 md:mt-4"> <h2 class="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900"> ${invite.nom} ${invite.prenom} </h2> <p class="text-gray-600 mt-2 text-sm md:text-base lg:text-lg leading-relaxed"> ${invite.bio} </p> <button class="mt-4 md:mt-6 lg:mt-8 px-4 py-2 md:px-6 md:py-2.5 lg:px-8 lg:py-3 bg-black hover:bg-(--color-turquoise) hover:text-black text-white font-sans uppercase font-medium text-sm md:text-base lg:text-lg rounded-md transition-colors duration-300 w-full md:w-auto"> <a${addAttribute(`/invite/${invite.id}`, "href")}> En savoir plus </a> </button> </div> </article>`;
}, "C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/components/CardInvite.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const hero = {
    title: "Invit\xE9s"
  };
  let invites = await getAllInvitesSortedByName();
  let animateurs = await getAnimatorInvited();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "hero": hero }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="max-w-5xl mx-auto my-12 px-6"> <h2 class="text-3xl font-semibold mb-6 pb-2 border-b-4 border-(--color-turquoise) inline-block text-gray-900">
Invités
</h2> <div class="flex flex-col gap-4 items-center"> ${invites.map((invite) => renderTemplate`${renderComponent($$result2, "CardInvite", $$CardInvite, { "invites": invite })}`)} </div> </section> <section class="max-w-5xl mx-auto my-12 px-6 bg-white py-8 rounded-xl"> <h2 class="text-3xl font-semibold mb-6 pb-2 border-b-4 border-(--color-blue) inline-block text-black">
Animateurs
</h2> <div class="flex flex-col gap-4 items-center"> ${animateurs.map((animateur) => renderTemplate`<div class="w-full"> ${renderComponent($$result2, "CardInvite", $$CardInvite, { "invites": animateur })} ${animateur.activites && renderTemplate`<div class="mt-2 ml-4 p-3 bg-white rounded-lg shadow-sm border-l-4 border-black"> <h4 class="font-medium text-black">
Anime :
</h4> ${Array.isArray(animateur.activites) ? renderTemplate`<ul class="mt-1 space-y-1"> ${animateur.activites.map((activite) => renderTemplate`<li class="text-gray-700"> ${activite.nom} </li>`)} </ul>` : renderTemplate`<p class="text-gray-700 mt-1"> ${animateur.activites} </p>`} </div>`} </div>`)} </div> </section> ` })}`;
}, "C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/pages/invite/index.astro", void 0);

const $$file = "C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/pages/invite/index.astro";
const $$url = "/invite";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
