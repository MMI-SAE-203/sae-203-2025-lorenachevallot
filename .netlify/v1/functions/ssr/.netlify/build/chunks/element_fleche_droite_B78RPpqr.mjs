const flechedroite = new Proxy({"src":"/_astro/element_fleche_droite.BOcedmpQ.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/loren/Documents/GitHub/sae-203-2025-lorenachevallot/src/assets/svg/element_fleche_droite.svg";
							}
							
							return target[name];
						}
					});

export { flechedroite as f };
