import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_BqO5gSP-.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_Dk5XpXzN.mjs';
import { i as imgHeroLg } from '../chunks/image_paysage_DGKOzlab.mjs';
export { renderers } from '../renderers.mjs';

const $$Ecologie = createComponent(($$result, $$props, $$slots) => {
  const hero = {
    title: "Notre engagement"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "hero": hero }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="container mx-auto px-4 py-10 space-y-12"> <section class="space-y-6"> <h1 class="text-4xl font-bold">
Notre Engagement pour l’Environnement
</h1> <p class="text-lg max-w-3xl mx-auto lg:mx-0">
CINEMAGNY s'engage à organiser un festival respectueux de
                l'environnement. Situé au cœur du massif vosgien, le festival
                adopte des pratiques durables pour réduire son impact écologique
                et sensibiliser les festivaliers à l'importance de préserver
                notre planète.
</p> <img${addAttribute(imgHeroLg.src, "src")} alt="jolie photographie prise au dessus d'une montagne"> <p class="text-lg max-w-2xl mx-auto font-semibold lg:mx-0">
Nous croyons qu’un événement culturel peut être une force
                positive pour l'environnement, tout en offrant une expérience de
                qualité.
</p> </section> <section class="space-y-8"> <h2 class="text-2xl font-bold">Initiatives Écoresponsables</h2> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6"> <div class="p-6 bg-(--color-turquoise) rounded-lg shadow-md space-y-2"> <h3 class="font-semibold">Matériaux recyclés</h3> <p>
Nos affiches et supports de communication sont imprimés
                        sur du papier recyclé.
</p> </div> <div class="p-6 bg-(--color-blue) rounded-lg shadow-md space-y-2"> <h3 class="font-semibold">Digitalisation</h3> <p>
Réduction des impressions grâce à des billets
                        électroniques et à l’information disponible en ligne.
</p> </div> <div class="p-6 bg-(--color-turquoise) rounded-lg shadow-md space-y-2"> <h3 class="font-semibold">Gobelets réutilisables</h3> <p>
Nous utilisons des gobelets réutilisables pour réduire
                        les déchets plastiques.
</p> </div> <div class="p-6 bg-(--color-blue) rounded-lg shadow-md space-y-2"> <h3 class="font-semibold">Gestion des déchets</h3> <p>
Tri sélectif sur tous les sites du festival avec des
                        poubelles de recyclage clairement indiquées.
</p> </div> </div> </section> <section class="space-y-6"> <h2 class="text-2xl font-bold">Sensibilisation du Public</h2> <p class="text-lg max-w-3xl mx-auto lg:mx-0">
Le festival intègre également des thématiques environnementales
                dans sa programmation. De nombreux films abordent des questions
                écologiques, sociales et durables, incitant à la réflexion et à
                l’action. Des conférences et ateliers sur l'écologie seront
                aussi proposés pour approfondir ces sujets.
</p> </section> <section class="space-y-6"> <h2 class="text-2xl font-bold">Rejoignez l'Action</h2> <p class="text-lg max-w-3xl mx-auto lg:mx-0">
Nous invitons tous les festivaliers à adopter des gestes
                écoresponsables pendant leur séjour. Ensemble, faisons de
                CINEMAGNY un événement qui allie art et respect de la nature.
                Chaque petit geste compte pour préserver l'environnement.
</p> </section> </article> ` })}`;
}, "C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/pages/ecologie.astro", void 0);

const $$file = "C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/pages/ecologie.astro";
const $$url = "/ecologie";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Ecologie,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
