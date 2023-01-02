uniform float uTime;

varying vec2 vUv;

float PI = 3.1415926535897932384626433832795;

void main() {
  vec2 u = (uv - vec2(0.5) * 0.9 + vec2(0.5));
  vec3 pos = position;

  pos.y += sin(PI * u.x) * 0.02;
  pos.z += sin(PI * u.x) * 0.02;
  pos.y += sin(uTime * 0.3) * 0.02;
  u.y -= sin(uTime * 0.3) * 0.02;

  vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectionPosition = projectionMatrix * viewPosition;
  gl_Position = projectionPosition;

  vUv = u;
}
