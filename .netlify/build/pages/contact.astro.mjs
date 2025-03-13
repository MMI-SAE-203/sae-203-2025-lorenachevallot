import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_BqO5gSP-.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout, L as Logoinsta, a as Logofacebook, b as Logotwitter, c as Logoytb } from '../chunks/Layout_Dk5XpXzN.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const hero = {
    title: "Nous contacter"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "hero": hero }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"> <h1 class="text-3xl font-bold text-center mb-6">${hero.title}</h1> <div class="text-center mb-10"> <p class="mb-4">Besoin d'informations ?</p> <p class="text-gray-600">
Pour toute question concernant le festival, la billetterie, ou
                les modalités pratiques, n’hésitez pas à nous contacter. Notre
                équipe est à votre disposition pour vous répondre rapidement et
                vous fournir les informations nécessaires.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <!-- Informations de contact --> <div> <h2 class="text-2xl font-semibold mb-4">Nous joindre :</h2> <ul class="space-y-2 text-gray-700"> <li><strong>Email :</strong> contact@cinemagny.com</li> <li><strong>Téléphone :</strong> +33 3 00 00 00 00</li> <li> <strong>Adresse :</strong> Théâtre du Pilier, 90200 Giromagny,
                        France
</li> </ul> <div class="mt-6"> <h3 class="font-semibold">Suivez-nous sur les réseaux :</h3> <div class="flex gap-4 mt-3"> <a href="#"><img${addAttribute(Logoinsta.src, "src")} alt="Instagram" class="w-6 h-6"></a> <a href="#"><img${addAttribute(Logofacebook.src, "src")} alt="Facebook" class="w-6 h-6"></a> <a href="#"><img${addAttribute(Logotwitter.src, "src")} alt="Twitter" class="w-6 h-6"></a> <a href="#"><img${addAttribute(Logoytb.src, "src")} alt="YouTube" class="w-6 h-6"></a> </div> </div> </div> <!-- Formulaire --> <form action="/api/contact" method="POST" class="space-y-6"> <div> <label for="prenom" class="block mb-2">Prénom</label> <input type="text" name="prenom" id="prenom" required placeholder="Votre prénom" class="w-full border rounded-md px-4 py-2"> </div> <div> <label for="nom" class="block mb-2">Nom</label> <input type="text" name="nom" id="nom" required placeholder="Votre nom" class="w-full border rounded-md px-4 py-2"> </div> <div> <label for="telephone" class="block mb-2">Numéro de téléphone</label> <input type="tel" name="telephone" id="telephone" placeholder="Votre numéro de téléphone" class="w-full border rounded-md px-4 py-2"> </div> <div> <label for="email" class="block mb-2">Email</label> <input type="email" name="email" id="email" required placeholder="Votre email" class="w-full border rounded-md px-4 py-2"> </div> <div> <label for="message" class="block mb-2">Demande</label> <textarea name="message" id="message" rows="5" required placeholder="Votre message" class="w-full border rounded-md px-4 py-2"></textarea> </div> <button type="submit" class="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition">
Envoyer
</button> </form> </div> </section> ` })}`;
}, "C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/pages/contact.astro", void 0);

const $$file = "C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
