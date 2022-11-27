import { Canvas, RenderProps } from '@react-three/fiber'
import { Preload, useProgress, Html } from '@react-three/drei'
import { Suspense } from 'react'

type Props = {
  children: React.ReactNode
}

export default function Scene({ children, ...props }: Props & RenderProps<HTMLElement>) {
  const { active, progress } = useProgress()
  return (
    <>
      <Canvas {...props}>
        <Suspense
          fallback={
            <Html>
              <div>{progress}</div>
            </Html>
          }>
          <ambientLight intensity={0.75} />
          <directionalLight intensity={1} />
          {children}
          <Preload all />
        </Suspense>
      </Canvas>
    </>
  )
}
