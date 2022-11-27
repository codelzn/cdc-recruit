import { Canvas, RenderProps } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'

type Props = {
  children: React.ReactNode
}

export default function Scene({ children, ...props }: Props & RenderProps<HTMLCanvasElement>) {
  return (
    <Canvas {...props}>
      <directionalLight intensity={0.75} />
      <ambientLight intensity={0.75} />
      {children}
      <Preload all />
      <OrbitControls makeDefault />
    </Canvas>
  )
}
