import { Suspense } from 'react'
import { Preload } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Mpc from './ui/Mpc'
import Msp from './ui/Msp'
import { useDeviceType } from '@/hooks'

export default function MemberPc() {
  const { isMobile } = useDeviceType()
  return (
    <Canvas flat camera={{ position: [0, 0, 2] }}>
      <Suspense>
        {isMobile ? <Msp /> : <Mpc />}
        <Preload all />
      </Suspense>
    </Canvas>
  )
}
