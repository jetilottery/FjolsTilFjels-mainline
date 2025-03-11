define(function(require) {
	const PIXI = require("com/pixijs/pixi");

	let shaders = {};

	shaders.init = function init() {
		let snow = {
			uniformConfig: {
				time: {
					type: "f",
					value: 0.0
				},
				alpha: {
					type: "f",
					value: 0.0
				}
			},
			vert: "",
			frag: "precision highp float;\n" +
			"varying vec2 vTextureCoord;\n" +
			"uniform sampler2D uSampler;\n" +
			"uniform vec2 dimensions;\n" +
			"uniform vec4 filterArea;\n" +
			"uniform float time;\n" +
			"uniform float alpha;\n" +
			"#define _totalFlakes 100\n" +
			"#define _windSpeed 0.2\n" +
			"float rnd(float x) {\n" +
			"    return fract(sin(dot(vec2(x+47.49,38.2467/(x+2.3)), vec2(12.9898, 78.233)))* (43758.5453));\n" +
			"}\n" +
			"void main() {\n" +
			"    float j;\n" +
			"	 vec4 color = texture2D(uSampler, vTextureCoord);\n" +
			"    for(int i = 0; i <_totalFlakes; i++) {\n" +
			"        j = float(i);\n" +
			"        float speed = 0.3+rnd(cos(j))*(0.7+0.5*cos(j/(float(_totalFlakes)*0.25)));\n" +
			"        vec2 center = vec2((0.25-vTextureCoord.y)*_windSpeed+rnd(j)+0.1*cos(time+sin(j)), mod(sin(j)+speed*(time*1.5*(0.1+_windSpeed)), 0.65));\n" +
			"        color += vec4(alpha*0.19*(1.0 - smoothstep(0.0, 0.001+speed*0.006, length(vTextureCoord - center))));\n" +
			"    }\n" +
			"	 gl_FragColor = color;\n" +
			"}\n",
			filter: null
		};
		snow.filter = new PIXI.Filter(null, snow.frag, snow.uniformConfig);
		PIXI.ticker.shared.add(() => {
			snow.filter.uniforms.time += PIXI.ticker.shared.elapsedMS / 1000;
		});
		shaders.snow = snow.filter;

		let CRT = {
			frag: "precision mediump float;\n" +
			"varying vec2 vTextureCoord;\n" +
			"uniform sampler2D uSampler;\n" +
			"uniform vec2 dimensions;\n" +
			"uniform vec4 filterArea;\n" +
			"\n" +
			"vec2 mapCoord( vec2 coord )\n" +
			"{\n" +
			"	coord *= filterArea.xy;\n" +
			"\n" +
			"	return coord;\n" +
			"}\n" +
			"\n" +
			"vec2 unmapCoord( vec2 coord )\n" +
			"{\n" +
			"	coord /= filterArea.xy;\n" +
			"\n" +
			"	return coord;\n" +
			"}\n" +
			"\n" +
			"vec2 warpAmount = vec2( 2.0 / 34.0, 1.0 / 16.0 );\n" +
			"\n" +
			"vec2 warp(vec2 pos)\n" +
			"{\n" +
			"	pos = pos * 2.0 - 1.0;\n" +
			"	pos *= vec2(\n" +
			"		1.0 + (pos.y * pos.y) * warpAmount.x,\n" +
			"		1.0 + (pos.x * pos.x) * warpAmount.y\n" +
			"	);\n" +
			"	return pos * 0.5 + 0.5;;\n" +
			"}\n" +
			"\n" +
			"void main() {\n" +
			"	vec2 coord = vTextureCoord;\n" +
			"	coord = mapCoord(coord ) / dimensions;\n" +
			"	coord = warp( coord );\n" +
			"	coord = unmapCoord(coord * dimensions);\n" +
			"	gl_FragColor = texture2D( uSampler, coord );\n" +
			"}\n",
			filter: null
		};
		CRT.filter = new PIXI.Filter(null, CRT.frag);
		CRT.filter.apply = function(filterManager, input, output) {
			this.uniforms.dimensions[0] = input.sourceFrame.width;
			this.uniforms.dimensions[1] = input.sourceFrame.height;

			// draw the filter...
			filterManager.applyFilter(this, input, output);
		};
		shaders.CRT = CRT.filter;
		delete shaders.init;
	};

	return shaders;
});