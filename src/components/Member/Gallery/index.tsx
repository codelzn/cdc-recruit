import * as THREE from 'three'
import vertexShader from './shader/vertex.glsl'
import fragmentShader from './shader/fragment.glsl'

const GalleryMaterial = new THREE.ShaderMaterial({
  vertexShader,
  fragmentShader,
  side: THREE.DoubleSide,
})

export default function Gallery() {
  return (
    <mesh material={GalleryMaterial}>
      <planeGeometry />
    </mesh>
  )
}
