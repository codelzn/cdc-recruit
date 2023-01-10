uniform float uTime;
uniform float strongth;
uniform float deep;

varying vec2 vUv;
void main() {
  vUv = uv;
  vec3 p = position;
  p.x += sin(uv.y * 10.0 + uTime * 30.0 * strongth) * deep;
  p.y += sin(uv.x * 10.0 + uTime * 30.0 * strongth) * deep;
  vec4 modelPosition = modelMatrix * vec4(p, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectionPosition = projectionMatrix * viewPosition;
  gl_Position = projectionPosition;
}
