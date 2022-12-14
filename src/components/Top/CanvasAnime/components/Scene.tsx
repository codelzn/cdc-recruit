import { Canvas, RenderProps } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { Suspense } from 'react'

type Props = {
  children: React.ReactNode
}

export default function Scene({ children, ...props }: Props & RenderProps<HTMLElement>) {
  return (
    <>
      <Canvas {...props}>
        <Suspense fallback={null}>
          {children}
          <Preload all />
        </Suspense>
      </Canvas>
    </>
  )
}
