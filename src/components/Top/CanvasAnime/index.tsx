import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import Scene from './components/Scene'
import SphereAnime from './components/SphereAnime'
import TorusAnime from './components/TorusAnime'
import gsap from 'gsap'
import { useGlobalState } from '@/store'
import { useControls } from 'leva'

export default function CanvasAnime() {
  const sphereAnime = useGlobalState((state) => state.sphereAnime)
  const [torusActive, setTorusActive] = useState<boolean>(false)
  const sphereRef = useRef<THREE.Mesh<THREE.IcosahedronGeometry, THREE.ShaderMaterial>>(null!)
  const groupRef = useRef<THREE.Group>(null!)
  const { x, y, s } = useControls({
    x: {
      value: 0,
      min: -1000,
      max: 1000,
      step: 0.1,
    },
    y: {
      value: 0,
      min: -1000,
      max: 1000,
      step: 0.1,
    },
    s: {
      value: 2,
      min: 0,
      max: 3,
      step: 0.01,
    },
  })
  const canvasAnime = () => {
    if (!sphereRef.current) return
    setTorusActive(true)
    const tl = gsap.timeline()
    tl.to(sphereRef.current.material.uniforms.uProgress, {
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
    <div className='absolute top-0 w-full h-full -z-10' style={{ top: y, left: x }}>
      <Scene flat camera={{ position: [0, 0, 5] }}>
        <group scale={s} position={[0, 0, 0]} ref={groupRef}>
          <SphereAnime ref={sphereRef} />
          <TorusAnime active={torusActive} />
        </group>
      </Scene>
    </div>
  )
}
