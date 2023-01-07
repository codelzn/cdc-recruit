import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import Scene from './components/Scene'
import SphereAnime from './components/SphereAnime'
import TorusAnime from './components/TorusAnime'
import gsap from 'gsap'
import { useGlobalState } from '@/store'
import { motion } from 'framer-motion'
import { useDeviceType } from '@/hooks'

let scale = {
  value: 2,
}

function Experience() {
  const { sphereAnime, setMoveAnime } = useGlobalState((state) => state)
  const [torusActive, setTorusActive] = useState<boolean>(false)
  const sphereRef = useRef<THREE.Mesh<THREE.IcosahedronGeometry, THREE.ShaderMaterial>>(null!)
  const groupRef = useRef<THREE.Group>(null!)
  const canvasAnime = () => {
    if (!sphereRef.current) return
    setTorusActive(true)
    const tl = gsap.timeline()
    tl.to(sphereRef.current.material.uniforms.uProgress, {
      duration: 2.5,
      value: 1,
      delay: 1.2,
      onComplete: () => setMoveAnime(true),
    })
    tl.to(scale, {
      value: 1.5,
      duration: 1,
      onUpdate: () => {
        groupRef.current?.scale.set(scale.value, scale.value, scale.value)
      },
    })
  }
  useEffect(() => {
    if (sphereAnime) {
      canvasAnime()
    }
  }, [sphereAnime])
  return (
    <group scale={scale.value} ref={groupRef}>
      <SphereAnime ref={sphereRef} />
      <TorusAnime active={torusActive} />
    </group>
  )
}

const variants = {
  processing: { x: 0, y: 0 },
  sp: { x: 0, y: '-13%' },
  pc: { x: '30%', y: -80 },
}

export default function CanvasAnime() {
  const moveAnime = useGlobalState((state) => state.moveAnime)
  const { isMobile } = useDeviceType()
  return (
    <motion.div
      className='absolute top-0 w-full h-full -z-10'
      variants={variants}
      animate={moveAnime ? (isMobile ? 'sp' : 'pc') : 'processing'}
      transition={{ duration: 1 }}>
      <Scene flat camera={{ position: [0, 0, 5] }}>
        <Experience />
      </Scene>
    </motion.div>
  )
}
