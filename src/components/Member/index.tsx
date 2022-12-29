import { Suspense, useEffect } from 'react'
import * as THREE from 'three'
import { useMemberData } from '@/store'
import { Preload } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import { useScroll } from 'framer-motion'
import { useMouseWheel } from 'react-use'

import vertexShader from './shader/vertex.glsl'
import fragmentShader from './shader/fragment.glsl'

const GalleryMaterial = new THREE.ShaderMaterial({
  vertexShader,
  fragmentShader,
  side: THREE.DoubleSide,
})

function Gallery() {
  const members = useMemberData((state) => state.members)
  const scroll = useScroll()
  const num = useMouseWheel()
  useEffect(() => {
    console.log(num)
  }, [num])
  return (
    <mesh material={GalleryMaterial}>
      <planeGeometry />
    </mesh>
  )
}

export default function MemberCom() {
  return (
    <Canvas flat>
      <Suspense>
        <Perf position='top-left' />
        <Gallery />
        <Preload all />
      </Suspense>
    </Canvas>
  )
}
