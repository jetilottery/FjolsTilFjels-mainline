define({
	_BASE_APP: {
		children: ["background", "gameContainers", "intro", "flaxLogo", "purchase", "introShield", "introTitle", "balanceMeterNT"]
	},

	/*
	 * BALANCE
	 */
	balanceMeterNT: {
		type: "text",
		style: "balanceMeterStyle",
		string: "",
		anchor: { x: 1, y: 0 },
		landscape: { x: 794, y: 12 },
		portrait: { x: 634, y: 144 }
	},

	/*
	 * BACKGROUND
	 */
	background: {
		type: "rectangle",
		children: ["sky", "snowLayer0", "tinySkiers", "layer0Tint", "introGuy", "snowLayer1", "titleLogo"],
		landscape: {
			x: 0,
			y: 0,
			width: 800,
			height: 600,
			fill: 0x005017
		},
		portrait: {
			x: 0,
			y: 0,
			width: 640,
			height: 1136,
			fill: 0x005017
		}
	},

	sky: {
		type: "sprite",
		x: 0,
		y: 0,
		portrait: { texture: "sky" },
		landscape: { texture: "skyLandscape" }
	},

	snowLayer0: {
		type: "sprite",
		landscape: {
			x: 0,
			y: 0,
			texture: "backdropLandscape"
		},
		portrait: {
			x: 0,
			y: 221,
			texture: "backdrop"
		}
	},

	tinySkiers: {
		type: "container",
		landscape: { x: 145, y: 87 },
		portrait: { x: 0, y: 300 }
	},

	layer0Tint: {
		type: "rectangle",
		fill: 0x00B0E7,
		landscape: {
			x: 0,
			y: 100,
			width: 0,
			height: 0,
			alpha: 0
		},
		portrait: {
			x: 0,
			y: 350,
			width: 640,
			height: 500
		},
		alpha: 0.3
	},

	snowLayer1: {
		type: "sprite",
		landscape: { x: 0, y: 10, texture: "foregroundLandscape" },
		portrait: { x: 0, y: 180, texture: "foreground" }
	},

	flaxLogo: {
		type: "sprite",
		texture: "flaxLogo",
		anchor: 0,
		landscape: { x: 27, y: 21, scale: 0.68 },
		portrait: { x: 12, y: 142 }
	},

	titleLogo: {
		type: "sprite",
		texture: "titleLogo",
		anchor: 0.5,
		alpha: 0,
		landscape: { x: 701, y: 154, scale: 0.66 },
		portrait: { x: 508, y: 330, scale: 1 }
	},

	/*
	 * GAME CONTAINERS
	 */
	gameContainers: {
		type: "container",
		children: ["mainGame"]
	},

	mainGame: {
		type: "container",
		children: [
			"mainGameTagLine",
			"mainGameTiles"
		],
		alpha: 0,
		visible: false,
		portrait: {scale: 1},
		landscape: {scale: 0.81}
	},

	mainGameTagLine: {
		type: "text",
		style: "mainGameTagLineStyle",
		string: "mainGameTagLine",
		anchor: 0.5,
		landscape: {
			x: 500,
			y: 550
		},
		portrait: {
			x: 320,
			y: 910
		}
	},

	mainGameTiles: {
		type: "container",
		children: [
			"mainGameTile0",
			"mainGameTile1",
			"mainGameTile2",
			"mainGameTile3",
			"mainGameTile4",
			"mainGameTile5",
			"mainGameTile6",
			"mainGameTile7",
			"mainGameTile8",
			"mainGameParticles0",
			"mainGameParticles1",
			"mainGameParticles2",
			"mainGameParticles3",
			"mainGameParticles4",
			"mainGameParticles5",
			"mainGameParticles6",
			"mainGameParticles7",
			"mainGameParticles8"
		],
		portrait: { x: 0, y: 674 },
		landscape: { x: 175, y: 332 }
	},

	mainGameTile0: {
		type: "container",
		x: 126,
		y: -144,
		alpha: 0
	},
	mainGameTile1: {
		type: "container",
		x: 315,
		y: -144,
		alpha: 0
	},
	mainGameTile2: {
		type: "container",
		x: 507,
		y: -144,
		alpha: 0
	},

	mainGameTile3: {
		type: "container",
		x: 126,
		y: -2,
		alpha: 0
	},
	mainGameTile4: {
		type: "container",
		x: 315,
		y: -2,
		alpha: 0
	},
	mainGameTile5: {
		type: "container",
		x: 507,
		y: -2,
		alpha: 0
	},
	
	mainGameTile6: {
		type: "container",
		x: 126,
		y: 138,
		alpha: 0
	},
	mainGameTile7: {
		type: "container",
		x: 315,
		y: 138,
		alpha: 0
	},
	mainGameTile8: {
		type: "container",
		x: 507,
		y: 138,
		alpha: 0
	},

	mainGameParticles0: {
		type: "container",
		x: 126,
		y: -144
	},
	mainGameParticles1: {
		type: "container",
		x: 315,
		y: -144
	},
	mainGameParticles2: {
		type: "container",
		x: 507,
		y: -144
	},

	mainGameParticles3: {
		type: "container",
		x: 126,
		y: -2
	},
	mainGameParticles4: {
		type: "container",
		x: 315,
		y: -2
	},
	mainGameParticles5: {
		type: "container",
		x: 507,
		y: -2
	},

	mainGameParticles6: {
		type: "container",
		x: 126,
		y: 138
	},
	mainGameParticles7: {
		type: "container",
		x: 315,
		y: 138
	},
	mainGameParticles8: {
		type: "container",
		x: 507,
		y: 138
	},

	/*
	 * INTRO ASSETS
	 */
	intro: {
		type: "container",
		children: ["introDiamond", "introSnow", "introOverlay"]
	},
	introDiamond: {
		type: "sprite",
		texture: "diamond",
		anchor: 0.5,
		landscape: { x: 413, y: 340 },
		portrait: { x: 320, y: 568 }
	},
	/*
	introSnow: {
		type: "sprite",
		texture: "snow3",
		anchor: { x: 0.5, y: 1 },
		landscape: { x: 400, y: 0 },
		portrait: { x: 320, y: 0 }
	},
	*/
	introSnow: {
		type: "rectangle",
		fill: 0x000000,
		fillAlpha: 0,
		x: 0,
		y: 0,
		landscape: { width: 800, height: 600 },
		portrait: { width: 640, height: 1136 }
	},
	introGuy: {
		type: "sprite",
		texture: "guy",
		anchor: 0,
		landscape: { x: 800, y: 0 },
		portrait: { x: 640, y: 0 },
		children: [ "introGuyParticles" ]
	},
		introGuyParticles: {
			type: "container",
			landscape: { x: 120, y: 0, scale: 0.6 },
			portrait: { x: 120, y: -210, scale: 1 },
			rotation: 0.2617993877991494
		},
	introOverlay: {
		type: "rectangle",
		fill: 0x00B0E7,
		x: 0,
		y: 0,
		landscape: { width: 800, height: 600 },
		portrait: { width: 640, height: 1136 },
		alpha: 0.3
	},

	introShield: {
		type: "sprite",
		texture: "shield",
		alpha: 0,
		anchor: 0.5,
		landscape: { x: 400, y: 300 },
		portrait: { x: 320, y: 576 }
	},
	introTitle: {
		type: "sprite",
		texture: "titleText",
		alpha: 0,
		anchor: 0.5,
		landscape: { x: 400, y: 270 },
		portrait: { x: 320, y: 519 }
	},
	/*
	 * PURCHASE SCREEN
	 */
	purchase: {
		type: "container",
		children: ["purchaseCard", "priceTag"]
	},
		purchaseCard: {
			type: "sprite",
			anchor: 0.5,
			landscape: {
				texture: "purchaseGameLandscape",
				x: 406,
				y: 248
			},
			portrait: {
				texture: "purchaseGamePortrait",
				x: 318,
				y: 565
			}
		},
		priceTag: {
			type: "sprite",
			anchor: 0.5,
			texture: "priceDiamond",
			children: ["ticketPrice"],
			landscape: {
				x: 223,
				y: 380
			},
			portrait: {
				x: 159,
				y: 789
			}
		},
			ticketPrice: {
				type: "text",
				string: "ticketCost",
				style: "ticketPriceStyle",
				anchor: 0.5,
				x: 0,
				y: -4,
				tint: 0xffffff,
				maxWidth: 100
			},
	/*
	 * UI
	 */

	brushButton: {
		type: "button",
		landscape: {
			x: 547,
			y: 37
		},
		portrait: {
			x: 0,
			y: -100
		},
		textures: {
			enabled:    "brushButtonEnabled",
			over:       "brushButtonOver",
			pressed:    "brushButtonPressed",
			disabled:   "brushButtonEnabled"
		},
		children: ["menu", "selected"]
	},
	menu: {
		type: "sprite",
		texture: "brushMenu",
		anchor: {
			x: 0.5,
			y: 0
		},
		x: 0,
		y: -26,
		children: ["coinButton", "keyButton", "wandButton"]
	},
	coinButton: {
		type: "button",
		x: 0,
		y: 69,
		anchor: 0.5,
		textures: {
			enabled:    "brushMenuSelector",
			over:       "brushMenuSelectorOver",
			pressed:    "brushMenuSelectorPressed",
			disabled:   "brushMenuSelector"
		},
		children: ["coin"]
	},
	coin: {
		type: "sprite",
		texture: "coin",
		x: -34,
		y: -20
	},
	keyButton: {
		type: "button",
		x: 0,
		y: 118,
		anchor: 0.5,
		textures: {
			enabled:    "brushMenuSelector",
			over:       "brushMenuSelectorOver",
			pressed:    "brushMenuSelectorPressed",
			disabled:   "brushMenuSelector"
		},
		children: ["key"]
	},
	key: {
		type: "sprite",
		texture: "key",
		x: -34,
		y: -20
	},
	wandButton: {
		type: "button",
		x: 0,
		y: 164,
		anchor: 0.5,
		textures: {
			enabled:    "brushMenuSelectorBottom",
			over:       "brushMenuSelectorBottomOver",
			pressed:    "brushMenuSelectorBottomPressed",
			disabled:   "brushMenuSelectorBottom"
		},
		children: ["wand"]
	},
	wand: {
		type: "sprite",
		texture: "wand",
		x: -34,
		y: -21
	},
	selected: {
		name: "selected",
		type: "sprite",
		x: -15,
		y: -2,
		anchor: 0.5,
		texture: "coin"
	},

	/*
	 * ERROR
	 */
	errorContainer: {
		type: "container",
		children: [
			"errorOverlay",
			"errorBackground",
			"errorTitle",
			"errorMessage",
			"errorExit",
			"timeoutExit",
			"timeoutContinue"
		],
	},
	errorOverlay: {
		type: "rectangle",
		fillAlpha: 0.5,
		fill: 0x000000,
		anchor: 0,
		x: 0,
		y: 0,
		landscape: {
			width: 800,
			height: 600,
		},
		portrait: {
			width: 640,
			height: 1136,
		}
	},
	errorBackground: {
		type: "rectangle",
		fill: 0xBBBBBB,
		lineWidth: 2,
		lineColor: 0x000000,
		radius: 4,
		landscape: {
			x: 50,
			y: 80,
			width: 700,
			height: 400
		},
		portrait: {
			x: 30,
			y: 234,
			width: 580,
			height: 700
		}
	},
	errorTitle: {
		type: "text",
		style: "messageText",
		anchor: 0.5,
		x: 0,
		y: -300
	},
	errorMessage: {
		type: "text",
		style: "messageText",
		anchor: 0.5,
		wordWrap: true,
		landscape: { x: 400, y: 260, wordWrapWidth: 650 },
		portrait: { x: 320, y: 528, wordWrapWidth: 500 }
	},
	errorExit: {
		type: "button",
		string: "button_exit",
		landscape: { x: 400, y: 480, scale: 0.8 },
		portrait: { x: 320, y: 934 },
		style: {
			enabled: "mainButtonEnabled",
			over: "mainButtonOver",
			pressed: "mainButtonPressed",
			disabled: "mainButtonDisabled"
		},
		textures: {
			enabled: "buttonBaseUp",
			over: "buttonBaseOver",
			pressed: "buttonBaseDown",
			disabled: "buttonBaseDisabled"
		}
	},
	timeoutExit: {
		type: "button",
		string: "button_exit",
		landscape: { x: 503, y: 480, scale: 0.8 },
		portrait: { x: 450, y: 934 },
		style: {
			enabled: "mainButtonEnabled",
			over: "mainButtonOver",
			pressed: "mainButtonPressed",
			disabled: "mainButtonDisabled"
		},
		textures: {
			enabled: "buttonBaseUp",
			over: "buttonBaseOver",
			pressed: "buttonBaseDown",
			disabled: "buttonBaseDisabled"
		}
	},
	timeoutContinue: {
		type: "button",
		string: "button_continue",
		landscape: { x: 297, y: 480, scale: 0.8 },
		portrait: { x: 190, y: 934 },
		style: {
			enabled: "mainButtonEnabled",
			over: "mainButtonOver",
			pressed: "mainButtonPressed",
			disabled: "mainButtonDisabled"
		},
		textures: {
			enabled: "buttonBaseUp",
			over: "buttonBaseOver",
			pressed: "buttonBaseDown",
			disabled: "buttonBaseDisabled"
		}
	}
});
