import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'

type Props = {
  children: React.ReactNode
  [key: string]: any
}

export default function Scene({ children, ...props }: Props) {
  return (
    <Canvas {...props}>
      <directionalLight intensity={0.75} />
      <ambientLight intensity={0.75} />
      {children}
      <Preload all />
      <OrbitControls />
    </Canvas>
  )
}
