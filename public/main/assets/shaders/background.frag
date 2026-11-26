#version 300 es
precision highp float;
// NOTE: Soy demasiado estúpido para esto, no me hagas preguntas sobre esto. El 99% de este código no es mio. NO se hacer shaders.

uniform vec2 u_resolution;
uniform float u_time;
uniform vec3 u_color_a, u_color_b;

out vec4 outColor;

float hash(vec2 p) {
  p = fract(p * vec2(123.34f, 456.21f));
  return fract((p.x + p.y + dot(p, p)) * 45.32f);
}

float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0f - 2.0f * f);

  vec4 h = vec4(hash(i), hash(i + vec2(1, 0)), hash(i + vec2(0, 1)), hash(i + vec2(1)));
  return mix(mix(h.x, h.y, f.x), mix(h.z, h.w, f.x), f.y);
}

float fbm(vec2 p) {
  float v = 0.0f, a = 0.5f;
  for(int i = 0; i < 5; i++) {
    v += noise(p) * a;
    p *= 2.0f;
    a *= 0.5f;
  }
  return v;
}

void main() {
  vec2 p = gl_FragCoord.xy / u_resolution.y + u_time * 0.015f;

  vec2 warp = vec2(fbm(p * 1.4f + vec2(0.0f, u_time * 0.08f)), fbm(p * 1.4f + vec2(5.2f, u_time * 0.06f))) * 2.0f - 1.0f;

  vec2 warped = p + warp * 0.20f;
  warped += vec2(fbm(warped * 2.0f + vec2(u_time * 0.03f, 0.0f)), fbm(warped * 2.0f + vec2(0.0f, u_time * 0.025f))) * 0.08f;

  vec2 c = floor(warped * 8.0f);
  float checker = step(1.0f, fract((c.x + c.y) * 0.5f) * 2.0f);

  outColor = vec4(mix(u_color_a, u_color_b, checker), 1.0f);
}