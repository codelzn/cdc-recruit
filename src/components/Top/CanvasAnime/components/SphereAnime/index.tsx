import * as THREE from 'three'
import CustomShaderMaterial from 'three-custom-shader-material'
import gsap from 'gsap'
import { useRef } from 'react'
import vertexShader from './shader/vertex.glsl'
import fragmentShader from './shader/fragment.glsl'
import { getPositionCentroids } from '@/libs'
import { MeshProps, useFrame } from '@react-three/fiber'
import { useControls } from 'leva'

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
export default function SphereAnime({ ...props }: MeshProps) {
  const { prog } = useControls({
    prog: {
      value: 0,
      min: 0,
      max: 1,
      step: 0.01,
    },
  })
  const meshRef = useRef<THREE.Mesh<THREE.IcosahedronGeometry, THREE.ShaderMaterial>>(null!)
  // const doTransition = () => {
  //   console.log('doTransition')
  //   gsap.to(meshRef.current.material.uniforms.uProgress, {
  //     duration: 3,
  //     value: 1,
  //     ease: 'power1.inOut',
  //   })
  // }
  // const doTransitionBack = () => {
  //   console.log('doTransitionBack')
  //   gsap.to(meshRef.current.material.uniforms.uProgress, {
  //     duration: 3,
  //     value: 0,
  //     ease: 'power1.inOut',
  //   })
  // }
  // const clickHandler = () => {
  //   meshRef.current.material.uniforms.uProgress.value < 0.5 ? doTransition() : doTransitionBack()
  // }
  useFrame(() => {
    meshRef.current.material.uniforms.uProgress.value = prog
  })
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[1, 2, 3]} />
      <mesh geometry={sphereGeo} ref={meshRef} {...props}>
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
}
