import * as THREE from 'three'
import CustomShaderMaterial from 'three-custom-shader-material'
import { forwardRef } from 'react'
import vertexShader from './shader/vertex.glsl'
import fragmentShader from './shader/fragment.glsl'
import { getPositionCentroids } from '@/libs'
import { MeshProps } from '@react-three/fiber'

const sphereGeo = new THREE.IcosahedronGeometry(1, 30)
const posCount = sphereGeo.attributes.position.count
const randomBuffer = Float32Array.from({ length: posCount }, () => Math.random())
for (let i = 0; i < randomBuffer.length; i++) {
  const rand = Math.random()
  const axis = i * 3
  const x = axis
  const y = axis + 1
  const z = axis + 2
  const w = axis + 3
  randomBuffer[x] = rand
  randomBuffer[y] = rand
  randomBuffer[z] = rand
}
sphereGeo.setAttribute('aRandom', new THREE.BufferAttribute(randomBuffer, 1))
getPositionCentroids(sphereGeo)
const SphereAnime = forwardRef<THREE.Mesh<THREE.IcosahedronGeometry, THREE.ShaderMaterial>, MeshProps>(
  ({ ...props }, ref) => {
    return (
      <>
        <ambientLight intensity={0.4} />
        <directionalLight position={[1, 2, 3]} />
        <mesh geometry={sphereGeo} ref={ref} {...props}>
          <CustomShaderMaterial
            baseMaterial={THREE.MeshStandardMaterial}
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            side={THREE.DoubleSide}
            uniforms={{
              uProgress: {
                value: 0,
              },
            }}
            flatShading={false}
          />
        </mesh>
      </>
    )
  },
)
SphereAnime.displayName = 'SphereAnime'
export default SphereAnime
