import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import Scene from './components/Scene'
import SphereAnime from './components/SphereAnime'
import TorusAnime from './components/TorusAnime'
import gsap from 'gsap'
import { useGlobalState } from '@/store'

export default function CanvasAnime() {
  const sphereAnime = useGlobalState((state) => state.sphereAnime)
  const [torusActive, setTorusActive] = useState<boolean>(false)
  const sphereRef = useRef<THREE.Mesh<THREE.IcosahedronGeometry, THREE.ShaderMaterial>>(null!)
  const groupRef = useRef<THREE.Group>(null!)
  const canvasAnime = () => {
    setTorusActive(true)
    gsap.to(sphereRef.current.material.uniforms.uProgress, {
      duration: 2.5,
      value: 1,
      delay: 1.2,
    })
  }
  useEffect(() => {
    if (sphereAnime) {
      canvasAnime()
    }
  }, [sphereAnime])
  return (
    <div className='absolute top-0 w-full h-full -z-10'>
      <Scene gl={{ outputEncoding: THREE.LinearEncoding }} flat camera={{ position: [0, 0, 5] }}>
        <group scale={2} ref={groupRef}>
          <SphereAnime ref={sphereRef} />
          <TorusAnime active={torusActive} />
        </group>
      </Scene>
    </div>
  )
}
