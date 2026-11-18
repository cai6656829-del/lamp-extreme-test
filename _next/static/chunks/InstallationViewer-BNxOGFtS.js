import{r as e}from"./rolldown-runtime-C60lm6uB.js";import{i as t,r as n}from"./framework-D_rUT4EX.js";import{$ as r,C as i,E as a,F as o,G as s,H as c,I as l,J as u,K as d,L as f,M as p,N as m,O as ee,P as h,R as g,S as _,U as v,V as y,Y as b,Z as x,a as S,at as C,b as w,d as T,et as E,f as te,g as ne,h as D,i as re,it as O,j as ie,k,m as ae,n as A,nt as j,o as oe,ot as se,p as ce,r as le,rt as M,s as N,st as P,tt as F,u as ue,v as de,w as fe,y as pe,z as me}from"./release-config-Br10SXOK.js";var I=e(t(),1),he={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},L=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},R=new g(-1,1,1,-1,0,1),z=new class extends D{constructor(){super(),this.setAttribute(`position`,new a([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new a([0,2,0,0,2,0],2))}},B=class{constructor(e){this._mesh=new h(z,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,R)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},ge=class extends L{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof b?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=F.clone(e.uniforms),this.material=new b({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new B(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},V=class extends L{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},_e=class extends L{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},ve=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new O);this._width=n.width,this._height=n.height,t=new P(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:k}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ge(he),this.copyPass.material.blending=0,this.timer=new E}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}V!==void 0&&(r instanceof V?n=!0:r instanceof _e&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new O);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},ye={name:`GTAOShader`,defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:`x`,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new O},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new m},cameraProjectionMatrixInverse:{value:new m},cameraWorldMatrix:{value:new m},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new C(-1,-1,-1)},sceneBoxMax:{value:new C(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},H={name:`GTAODepthShader`,defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},U={name:`GTAOBlendShader`,uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function W(e=5){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=be(t),r=n.length,i=new Uint8Array(r*4);for(let e=0;e<r;++e){let t=n[e],a=2*Math.PI*t/r,o=new C(Math.cos(a),Math.sin(a),0).normalize();i[e*4]=(o.x*.5+.5)*255,i[e*4+1]=(o.y*.5+.5)*255,i[e*4+2]=127,i[e*4+3]=255}let a=new w(i,t,t);return a.wrapS=s,a.wrapT=s,a.needsUpdate=!0,a}function be(e){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=t*t,r=Array(n).fill(0),i=Math.floor(t/2),a=t-1;for(let e=1;e<=n;){if(i===-1&&a===t?(a=t-2,i=0):(a===t&&(a=0),i<0&&(i=t-1)),r[i*t+a]!==0){a-=2,i++;continue}else r[i*t+a]=e++;a++,i--}return r}var G={name:`PoissonDenoiseShader`,defines:{SAMPLES:16,SAMPLE_VECTORS:K(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new O},cameraProjectionMatrixInverse:{value:new m},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function K(e,t,n){let r=q(e,t,n),i=`vec3[SAMPLES](`;for(let t=0;t<e;t++){let n=r[t];i+=`vec3(${n.x}, ${n.y}, ${n.z})${t<e-1?`,`:`)`}`}return i}function q(e,t,n){let r=[];for(let i=0;i<e;i++){let a=2*Math.PI*t*i/e,o=(i/(e-1))**n;r.push(new C(Math.cos(a),Math.sin(a),o))}return r}var J=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,r,i,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,s=Math.floor(e+o),c=Math.floor(t+o),l=(3-Math.sqrt(3))/6,u=(s+c)*l,d=s-u,f=c-u,p=e-d,m=t-f,ee,h;p>m?(ee=1,h=0):(ee=0,h=1);let g=p-ee+l,_=m-h+l,v=p-1+2*l,y=m-1+2*l,b=s&255,x=c&255,S=this.perm[b+this.perm[x]]%12,C=this.perm[b+ee+this.perm[x+h]]%12,w=this.perm[b+1+this.perm[x+1]]%12,T=.5-p*p-m*m;T<0?n=0:(T*=T,n=T*T*this._dot(this.grad3[S],p,m));let E=.5-g*g-_*_;E<0?r=0:(E*=E,r=E*E*this._dot(this.grad3[C],g,_));let te=.5-v*v-y*y;return te<0?i=0:(te*=te,i=te*te*this._dot(this.grad3[w],v,y)),70*(n+r+i)}noise3d(e,t,n){let r,i,a,o,s=(e+t+n)*(1/3),c=Math.floor(e+s),l=Math.floor(t+s),u=Math.floor(n+s),d=1/6,f=(c+l+u)*d,p=c-f,m=l-f,ee=u-f,h=e-p,g=t-m,_=n-ee,v,y,b,x,S,C;h>=g?g>=_?(v=1,y=0,b=0,x=1,S=1,C=0):h>=_?(v=1,y=0,b=0,x=1,S=0,C=1):(v=0,y=0,b=1,x=1,S=0,C=1):g<_?(v=0,y=0,b=1,x=0,S=1,C=1):h<_?(v=0,y=1,b=0,x=0,S=1,C=1):(v=0,y=1,b=0,x=1,S=1,C=0);let w=h-v+d,T=g-y+d,E=_-b+d,te=h-x+2*d,ne=g-S+2*d,D=_-C+2*d,re=h-1+3*d,O=g-1+3*d,ie=_-1+3*d,k=c&255,ae=l&255,A=u&255,j=this.perm[k+this.perm[ae+this.perm[A]]]%12,oe=this.perm[k+v+this.perm[ae+y+this.perm[A+b]]]%12,se=this.perm[k+x+this.perm[ae+S+this.perm[A+C]]]%12,ce=this.perm[k+1+this.perm[ae+1+this.perm[A+1]]]%12,le=.6-h*h-g*g-_*_;le<0?r=0:(le*=le,r=le*le*this._dot3(this.grad3[j],h,g,_));let M=.6-w*w-T*T-E*E;M<0?i=0:(M*=M,i=M*M*this._dot3(this.grad3[oe],w,T,E));let N=.6-te*te-ne*ne-D*D;N<0?a=0:(N*=N,a=N*N*this._dot3(this.grad3[se],te,ne,D));let P=.6-re*re-O*O-ie*ie;return P<0?o=0:(P*=P,o=P*P*this._dot3(this.grad3[ce],re,O,ie)),32*(r+i+a+o)}noise4d(e,t,n,r){let i=this.grad4,a=this.simplex,o=this.perm,s=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,l,u,d,f,p,m=(e+t+n+r)*s,ee=Math.floor(e+m),h=Math.floor(t+m),g=Math.floor(n+m),_=Math.floor(r+m),v=(ee+h+g+_)*c,y=ee-v,b=h-v,x=g-v,S=_-v,C=e-y,w=t-b,T=n-x,E=r-S,te=C>w?32:0,ne=C>T?16:0,D=w>T?8:0,re=C>E?4:0,O=w>E?2:0,ie=+(T>E),k=te+ne+D+re+O+ie,ae=+(a[k][0]>=3),A=+(a[k][1]>=3),j=+(a[k][2]>=3),oe=+(a[k][3]>=3),se=+(a[k][0]>=2),ce=+(a[k][1]>=2),le=+(a[k][2]>=2),M=+(a[k][3]>=2),N=+(a[k][0]>=1),P=+(a[k][1]>=1),F=+(a[k][2]>=1),ue=+(a[k][3]>=1),de=C-ae+c,fe=w-A+c,pe=T-j+c,me=E-oe+c,I=C-se+2*c,he=w-ce+2*c,L=T-le+2*c,R=E-M+2*c,z=C-N+3*c,B=w-P+3*c,ge=T-F+3*c,V=E-ue+3*c,_e=C-1+4*c,ve=w-1+4*c,ye=T-1+4*c,H=E-1+4*c,U=ee&255,W=h&255,be=g&255,G=_&255,K=o[U+o[W+o[be+o[G]]]]%32,q=o[U+ae+o[W+A+o[be+j+o[G+oe]]]]%32,J=o[U+se+o[W+ce+o[be+le+o[G+M]]]]%32,xe=o[U+N+o[W+P+o[be+F+o[G+ue]]]]%32,Se=o[U+1+o[W+1+o[be+1+o[G+1]]]]%32,Ce=.6-C*C-w*w-T*T-E*E;Ce<0?l=0:(Ce*=Ce,l=Ce*Ce*this._dot4(i[K],C,w,T,E));let we=.6-de*de-fe*fe-pe*pe-me*me;we<0?u=0:(we*=we,u=we*we*this._dot4(i[q],de,fe,pe,me));let Te=.6-I*I-he*he-L*L-R*R;Te<0?d=0:(Te*=Te,d=Te*Te*this._dot4(i[J],I,he,L,R));let Ee=.6-z*z-B*B-ge*ge-V*V;Ee<0?f=0:(Ee*=Ee,f=Ee*Ee*this._dot4(i[xe],z,B,ge,V));let Y=.6-_e*_e-ve*ve-ye*ye-H*H;return Y<0?p=0:(Y*=Y,p=Y*Y*this._dot4(i[Se],_e,ve,ye,H)),27*(l+u+d+f+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,r){return e[0]*t+e[1]*n+e[2]*r}_dot4(e,t,n,r,i){return e[0]*t+e[1]*n+e[2]*r+e[3]*i}},xe=class e extends L{constructor(e,t,n=512,r=512,i,a,s){super(),this.width=n,this.height=r,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=W(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new P(this.width,this.height,{type:k}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new b({defines:Object.assign({},ye.defines),uniforms:F.clone(ye.uniforms),vertexShader:ye.vertexShader,fragmentShader:ye.fragmentShader,blending:0,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=+!!this.camera.isPerspectiveCamera,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new o,this.normalMaterial.blending=0,this.pdMaterial=new b({defines:Object.assign({},G.defines),uniforms:F.clone(G.uniforms),vertexShader:G.vertexShader,fragmentShader:G.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new b({defines:Object.assign({},H.defines),uniforms:F.clone(H.uniforms),vertexShader:H.vertexShader,fragmentShader:H.fragmentShader,blending:0}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new b({uniforms:F.clone(he.uniforms),vertexShader:he.vertexShader,fragmentShader:he.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this.blendMaterial=new b({uniforms:F.clone(U.uniforms),vertexShader:U.vertexShader,fragmentShader:U.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:5,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this._fsQuad=new B(null),this._originalClearColor=new de,this.setGBuffer(i?i.depthTexture:void 0,i?i.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),s!==void 0&&this.updatePdMaterial(s)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e===void 0?(this.depthTexture=new i,this.depthTexture.format=_,this.depthTexture.type=M,this.normalRenderTarget=new P(this.width,this.height,{minFilter:f,magFilter:f,type:k,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0):(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1);let n=+!!this.normalTexture,r=this.depthTexture===this.normalTexture?`w`:`x`;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=r,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=r,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&+!!e.screenSpaceRadius!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=+!!e.screenSpaceRadius,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=K(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,n,r){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case e.OUTPUT.Off:break;case e.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:n);break;default:console.warn(`THREE.GTAOPass: Unknown output type.`)}}_renderPass(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r=t.clearColor||r,i=t.clearAlpha||i,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(e){(e.isPoints||e.isLine||e.isLine2)&&e.visible&&(e.visible=!1,t.push(e))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new J,n=e*e*4,r=new Uint8Array(n);for(let n=0;n<e;n++)for(let i=0;i<e;i++){let a=n,o=i;r[(n*e+i)*4]=(t.noise(a,o)*.5+.5)*255,r[(n*e+i)*4+1]=(t.noise(a+e,o)*.5+.5)*255,r[(n*e+i)*4+2]=(t.noise(a,o+e)*.5+.5)*255,r[(n*e+i)*4+3]=(t.noise(a+e,o+e)*.5+.5)*255}let i=new w(r,e,e,c,j);return i.wrapS=s,i.wrapT=s,i.needsUpdate=!0,i}};xe.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Se={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},Ce=class extends L{constructor(){super(),this.isOutputPass=!0,this.uniforms=F.clone(Se.uniforms),this.material=new v({name:Se.name,uniforms:this.uniforms,vertexShader:Se.vertexShader,fragmentShader:Se.fragmentShader}),this._fsQuad=new B(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},pe.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},we=class extends L{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new de}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},Te=[0,1,3],Ee=[0,.8333333134651184,1,3],Y={name:`clip_0`,duration:3,motionCompleteTime:1,sourceModelScale:1.085763617513582,existingModelScale:.9210107834429171,finalRootQuaternion:[-.7071067690849304,-4329780301713277e-32,.7071067690849304,-4329780301713277e-32],sourceFinalRootY:2.3218088150024414,sourceCeilingUndersideY:-.01678567938506605,sourceFinalTrimCenterX:1.0413452484990995,sourceFinalTrimCenterZ:.3672038233253694,sourceFinalTrimFrontY:-.1956085925517912,rootTimes:[...Te],rootY:[-14.71816349029541,2.3218088150024414,2.3218088150024414],ears:{tanhuan:{times:[...Ee],quaternions:[.9961947202682495,0,0,-.08715574443340302,.9902662634849548,-9890172330857015e-49,-7036565754687846e-48,-.1391858458518982,.3971337080001831,0,0,-.9177607893943787,.3971337080001831,0,0,-.9177607893943787]},tanhuan_1:{times:[...Ee],quaternions:[-.9961947202682495,3870492567932394e-32,-4423993261807311e-31,-.08715574443340302,-.994356095790863,471153011010691e-31,-44158281288935754e-32,-.10609422624111176,-.39056581258773804,40881743443741347e-32,-17344606310653622e-32,-.9205750226974487,-.39056581258773804,40881743443741347e-32,-17344606310653622e-32,-.9205750226974487]}}},X=n(),Z=`20261118-safe-hifi-heatsink`,De=`${A(`/models/az1-safe.glb`)}?v=${Z}`,Oe=`${A(`/models/lamp-safe.glb`)}?v=${Z}`,ke=`${A(`/models/heat-sink-ao-uv-test-safe.glb`)}?v=${Z}`,Ae=A(`/hdr/i_Phone_Boxes_Reflection-safe.hdr`),je=A(`/textures/assembled/az`),Me=A(`/textures/lamp`),Ne=A(`/textures/blender-ao`),Pe=A(`/textures/blender-ao-uv1`),Fe=`${A(`/textures/boli-extreme.webp`)}?v=${Z}`,Ie=`lamp-studio-installation-view-settings-v1`,Le=28,Re=[`BJ 1`,`TH 1`,`TH1 1`],ze={"BJ 1":`BJ`,"TH 1":`TH`,"TH1 1":`TH1`},Be=[[`Trim_1`,`Trim_1`],[`led_ls`,`led_ls`],[`TrimRing`,`TrimRing`],[`kehuanbe`,`kehuanbe`],[`boli`,`boli`],[`fanguange`,`fanguange`],[`HeatSink`,`HeatSink`],[`tanhuan_1`,`tanhuan_1`],[`edzhenggan`,`edzhenggan`],[`tanhuan`,`tanhuan`],[`edzhenggan1`,`edzhenggan1`],[`LED`,`LED`]],Ve={zoom:100,yaw:0,pitch:0},He=(e,t,n,r)=>{let i=Number(e);return Number.isFinite(i)?p.clamp(i,n,r):t},Ue=(e={})=>({zoom:He(e.zoom,Ve.zoom,60,180),yaw:He(e.yaw,Ve.yaw,-Le,Le),pitch:He(e.pitch,Ve.pitch,-60,60)}),Q=()=>{try{let e=window.localStorage.getItem(Ie);return e?Ue(JSON.parse(e)):Ve}catch{return Ve}},We={ready:!1,playing:!1,paused:!1,time:0,duration:Y.duration},$=(e,t,n,r)=>({color:e,opacity:1,metalness:n,roughness:t,normalScale:1,aoMapIntensity:1,envMapIntensity:r,emissive:`#000000`,emissiveIntensity:0,transmission:0,thickness:0,ior:1.5,clearcoat:0,clearcoatRoughness:0,sheen:0,sheenRoughness:1,specularIntensity:1,reflectivity:.5,iridescence:0,iridescenceIOR:1.3,dispersion:0,anisotropy:0,anisotropyRotation:0,alphaTest:0,attenuationColor:`#ffffff`,attenuationDistance:1e3,specularColor:`#ffffff`,sheenColor:`#ffffff`}),Ge={side:`double`,depthWrite:!1,renderOrder:0,transmissionResolutionScale:1,overlayOpacity:.5,color:`#000000`,emissive:`#f0f0f0`,emissiveIntensity:0,opacity:.993,metalness:1,roughness:.046,transmission:.12,thickness:.43,ior:1.64,clearcoat:1,clearcoatRoughness:.42,sheen:.253,sheenRoughness:.036,envMapIntensity:.51,aoMapIntensity:.13,normalScale:.66,specularIntensity:1,specularColor:`#ffffff`,reflectivity:1,iridescence:.29,iridescenceIOR:1.25,dispersion:.02,anisotropy:.09,anisotropyRotation:.49,alphaTest:0,attenuationColor:`#4a2d22`,attenuationDistance:18.9,sheenColor:`#ffffff`},Ke={...$(`#ffc547`,1,1,1),emissive:`#ffa500`,emissiveIntensity:.84,ior:1.47,specularColor:`#ffee99`,reflectivity:.38},qe=2,Je={...$(`#4C4442`,1,.97,1.25),normalScale:1.11,aoMapIntensity:.82,emissive:`#ffffff`,specularColor:`#757575`,sheenColor:`#f5f5f5`,attenuationColor:`#969696`},Ye={...$(`#ffffff`,1,1,1.18),normalScale:.78,aoMapIntensity:.86},Xe=$(`#ffffff`,1,1,1),Ze=$(`#ffffff`,1,1,1.12),Qe={overlayOpacity:.17,opacity:.537,metalness:1,roughness:0,transmission:0,thickness:2,ior:2.5,clearcoat:0,clearcoatRoughness:0,sheen:0,sheenRoughness:0,envMapIntensity:0,aoMapIntensity:0,normalScale:1.11,emissiveIntensity:0,specularIntensity:1,reflectivity:1,iridescence:0,iridescenceIOR:1,dispersion:0,anisotropy:.09,anisotropyRotation:.49,alphaTest:0,attenuationDistance:57};function $e(){let e=(0,I.useRef)(null),[t,n]=(0,I.useState)(`LOADING INSTALLATION`),[i,a]=(0,I.useState)(0),[o,s]=(0,I.useState)(We),[c,f]=(0,I.useState)(Ve),[m,g]=(0,I.useState)(`ready`),[_,v]=(0,I.useState)(!0),b=(0,I.useRef)(Ve),w=(0,I.useRef)(null),E=(0,I.useRef)(null),[,D]=(0,I.useState)(1),O=(0,I.useRef)(1),j=e=>{let t=p.clamp(e,0,1);O.current=t,D(t)};(0,I.useEffect)(()=>{let e=requestAnimationFrame(()=>{window.matchMedia(`(max-width: 640px)`).matches&&v(!1);let e=Q();b.current=e,f(e);try{g(window.localStorage.getItem(Ie)?`saved`:`ready`)}catch{g(`ready`)}w.current?.apply(e)});return()=>cancelAnimationFrame(e)},[]),(0,I.useEffect)(()=>{let t=e.current;if(!t)return;let i=window;i.setEarFold=j;let o=!1,c=new URLSearchParams(window.location.search),m=c.get(`ao`),_=m===`blender`,v=m===`uv-static`||m===`uv-dynamic`,D=m===null||m===`dynamic`||m===`uv-dynamic`,O=(e,t,n,r)=>{let i=Number(c.get(e));return Number.isFinite(i)?p.clamp(i,n,r):t},A=O(`gtaoRadius`,1.1,.25,5),M=O(`gtaoIntensity`,1,0,1),F=O(`gtaoScale`,1.2,.5,2),pe=Math.round(O(`gtaoSamples`,12,4,24)),I=O(`gtaoResolution`,.7,.4,1),he=O(`uvAoIntensity`,1,0,2),L=new ue({antialias:!0,alpha:!0,powerPreference:`high-performance`});L.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),L.outputColorSpace=d,L.toneMapping=4,L.toneMappingExposure=.86,L.shadowMap.enabled=!0,L.shadowMap.type=1,t.appendChild(L.domElement);let R=new u,z=new me(20,1,.1,1e3),B=new N(z,L.domElement);B.enableDamping=!1,B.enablePan=!1,B.zoomSpeed=.64,B.minAzimuthAngle=-p.degToRad(Le),B.maxAzimuthAngle=p.degToRad(Le),B.enableRotate=!0,B.rotateSpeed=.42;let ge=new T(new de(`#ffffff`),1.45),V=new fe(new de(`#fff8ee`),4.6);V.position.set(9,14,11),V.castShadow=!0,V.shadow.mapSize.set(window.matchMedia(`(max-width: 760px)`).matches?512:1024,window.matchMedia(`(max-width: 760px)`).matches?512:1024),V.shadow.camera.near=.1,V.shadow.camera.far=80,V.shadow.camera.left=-24,V.shadow.camera.right=24,V.shadow.camera.top=24,V.shadow.camera.bottom=-24,V.shadow.bias=-15e-5,V.shadow.normalBias=.035;let _e=new fe(new de(`#dce7ef`),2.15);_e.position.set(-10,7,-8),R.add(ge,V,_e);let ye=D&&!window.matchMedia(`(max-width: 760px)`).matches?new P(1,1,{type:k,samples:4}):null,H=ye?new ve(L,ye):null,U=H?new Ce:null,W=H?new xe(R,z,1,1,void 0,{radius:A,distanceExponent:1.35,thickness:1.25,distanceFallOff:1.1,scale:F,samples:pe,screenSpaceRadius:!1},{radius:5,radiusExponent:2,rings:2,samples:12,lumaPhi:10,depthPhi:2.5,normalPhi:3}):null;H&&W&&U&&(W.output=xe.OUTPUT.Default,W.blendIntensity=M,H.addPass(new we(R,z)),H.addPass(W),H.addPass(U));let be=()=>{let{width:e,height:n}=t.getBoundingClientRect();if(!(!e||!n)&&(L.setSize(e,n,!1),z.aspect=e/n,z.updateProjectionMatrix(),H&&W)){H.setSize(e,n);let t=L.getPixelRatio();W.setSize(Math.max(1,Math.floor(e*t*I)),Math.max(1,Math.floor(n*t*I)))}},G=new ResizeObserver(be);G.observe(t),be();let K=e=>{e.updateWorldMatrix(!0,!0);let t=new ae().setFromObject(e,!0);if(t.isEmpty())return;let n=t.getCenter(new C),r=t.getSize(new C),i=r.x*.5,a=r.y*.5,o=r.z*.5,s=new C(1,0,0).applyQuaternion(z.quaternion),c=new C(0,1,0).applyQuaternion(z.quaternion),l=z.getWorldDirection(new C),u=Math.abs(s.x)*i+Math.abs(s.y)*a+Math.abs(s.z)*o,d=Math.abs(c.x)*i+Math.abs(c.y)*a+Math.abs(c.z)*o,f=Math.max(.001,n.sub(z.position).dot(l)),m=p.degToRad(z.fov*.5),ee=Math.max(d/(Math.tan(m)*.23),u/(Math.tan(m)*z.aspect*.34));z.position.addScaledVector(l,Math.max(0,f-ee)),z.updateMatrixWorld()},q=new C,J=0,Se=0,Te=0,Ee=!1,X=()=>{q.copy(z.position).sub(B.target),J=Math.max(.001,q.length());let e=new x().setFromVector3(q);Se=e.theta,Te=e.phi,B.minDistance=J/1.8,B.maxDistance=J/.6,B.minAzimuthAngle=Se-p.degToRad(Le),B.maxAzimuthAngle=Se+p.degToRad(Le)},Ie=e=>{if(!(J<=0)){Ee=!0;try{let t=new x(J/(e.zoom/100),p.clamp(Te-p.degToRad(e.pitch),.12,Math.PI-.12),Se+p.degToRad(e.yaw));z.position.copy(B.target).add(new C().setFromSpherical(t)),z.lookAt(B.target),z.updateMatrixWorld(),B.update()}finally{Ee=!1}}},Ve=()=>{if(Ee||J<=0)return;let e=new x().setFromVector3(z.position.clone().sub(B.target)),t=((p.radToDeg(e.theta-Se)+180)%360+360)%360-180,n=p.radToDeg(Te-e.phi),r=Ue({zoom:J/e.radius*100,yaw:t,pitch:n}),i=b.current;Math.abs(r.zoom-i.zoom)<.1&&Math.abs(r.yaw-i.yaw)<.1&&Math.abs(r.pitch-i.pitch)<.1||(b.current=r,f(r),g(`unsaved`))};B.addEventListener(`change`,Ve),w.current={apply:Ie};let He=null,Q=null,We=null,$=!1,$e=!1,et=1,tt=!1,nt=!1,rt=0,it=0,at=()=>{tt||!We||(K(We),X(),Ie(b.current),tt=!0)},ot=(e=!1)=>{if(!Q||o)return;let t=performance.now();if(!e&&t-it<80)return;it=t;let n=p.clamp(Q.time,0,Y.duration);s({ready:!0,playing:$,paused:$e,time:n,duration:Y.duration})},st=()=>{Q&&($=!1,$e=!1,Q.paused=!0,Q.time=Y.duration,at(),o||n(`PRODUCT INSTALLED`),ot(!0))},ct=0,lt=[],ut=[],dt=new oe,ft=new re;ft.setDRACOLoader(dt);let pt=3+(Re.length*3+Be.length*3+1+1+(_?Re.length+Be.length:0)+ +!!v)+ +!!v,mt=0,ht=()=>{mt+=1,o||a(Math.round(mt/pt*100))},gt=e=>e.finally(ht),_t=async(e,t,n=!1)=>{try{let r=await e.loadAsync(t);return r.flipY=!1,r.anisotropy=Math.min(8,L.capabilities.getMaxAnisotropy()),n&&(r.colorSpace=d),r.needsUpdate=!0,lt.push(r),r}finally{ht()}},vt=async(e,t)=>{let n=await _t(e,t);return n.colorSpace=``,n},yt=async()=>{try{let e=new r,t=Re.map(async t=>{let[n,r,i,a]=await Promise.all([_t(e,`${je}/${encodeURIComponent(t)}_baseColor-extreme.webp?v=${Z}`,!0),_t(e,`${je}/${encodeURIComponent(t)}_normal-extreme.webp?v=${Z}`),_t(e,`${je}/${encodeURIComponent(t)}_occlusionRoughnessMetallic-extreme.webp?v=${Z}`),_?vt(e,`${Ne}/${ze[t]}_AO-extreme.webp?v=${Z}`):Promise.resolve(void 0)]);return[t,{baseColor:n,normal:r,orm:i,ao:a}]}),i=Promise.all(Be.map(async([t,n])=>{let r=v&&t===`HeatSink`,i=n===`HeatSink`?`hifi`:`extreme`,[a,o,s,c,l]=await Promise.all([_t(e,`${Me}/${n}_baseColor-${i}.webp?v=${Z}`,!0),_t(e,`${Me}/${n}_normal-${i}.webp?v=${Z}`),_t(e,`${Me}/${n}_occlusionRoughnessMetallic-${i}.webp?v=${Z}`),t===`LED`?_t(e,`${Me}/LED_emissive-extreme.webp?v=${Z}`,!0):Promise.resolve(void 0),_?vt(e,`${Ne}/${encodeURIComponent(n)}_AO-${i}.webp?v=${Z}`):r?vt(e,`${Pe}/HeatSink_AO-hifi.webp?v=${Z}`):Promise.resolve(void 0)]);return[t,{baseColor:a,normal:o,orm:s,emissive:c,ao:l}]})),s=v?gt(ft.loadAsync(ke)):Promise.resolve(null),c=Ae.endsWith(`.exr`)?new S:new le,[u,f,g,b,x,w,T]=await Promise.all([gt(ft.loadAsync(De)),gt(ft.loadAsync(Oe)),gt(c.loadAsync(Ae)),Promise.all(t),i,_t(e,Fe,!0),s]);if(o)return;g.mapping=303,R.environment=g;let D=u.scene,re=D.getObjectByName(`BJ`);re&&(re.visible=!1);let O=new Map(b),k=new Set;D.traverse(e=>{if(!(e instanceof h))return;e.receiveShadow=!0;let t=Array.isArray(e.material)?e.material[0]:e.material,n=O.get(t.name);if(!n)return;k.add(t);let r=m===`legacy`&&(t.name===`BJ 1`||t.name===`TH 1`),i=_||r,a=_?n.ao??n.orm:r?n.orm:void 0,o=_?1:t.name===`TH 1`?.3:+!!r,s=e.geometry.getAttribute(`uv`);i&&s&&!e.geometry.getAttribute(`uv2`)&&e.geometry.setAttribute(`uv2`,s.clone());let c=new l({map:n.baseColor,normalMap:n.normal,aoMap:a,aoMapIntensity:o,roughnessMap:n.orm,metalnessMap:n.orm,color:`#ffffff`,roughness:1,metalness:1,envMapIntensity:1.15});c.normalScale.setScalar(1),e.material=c,ut.push(c)}),k.forEach(e=>e.dispose()),R.add(D);let A=new Map(x);v&&A.get(`HeatSink`)?.ao&&(A.get(`HeatSink`).ao.channel=1);let j={};try{let e=window.localStorage.getItem(`lamp-studio-material-settings-v1`);e&&(j=JSON.parse(e))}catch{}let oe=A.get(`boli`);if(oe?.baseColor.image&&w.image){let e=oe.baseColor.image,t=w.image,n=document.createElement(`canvas`);n.width=e.naturalWidth??e.width??2048,n.height=e.naturalHeight??e.height??2048;let r=n.getContext(`2d`);if(r){r.drawImage(e,0,0,n.width,n.height),r.globalAlpha=Number(Qe.overlayOpacity),r.drawImage(t,0,0,n.width,n.height);let i=new ne(n);i.colorSpace=d,i.flipY=!1,i.anisotropy=Math.min(8,L.capabilities.getMaxAnisotropy()),i.needsUpdate=!0,lt.push(i),oe.baseColor=i}}let M=new Map,N={...Ge,...j.glass,...Qe},P={...Ke,...j.led,emissiveIntensity:qe},F={...Je,...j.reflector},ue={...Ye,...j.fanguange},de={...Xe,...j.trim1},fe={...Ze,...j.heatsink},pe=e=>{let{normalScale:t,side:n,overlayOpacity:r,transmissionResolutionScale:i,renderOrder:a,...o}=e;return{parameters:o,normalScale:typeof t==`number`?t:1,side:n===`front`?0:2,renderOrder:typeof a==`number`?a:0}},me=(e,t={},n={})=>{let r=A.get(e);if(!r)throw Error(`Missing lamp textures for ${e}`);let i=v&&e===`HeatSink`&&!!r.ao,{parameters:a,normalScale:o}=pe(t),s=new l({name:`${e}_PainterPBR`,map:r.baseColor,normalMap:r.normal,aoMap:_||i?r.ao??r.orm:r.orm,aoMapIntensity:1,roughnessMap:r.orm,metalnessMap:r.orm,color:`#ffffff`,roughness:1,metalness:1,envMapIntensity:1,...a,...n});return i&&(s.aoMapIntensity=he),s.normalScale.setScalar(o),e===`LED`&&r.emissive&&(s.emissiveMap=r.emissive,s.emissive.set(String(P.emissive)),s.emissiveIntensity=Number(P.emissiveIntensity)),ut.push(s),s};Be.forEach(([e])=>{let t=me(e,e===`LED`?P:e===`boli`?N:e===`kehuanbe`?F:e===`fanguange`?ue:e===`Trim_1`?de:e===`HeatSink`?fe:{},e===`boli`?{side:N.side===`front`?0:2,transparent:typeof N.opacity==`number`?N.opacity<1:!0,depthWrite:typeof N.depthWrite==`boolean`?N.depthWrite:!1}:e===`kehuanbe`?{map:null}:{});e===`boli`&&(t.renderOrder=typeof N.renderOrder==`number`?N.renderOrder:0),M.set(e.toLowerCase().replace(/[\s._:/-]+/g,``),t)});let I=new ee;if(I.name=`InstalledLamp`,I.quaternion.fromArray(Y.finalRootQuaternion),I.add(f.scene),f.scene.traverse(e=>{if(!(e instanceof h))return;e.castShadow=!0,e.receiveShadow=!0;let t=e.name.toLowerCase().replace(/[\s._:/-]+/g,``),n=M.get(t);n&&(e.material=n)}),v&&T){let e=f.scene.getObjectByName(`HeatSink`),t=T.scene.getObjectByName(`HeatSink`);e instanceof h&&t instanceof h&&(e.geometry=t.geometry)}R.add(I),I.updateWorldMatrix(!0,!0);let ge=f.scene.getObjectByName(`Trim_1`),V=D.getObjectByName(`TH`);if(!(ge instanceof h)||!(V instanceof h))throw Error(`Installation mounting geometry is unavailable`);I.updateWorldMatrix(!0,!0);let _e=new ae().setFromObject(ge,!0).getCenter(new C);I.position.x+=Y.sourceFinalTrimCenterX-_e.x,I.position.z+=Y.sourceFinalTrimCenterZ-_e.z,I.updateWorldMatrix(!0,!0);let ve=new ae().setFromObject(ge,!0),ye=new ae().setFromObject(V,!0).min.y+(Y.sourceFinalTrimFrontY-Y.sourceCeilingUndersideY)*Y.existingModelScale;I.position.y+=ye-ve.min.y;let H=I.position.y,U=I.position.x,W=I.position.z,be=Y.rootY.flatMap(e=>[U,H+(e-Y.sourceFinalRootY)*Y.existingModelScale,W]),G=new te(`${Y.name}-installation`,Y.duration,[new se(`InstalledLamp.position`,Y.rootTimes,be),new y(`tanhuan.quaternion`,Y.ears.tanhuan.times,Y.ears.tanhuan.quaternions),new y(`tanhuan_1.quaternion`,Y.ears.tanhuan_1.times,Y.ears.tanhuan_1.quaternions)]),K=new ce(R),q=K.clipAction(G);q.setLoop(ie,1),q.clampWhenFinished=!0,q.play(),K.update(0),He=K,Q=q,We=I,$=!0,$e=!1,K.addEventListener(`finished`,()=>{o||st()});let J=e=>{(e||q.time>=Y.duration-1e-4)&&(q.stop(),q.reset(),q.play(),nt=!1),q.enabled=!0,q.paused=!1,et=1,$=!0,$e=!1,n(q.time>=Y.motionCompleteTime-.001?`PRODUCT INSTALLED`:`INSTALLING PRODUCT`),ot(!0)};E.current={play:()=>J(!1),pause:()=>{$&&(q.paused=!0,$=!1,$e=!0,n(`INSTALLATION PAUSED`),ot(!0))},resume:()=>{if(q.time<=1e-4){J(!1);return}q.enabled=!0,q.paused=!1,$=!0,$e=!1,n(et<0?`REVERSING INSTALLATION`:q.time>=Y.motionCompleteTime-.001?`PRODUCT INSTALLED`:`INSTALLING PRODUCT`),ot(!0)},reverse:()=>{q.time<=1e-4&&(q.stop(),q.reset(),q.play(),q.time=Y.duration,K.update(0)),q.enabled=!0,q.paused=!1,et=-1,$=!0,$e=!1,n(`REVERSING INSTALLATION`),ot(!0)},replay:()=>J(!0),reset:()=>{q.stop(),q.reset(),q.play(),q.paused=!0,K.update(0),$=!1,$e=!1,et=1,nt=!1,n(`READY TO INSTALL`),ot(!0)},seek:e=>{let t=p.clamp(e,0,1)*Y.duration;q.paused=!0,q.time=t,K.update(0),$=!1,$e=t>0,t>=Y.motionCompleteTime-.001&&at(),n(t>=Y.motionCompleteTime-.001?`PRODUCT INSTALLED`:t<=0?`READY TO INSTALL`:`INSTALLATION PAUSED`),ot(!0)}};let xe=new C(Y.sourceFinalTrimCenterX,H+1.1,Y.sourceFinalTrimCenterZ);z.position.copy(xe).add(new C(0,-7.5058,28.0118)),B.target.copy(xe),B.minDistance=1,B.maxDistance=38,B.update(),a(100),n(`INSTALLING PRODUCT`),ot(!0)}catch(e){console.error(`Unable to load installation model`,e),o||n(`INSTALLATION MODEL UNAVAILABLE`)}},bt=e=>{ct=requestAnimationFrame(bt);let t=rt?Math.min(.05,Math.max(0,(e-rt)/1e3)):0;rt=e,He&&$&&He.update(t*et),Q&&$&&et<0&&Q.time<=1e-4&&(Q.paused=!0,Q.time=0,$=!1,$e=!1,nt=!1,n(`READY TO INSTALL`),ot(!0)),Q&&$&&Q.time>=Y.duration-1e-4&&st(),Q&&!nt&&Q.time>=Y.motionCompleteTime-.001&&(nt=!0,at(),o||n(`PRODUCT INSTALLED`)),Q&&ot(),B.update(),H?H.render(t):L.render(R,z)};return yt(),ct=requestAnimationFrame(bt),()=>{o=!0,cancelAnimationFrame(ct),G.disconnect(),B.removeEventListener(`change`,Ve),B.dispose(),dt.dispose(),E.current=null,w.current=null,He?.stopAllAction(),i.setEarFold===j&&delete i.setEarFold,lt.forEach(e=>e.dispose()),ut.forEach(e=>e.dispose()),W?.dispose(),U?.dispose(),H?.dispose(),L.dispose(),L.domElement.remove()}},[]);let M=o.duration>0?o.time/o.duration:0;return`${c.yaw}`,c.pitch*.16,(0,X.jsxs)(`main`,{className:`installation-stage`,ref:e,children:[(0,X.jsx)(`div`,{className:`installation-stage__horizon`,"aria-hidden":`true`}),(0,X.jsx)(`div`,{className:`installation-stage__wordmark`,"aria-hidden":`true`,children:`INSTALL`}),(0,X.jsxs)(`header`,{className:`installation-stage__header`,children:[(0,X.jsxs)(`div`,{children:[(0,X.jsx)(`span`,{children:`03`}),(0,X.jsx)(`h1`,{children:`PRODUCT INSTALLATION`}),(0,X.jsx)(`p`,{children:t===`LOADING INSTALLATION`?`${t} ${i}%`:t})]}),(0,X.jsx)(`a`,{href:A(`/`),className:`installation-stage__back`,children:`← PRODUCT VIEW`})]}),!1,(0,X.jsxs)(`section`,{className:`installation-transport`,"aria-label":`Installation animation controls`,children:[(0,X.jsxs)(`div`,{className:`installation-transport__row`,children:[(0,X.jsx)(`span`,{className:`installation-transport__step`,children:`STEP 01 / 01`}),(0,X.jsxs)(`div`,{className:`installation-transport__buttons`,children:[(0,X.jsx)(`button`,{type:`button`,onClick:()=>E.current?.play(),disabled:!o.ready||o.playing,title:`播放当前安装动作`,children:`PLAY`}),(0,X.jsx)(`button`,{type:`button`,onClick:()=>o.playing?E.current?.pause():E.current?.resume(),disabled:!o.ready||!o.playing&&!o.paused,title:o.playing?`暂停`:`继续播放`,children:o.playing?`PAUSE`:`CONTINUE`}),(0,X.jsx)(`button`,{type:`button`,onClick:()=>E.current?.reverse(),disabled:!o.ready,title:`反向播放安装动画`,children:`REVERSE`}),(0,X.jsx)(`button`,{type:`button`,disabled:!0,title:`YUNDO GLB 中只有一个动画步骤`,children:`PREV`}),(0,X.jsx)(`button`,{type:`button`,disabled:!0,title:`YUNDO GLB 中只有一个动画步骤`,children:`NEXT`}),(0,X.jsx)(`button`,{type:`button`,onClick:()=>E.current?.replay(),disabled:!o.ready,title:`重播当前步骤`,children:`REPLAY`}),(0,X.jsx)(`button`,{type:`button`,onClick:()=>E.current?.replay(),disabled:!o.ready,title:`连续播放全部真实动画`,children:`ALL`}),(0,X.jsx)(`button`,{type:`button`,onClick:()=>E.current?.reset(),disabled:!o.ready,title:`重置到初始安装状态`,children:`RESET`})]})]}),(0,X.jsxs)(`label`,{className:`installation-transport__progress`,children:[(0,X.jsx)(`span`,{children:`PROGRESS`}),(0,X.jsx)(`input`,{type:`range`,min:`0`,max:`100`,step:`0.1`,value:M*100,disabled:!o.ready,onChange:e=>E.current?.seek(Number(e.target.value)/100)}),(0,X.jsxs)(`output`,{children:[Math.round(M*100),`% · `,o.time.toFixed(2),` / `,o.duration.toFixed(2),`s`]})]})]}),(0,X.jsx)(`p`,{className:`installation-stage__hint`,children:`DRAG TO INSPECT · SCROLL TO ZOOM`})]})}export{$e as default};