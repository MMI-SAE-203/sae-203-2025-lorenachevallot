import { e as createComponent, m as maybeRenderHead, h as addAttribute, j as renderScript, r as renderTemplate, f as createAstro, l as renderHead, i as renderComponent, k as renderSlot } from './astro/server_BqO5gSP-.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                             */
import 'clsx';

const Logo$1 = new Proxy({"src":"/_astro/logo.TVxJKD6R.svg","width":306,"height":360,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/assets/svg/logo.svg";
							}
							
							return target[name];
						}
					});

const Rechercher = new Proxy({"src":"/_astro/element_loupe.C94zG7x3.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/assets/svg/element_loupe.svg";
							}
							
							return target[name];
						}
					});

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="relative w-full p-0 bg-cover bg-center text-white bg-black z-10 flex flex-col justify-center items-center lg:flex-row lg:gap-4 lg:justify-between lg:items-center lg:px-8 lg:py-4"> <div class="header top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-20 lg:flex-row lg:w-auto"> <a href="/"><img${addAttribute(Logo$1.src, "src")} alt="logo Cinemagny" class="w-12"></a> <div class="flex gap-4 items-center lg:hidden"> <button class="p-2 block lg:hidden"> <img${addAttribute(Rechercher.src, "src")} alt="search" class="w-8 h-8 invert"> </button> <button class="relative z-20 flex h-6 w-8 flex-col justify-between *:h-[2px] *:w-full *:bg-white lg:hidden lg:*:hidden" id="menu-btn" aria-label="Menu" aria-controls="menu" aria-expanded="false"> <span></span> <span></span> <span></span> </button> </div> </div> <nav class="visible fixed z-10 inset-0 bg-white text-2xl text-black opacity-100 transition-all duration-300 ease-in-out max-lg:aria-hidden:invisible max-lg:aria-hidden:opacity-0 lg:relative lg:items-center lg:bg-transparent lg:text-sm lg:font-bold lg:uppercase lg:tracking-wide lg:opacity-100 lg:text-white lg:flex-row py-8" id="menu" aria-hidden="true"> <ul class="mt-[25vh] h-auto px-8 lg:m-0 lg:flex lg:gap-4"> <li class="dropdown-menu group relative overflow-visible"> <a href="/programmation" class="hover:text-primary block pb-6 pt-2 relative">
Programmation
<span class="underline-animation absolute bottom-2 left-0 h-1 w-full transform translate-y-4 bg-white transition-all duration-300 ease-in-out hover:translate-y-0"></span> </a> <div class="dropdown-wrapper absolute top-full left-0 pt-2 overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-300 ease-in-out"> <ul class="dropdown-content bg-black py-2 px-4 min-w-max z-30 origin-top transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out"> <li class="py-1"> <a href="/activites" class="hover:text-primary whitespace-nowrap">Activités</a> </li> </ul> </div> </li> <li class="relative overflow-visible"> <a href="/billetterie" class="hover:text-primary block pb-6 pt-2 relative">
Billetterie
<span class="underline-animation absolute bottom-2 left-0 h-1 w-full transform translate-y-4 bg-white transition-all duration-300 ease-in-out hover:translate-y-0"></span> </a> </li> <li class="dropdown-menu group relative overflow-visible"> <a href="/" class="hover:text-primary dropdown-toggle block pb-6 pt-2 relative">
Infos pratiques
<span class="underline-animation absolute bottom-2 left-0 h-1 w-full transform translate-y-4 bg-white transition-all duration-300 ease-in-out group-hover:translate-y-0"></span> </a> <div class="dropdown-wrapper absolute top-full left-0 pt-2 overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-300 ease-in-out"> <ul class="dropdown-content bg-black py-2 px-4 min-w-max z-30 origin-top transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out"> <li class="py-1"> <a href="/ecologie" class="hover:text-primary whitespace-nowrap">Écoresponsabilité</a> </li> </ul> </div> </li> <li class="relative overflow-visible"> <a href="/invite" class="hover:text-primary block pb-6 pt-2 relative">
Invités
<span class="underline-animation absolute bottom-2 left-0 h-1 w-full transform translate-y-4 bg-white transition-all duration-300 ease-in-out hover:translate-y-0"></span> </a> </li> <li class="dropdown-menu group relative overflow-visible"> <a href="/a-propos" class="hover:text-primary dropdown-toggle block pb-6 pt-2 relative">
À Propos
<span class="underline-animation absolute bottom-2 left-0 h-1 w-full transform translate-y-4 bg-white transition-all duration-300 ease-in-out group-hover:translate-y-0"></span> </a> <div class="dropdown-wrapper absolute top-full left-0 pt-2 overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-300 ease-in-out"> <ul class="dropdown-content bg-black py-2 px-4 min-w-max z-30 origin-top transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out"> <li class="py-1"> <a href="/contact" class="hover:text-primary whitespace-nowrap">Contact</a> </li> </ul> </div> </li> </ul> </nav> </header> ${renderScript($$result, "C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/components/Header.astro", void 0);

const Logoinsta = new Proxy({"src":"/_astro/element_insta.Dq_hScMm.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/assets/svg/element_insta.svg";
							}
							
							return target[name];
						}
					});

const Logofacebook = new Proxy({"src":"/_astro/element_facebook.BrsiaxEM.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/assets/svg/element_facebook.svg";
							}
							
							return target[name];
						}
					});

const Logotwitter = new Proxy({"src":"/_astro/element_twitter.BG_9kG7c.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/assets/svg/element_twitter.svg";
							}
							
							return target[name];
						}
					});

const Logoytb = new Proxy({"src":"/_astro/element_ytb.DBLvkrJF.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/assets/svg/element_ytb.svg";
							}
							
							return target[name];
						}
					});

const Logo = new Proxy({"src":"/_astro/element_logo_initial.9_fqK7WJ.svg","width":51,"height":60,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/assets/svg/element_logo_initial.svg";
							}
							
							return target[name];
						}
					});

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-black text-white py-10 px-6 md:px-12"> <div class="max-w-7xl mx-auto"> <div class="mb-6"> <img${addAttribute(Logo.src, "src")} alt="logo cinemagny" class="w-12 md:w-16"> </div> <div class="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8"> <div class="space-y-8"> <div> <h3 class="text-lg font-semibold text-(--color-blue) mb-4">
Contact
</h3> <ul class="space-y-2 text-sm font-thin"> <li>Email : contact@cinemagny.com</li> <li>Téléphone : +33 3 00 00 00 00</li> <li>
Adresse : Théâtre du Pilier, 90200 Giromagny, France
</li> </ul> </div> <div> <h3 class="text-lg font-semibold text-(--color-blue) mb-4">
Mentions légales
</h3> <ul class="text-sm font-thin space-y-2"> <li>Politique de confidentialité</li> <li>Conditions générales d'utilisation</li> <li>Cookies</li> </ul> </div> </div> <div class="hidden md:block w-[1px] bg-(--color-blue)"></div> <div class="space-y-8"> <div> <h3 class="text-lg font-semibold text-(--color-blue) mb-4">
Inscription à la Newsletter
</h3> <p class="text-sm font-thin">
Recevez les dernières nouvelles du festival CINEMAGNY,
                        des informations exclusives et des offres spéciales.
</p> <button class="border border-(--color-blue) text-(--color-blue)
                   py-2 px-6 text-sm uppercase hover:bg-[--color-blue]
                   hover:text-white transition text-md my-4 block
                   font-thin max-w-xs">
S'inscrire à la newsletter
</button> </div> <div> <h3 class="text-lg font-semibold text-(--color-blue) mb-4">
Nous suivre
</h3> <ul class="flex space-x-4"> <li> <img${addAttribute(Logoinsta.src, "src")} alt="logo instagram" class="w-6 invert"> </li> <li> <img${addAttribute(Logofacebook.src, "src")} alt="logo facebook" class="w-6 invert"> </li> <li> <img${addAttribute(Logotwitter.src, "src")} alt="logo twitter" class="w-6 invert"> </li> <li> <img${addAttribute(Logoytb.src, "src")} alt="logo youtube" class="w-6 invert"> </li> </ul> </div> </div> </div> <!-- Fin grid --> </div> </footer>`;
}, "C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hero;
  const props = Astro2.props;
  const hero = props.hero;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col w-full overflow-hidden"> <div${addAttribute(`${hero.imgHero ? "absolute inset-0 mt-12 bg-transparent items-center" : "relative mt-0 bg-black items-start"} flex flex-col justify-center text-center px-8 lg:px-32  text-white min-h-[35dvh] overflow-hidden`, "class")}> <h1 class="font-sans font-light text-3xl md:text-4xl lg:text-6xl uppercase"> ${hero.title} </h1> <h2 class="font-sans text-lg md:text-2xl mt-2"> ${hero.subtitle} </h2> ${hero.button && renderTemplate`<button class="border border-white px-6 py-3 mt-6 text-xs
                           hover:bg-white hover:text-black transition"> ${hero.button} </button>`} </div> ${hero.imgHero && renderTemplate`<div class="inset-0 -z-10 bg-black/50 m-0 p-0 h-screen w-screen"> <img${addAttribute(hero.imgHero, "src")} alt="hero background" class="mix-blend-color object-cover h-full w-full block lg:hidden"> <img${addAttribute(hero.imgHeroLg ?? hero.imgHero, "src")} alt="hero background" class="mix-blend-color object-cover h-full w-full hidden lg:block"> </div>`} </div>`;
}, "C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/components/Hero.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const props = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro Basics</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderComponent($$result, "Hero", $$Hero, { "hero": props.hero })} <main class="px-6 py-15"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/layouts/Layout.astro", void 0);

export { $$Layout as $, Logoinsta as L, Logofacebook as a, Logotwitter as b, Logoytb as c };
