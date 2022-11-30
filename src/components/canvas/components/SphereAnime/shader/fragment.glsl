varying vec2 vUv;

float random21(vec2 n) {
  return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

void main() {
  vec2 p = vUv;

  vec3 col = vec3(1.);

  csm_DiffuseColor = vec4(col, 0.7);
}
