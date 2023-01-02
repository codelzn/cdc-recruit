uniform sampler2D uTexture;
uniform float uDistanceCenter;

varying vec2 vUv;
void main() {
  vec4 t = texture2D(uTexture, vUv) * uDistanceCenter;
  gl_FragColor = t;
}
