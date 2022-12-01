import * as THREE from 'three'
import { OrbitControls } from '@react-three/drei'
import Scene from '../../base/Scene'
import CustomShaderMaterial from 'three-custom-shader-material'
import gsap from 'gsap'
import { useRef } from 'react'
import vertexShader from './shader/vertex.glsl'
import fragmentShader from './shader/fragment.glsl'

const sphereGeo = new THREE.IcosahedronGeometry(1, 20)
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
function Experience() {
  const meshRef = useRef<THREE.Mesh<THREE.IcosahedronGeometry, THREE.ShaderMaterial>>(null!)
  const doTransition = () => {
    console.log('doTransition')
    gsap.to(meshRef.current.material.uniforms.uProgress, {
      duration: 3,
      value: 1,
      ease: 'power1.inOut',
    })
  }
  const doTransitionBack = () => {
    console.log('doTransitionBack')
    gsap.to(meshRef.current.material.uniforms.uProgress, {
      duration: 3,
      value: 0,
      ease: 'power1.inOut',
    })
  }
  const clickHandler = () => {
    meshRef.current.material.uniforms.uProgress.value < 0.5 ? doTransition() : doTransitionBack()
  }
  return (
    <>
      <mesh geometry={sphereGeo} ref={meshRef} onClick={clickHandler}>
        <CustomShaderMaterial
          baseMaterial={THREE.MeshStandardMaterial}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={{
            uProgress: {
              value: 0,
            },
          }}
          flatShading={true}
          color={'#F3F2EE'}
        />
      </mesh>
    </>
  )
}

export function SphereAnime() {
  return (
    <Scene flat gl={{ antialias: false }} camera={{ position: [0, 0, 3] }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[1, 2, 3]} />
      <OrbitControls />
      <Experience />
    </Scene>
  )
}
