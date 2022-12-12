import * as THREE from 'three'
import { useRef } from 'react'
import Scene from './components/base/Scene'
import { OrbitControls } from '@react-three/drei'
import SphereAnime from './components/SphereAnime'
import TorusAnime from './components/TorusAnime'
import gsap from 'gsap'

export default function CanvasAnime() {
  const sphereRef = useRef<THREE.Mesh<THREE.IcosahedronGeometry, THREE.ShaderMaterial>>(null!)
  const go = () => {
    gsap.to(sphereRef.current.material.uniforms.uProgress, {
      duration: 2,
      value: 1,
      ease: 'power1.inOut',
    })
  }
  return (
    <>
      <div onClick={go}>BUTTON</div>
      <Scene gl={{ outputEncoding: THREE.LinearEncoding }} flat camera={{ position: [0, 0, 5] }}>
        <SphereAnime ref={sphereRef} />
        <TorusAnime />
      </Scene>
    </>
  )
}
