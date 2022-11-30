varying vec2 vUv;
varying vec3 v_normal;

attribute float aRandom;
attribute vec3 aCenter;

uniform float uProgress;

mat2 rotation2d(float angle) {
  float s = sin(angle);
  float c = cos(angle);

  return mat2(c, -s, s, c);
}

mat4 rotation3d(vec3 axis, float angle) {
  axis = normalize(axis);
  float s = sin(angle);
  float c = cos(angle);
  float oc = 1. - c;

  return mat4(oc * axis.x * axis.x + c, oc * axis.x * axis.y - axis.z * s, oc * axis.z * axis.x + axis.y * s, 0., oc * axis.x * axis.y + axis.z * s, oc * axis.y * axis.y + c, oc * axis.y * axis.z - axis.x * s, 0., oc * axis.z * axis.x - axis.y * s, oc * axis.y * axis.z + axis.x * s, oc * axis.z * axis.z + c, 0., 0., 0., 0., 1.);
}

vec2 rotate(vec2 v, float angle) {
  return rotation2d(angle) * v;
}

vec3 rotate(vec3 v, vec3 axis, float angle) {
  return (rotation3d(axis, angle) * vec4(v, 1.)).xyz;
}

vec3 distort(vec3 p) {
  float pr = saturate((p.y + 1.) * .5);
  float localPr = saturate((uProgress - .8 * pr) / .2);
  p -= aCenter;
  p += normal * aRandom * (localPr) * 2.;
  p *= (1. - localPr);
  p += aCenter;
  p = rotate(p, vec3(0., 1., 0.), localPr * PI * 2. * aRandom * 2.);

  return p;
}

void main() {
  v_normal = normalize(normalMatrix * normal);
  vec3 p = position;

  vec3 dp = distort(p);

  csm_Position = dp;
  vUv = uv;
}
