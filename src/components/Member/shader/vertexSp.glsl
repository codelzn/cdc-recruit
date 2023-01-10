uniform float uTime;

varying vec2 vUv;
void main() {
  vUv = uv;
  vec3 p = position;
  vec4 modelPosition = modelMatrix * vec4(p, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectionPosition = projectionMatrix * viewPosition;
  gl_Position = projectionPosition;
}
