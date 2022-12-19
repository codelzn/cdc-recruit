import Gallery from './Gallery'
import { useMemberData } from '@/store'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'

export default function MemberCom() {
  const members = useMemberData((state) => state.members)
  return (
    <Canvas>
      <OrbitControls />
      <Perf position='top-left' />
      <color args={['#000']} attach='background' />
      <Gallery />
    </Canvas>
  )
}
