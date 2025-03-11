define({
    _BASE_RESULTPLAQUES: {
        children: ["resultPlaques"]
    },
    /*
     * INTRO
     */
    resultPlaques: {
        type: "rectangle",
        children: ["winPlaque", "losePlaque", "viewResultButton", "okButton"],
        x: 0,
        y: 0,
        width: 1024,
        height: 1136,
        fill: 0x000000,
        fillAlpha: 0.8
    },
        /*
         * Win
         */
        winPlaque: {
            type: "container",
            portrait: {
                x: 0,
                y: 0
            },
            landscape: {
                x: 0,
                y: 30
            },
            children: ["burst2", "burst3", "winPopUp"]
        },
            burst2: {
                type: "sprite",
				portrait: {
					x: 320,
					y: 568,
					scale: 2
				},
				landscape: {
					x: 400,
					y: 300
				},
                anchor: 0.5,
                texture: "popUpWinSunBurst"
            },
			burst3: {
				type: "sprite",
				portrait: {
					x: 320,
					y: 568,
					scale: 2
				},
				landscape: {
					x: 400,
					y: 300
				},
				anchor: 0.5,
				texture: "popUpWinSunBurst"
			},
            winPopUp: {
                type: "sprite",
				portrait: {
					x: 321,
					y: 510
				},
				landscape: {
					x: 400,
					y: 262
				},
                anchor: 0.5,
                texture: "popUpWinPanel",
                children: ["popUpWinHeader", "popUpWinSubheader", "popUpWinPrize", "popUpBigWin"]
            },
				popUpBigWin: {
					type: "container",
					x: 0,
					y: 0
				},
				popUpWinHeader: {
                    type: "text",
                    style: "popUpHeader",
                    string: "congratulationsRP",
                    anchor: 0.5,
					rotation: -0.0916297857297023,
                    x: -1,
                    y: -107
                },
				popUpWinSubheader: {
					type: "text",
					style: "popUpSubheader",
					string: "youWinRP",
					anchor: 0.5,
					rotation: -0.0916297857297023,
					x: -3,
					y: -28
				},
                popUpWinPrize: {
					type: "text",
					style: "popUpPrize",
					string: "",
					anchor: 0.5,
					rotation: -0.0916297857297023,
					x: -1,
					y: 45
                },
        losePlaque: {
            type: "container",
            children: ["losePopUp"],
			portrait: {
				x: 0,
				y: 0
			},
			landscape: {
				x: 0,
				y: 30
			}
        },
            losePopUp: {
                type: "sprite",
                portrait: {
					x: 324,
					y: 514
				},
				landscape: {
					x: 404,
					y: 264
				},
                anchor: 0.5,
                texture: "popUpLosePanel",
                children: ["popUpLoseHeader", "popUpLoseSubheader"]
            },
				popUpLoseHeader: {
					type: "text",
					style: "popUpLoseHeader",
					string: "sorryRP",
					anchor: 0.5,
					x: -1,
					y: -109
				},
				popUpLoseSubheader: {
					type: "text",
					style: "popUpLoseSubheader",
					string: "nextTimeRP",
					anchor: 0.5,
					x: -9,
					y: -2
				},
        viewResultButton: {
            type:           "button",
            portrait: {
                x:          226,
                y:          713,
                scale:		0.9
            },
            landscape: {
                x:          335,
                y:          514,
                scale:      0.67
            },
            string:         "button_viewResult",
            textures: {
                enabled:    "buttonBaseSmallUp",
                over:       "buttonBaseSmallOver",
                pressed:    "buttonBaseSmallDown",
                disabled:   "buttonBaseSmallDisabled"
            },
            style: {
                enabled:    "mainButtonEnabled",
                over:       "mainButtonOver",
                pressed:    "mainButtonPressed",
                disabled:   "mainButtonDisabled"
            }
        },
        okButton: {
            type:           "button",
            portrait: {
                x:          420,
                y:          713,
                scale: 		0.9
            },
            landscape: {
                x:          473,
                y:          513,
                scale:      0.67
            },
            string:         "button_ok",
            textures: {
                enabled:    "buttonBaseSmallUp",
                over:       "buttonBaseSmallOver",
                pressed:    "buttonBaseSmallDown",
                disabled:   "buttonBaseSmallDisabled"
            },
            style: {
                enabled:    "mainButtonEnabled",
                over:       "mainButtonOver",
                pressed:    "mainButtonPressed",
                disabled:   "mainButtonDisabled"
            }
        }
});