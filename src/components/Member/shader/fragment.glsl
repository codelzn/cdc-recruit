uniform sampler2D uTexture;
uniform float uDistanceCenter;

varying vec2 vUv;
void main() {
  vec4 t = texture2D(uTexture, vUv);
  gl_FragColor = t;
  gl_FragColor.a = clamp(uDistanceCenter, 0.7, 1.0);
}
