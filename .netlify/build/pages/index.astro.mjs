import { e as createComponent, m as maybeRenderHead, k as renderSlot, r as renderTemplate, h as addAttribute, i as renderComponent } from '../chunks/astro/server_BqO5gSP-.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_Dk5XpXzN.mjs';
import 'clsx';
import { f as flechedroite } from '../chunks/element_fleche_droite_B78RPpqr.mjs';
import { i as imgHeroLg } from '../chunks/image_paysage_DGKOzlab.mjs';
export { renderers } from '../renderers.mjs';

const $$ButtonPrincipal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button class="w-full p-4 bg-black text-white uppercase font-bold font-sans text-xs tracking-wider shadow-lg hover:bg-gray-900"> ${renderSlot($$result, $$slots["default"])} </button>`;
}, "C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/components/ButtonPrincipal.astro", void 0);

const $$Card = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="relative max-w-4xl mx-auto px-4 py-8"> <div class="absolute top-0 left-0
      w-[80vw] h-[50vh]
      sm:w-[500px] sm:h-[350px]
      bg-(--color-gray) z-0"> <div class="absolute top-6 left-6 w-1/2 h-[2px] bg-black"></div> <div class="absolute top-6 left-6 w-[2px] h-1/2 bg-black"></div> </div> <div class="relative bg-(--color-green) p-6 md:p-8 shadow-lg mt-6 ml-6 z-10 flex flex-col gap-8"> ${renderSlot($$result, $$slots["title"])} ${renderSlot($$result, $$slots["content"])} ${renderSlot($$result, $$slots["button"])} ${renderSlot($$result, $$slots["img"])} </div> </div>`;
}, "C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/components/Card.astro", void 0);

const imagerealisateurs = new Proxy({"src":"/_astro/image_realisateurs.AtGRqLHb.webp","width":628,"height":354,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/assets/webp/image_realisateurs.webp";
							}
							
							return target[name];
						}
					});

const $$ButtonArrow = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button class="flex items-center gap-2 px-8 py-3 bg-black text-white font-semibold uppercase transition-colors duration-300 hover:bg-gray-800 font-sans text-semibold text-xs tracking-wider shadow-lg max-w-fit"> <img${addAttribute(flechedroite.src, "src")} alt="Flèche vers la droite" class="w-7 h-7 invert"> <a href="/programmation">Voir la programmation</a> </button>`;
}, "C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/components/ButtonArrow.astro", void 0);

const imagesensibilisation = new Proxy({"src":"/_astro/image_sensibilisation.CjWwY401.webp","width":738,"height":416,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/assets/webp/image_sensibilisation.webp";
							}
							
							return target[name];
						}
					});

const imgHero = new Proxy({"src":"/_astro/image_paysage_header.CsLmlikN.webp","width":786,"height":1390,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/assets/webp/image_paysage_header.webp";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const hero = {
    title: "CINEMAGNY",
    subtitle: "Le cin\xE9ma r\xE9invent\xE9, au c\u0153ur de la nature",
    button: "Du 12 au 15 novembre 2025",
    imgHero: imgHero.src,
    imgHeroLg: imgHeroLg.src
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "hero": hero }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="flex-col gap-10 flex items-center justify-center"> <div class="w-full pr-16"> <h3 class="md:text-2xl font-bold leading-tight mb-4">
Bienvenue sur le site officiel du festival CINEMAGNY!
</h3> <p class="text-base md:text-lg leading-relaxed">
Dédié à la célébration du cinéma indépendant et émergent, notre
				festival, situé au cœur de Giromagny, vous invite à découvrir
				des films uniques, des réalisateurs passionnés et à vivre une
				expérience inoubliable dans un cadre naturel et exceptionnel des
				Vosges du <span class="font-bold">12 au 16 novembre 2025</span>.
				Consultez notre programme, explorez nos valeurs et réservez vos
				billets dès aujourd'hui pour ne rien manquer!
</p> </div> ${renderComponent($$result2, "ButtonPrincipal", $$ButtonPrincipal, {}, { "default": ($$result3) => renderTemplate`billetterie` })} <article> ${renderComponent($$result2, "Card", $$Card, {}, { "button": ($$result3) => renderTemplate`${renderComponent($$result3, "ButtonArrow", $$ButtonArrow, { "slot": "button" }, { "default": ($$result4) => renderTemplate`Voir la programmation` })}`, "content": ($$result3) => renderTemplate`<p>
Le festival CINEMAGNY se distingue par la variété et
					l’originalité de sa programmation. Vous y découvrirez des
					longs et courts métrages, des documentaires et des films
					d’animation, tous choisis pour leur singularité. L’accent
					est mis sur le cinéma indépendant et émergent, mettant en
					lumière des réalisateurs prometteurs. Le festival propose
					également des projections exclusives ainsi que des
					rétrospectives dédiées à des figures emblématiques du
					cinéma, offrant ainsi un regard frais et inspirant sur le 7ᵉ
					art.
</p>`, "title": ($$result3) => renderTemplate`<h2>Une Programmation Riche et Originale</h2>` })} ${renderComponent($$result2, "Card", $$Card, {}, { "content": ($$result3) => renderTemplate`<p>
CINEMAGNY est bien plus qu’un simple festival de cinéma.
					C’est un lieu d’échanges entre le public et les
					professionnels du cinéma. Les festivaliers auront
					l’opportunité de participer à des ateliers et des
					conférences animés par des experts, découvrant ainsi les
					coulisses de la création cinématographique. Des séances de
					questions-réponses avec les réalisateurs permettront
					également d’enrichir l’expérience en offrant des moments
					privilégiés de dialogue et de partage. Le festival valorise
					également les talents locaux, renforçant les liens avec la
					culture régionale.
</p>`, "img": ($$result3) => renderTemplate`<img${addAttribute(imagerealisateurs.src, "src")} alt="image des réalisateurs">`, "title": ($$result3) => renderTemplate`<h2>Un Lieu de Rencontres et d’Échanges</h2>` })} ${renderComponent($$result2, "Card", $$Card, {}, { "content": ($$result3) => renderTemplate`<p>
CINEMAGNY se veut aussi un événement écoresponsable. Nous
					mettons un point d’honneur à réduire notre empreinte
					écologique en utilisant des matériaux recyclés et en
					encourageant les transports verts pour accéder au festival.
					Cette démarche s’accompagne d’une sensibilisation à la
					durabilité, avec des films et des initiatives dédiés à
					l’écologie. Le festival possède également une forte
					dimension pédagogique, proposant des conférences et des
					ateliers pour permettre à chacun d’approfondir ses
					connaissances du cinéma et de son industrie.
</p>`, "img": ($$result3) => renderTemplate`<img${addAttribute(imagesensibilisation.src, "src")} alt="image des réalisateurs">`, "title": ($$result3) => renderTemplate`<h2>
Un Festival Engagé pour l’Environnement et l’Éducation
</h2>` })} </article> <div class="relative inline-block text-left"> <div id="filter-menu" class="absolute right-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-md hidden"> <div class="p-2"> <label class="block text-sm font-medium text-gray-700">Genre</label> <select class="w-full p-2 border rounded-md"> <option value="">Tous</option> <option value="action">Action</option> <option value="drama">Drame</option> <option value="comedy">Comédie</option> </select> </div> <div class="p-2"> <label class="block text-sm font-medium text-gray-700">Date</label> <input type="date" class="w-full p-2 border rounded-md"> </div> <div class="p-2"> <label class="block text-sm font-medium text-gray-700">Langue</label> <select class="w-full p-2 border rounded-md"> <option value="">Toutes</option> <option value="fr">Français</option> <option value="en">Anglais</option> <option value="es">Espagnol</option> </select> </div> <div class="p-2 border-t"> <button class="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
Appliquer
</button> </div> </div> </div> </article>` })}`;
}, "C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/pages/index.astro", void 0);

const $$file = "C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
