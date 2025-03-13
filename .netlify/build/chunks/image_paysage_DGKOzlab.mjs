const imgHeroLg = new Proxy({"src":"/_astro/image_paysage.DRBDds6B.webp","width":638,"height":424,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/assets/webp/image_paysage.webp";
							}
							
							return target[name];
						}
					});

export { imgHeroLg as i };
