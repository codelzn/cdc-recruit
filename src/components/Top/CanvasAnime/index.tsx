import * as THREE from 'three'
import { useRef, useState } from 'react'
import Scene from './components/base/Scene'
import SphereAnime from './components/SphereAnime'
import TorusAnime from './components/TorusAnime'
import gsap from 'gsap'

export default function CanvasAnime() {
  const [torusActive, setTorusActive] = useState<boolean>(false)
  const sphereRef = useRef<THREE.Mesh<THREE.IcosahedronGeometry, THREE.ShaderMaterial>>(null!)
  const go = () => {
    setTorusActive(true)
    gsap.to(sphereRef.current.material.uniforms.uProgress, {
      duration: 2,
      value: 0.5,
      delay: 1,
    })
  }
  return (
    <>
      <div onClick={go}>BUTTON</div>
      <Scene gl={{ outputEncoding: THREE.LinearEncoding }} flat camera={{ position: [0, 0, 5] }}>
        <SphereAnime ref={sphereRef} />
        <TorusAnime active={torusActive} />
      </Scene>
    </>
  )
}
