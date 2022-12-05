import * as THREE from 'three'
import { Torus, Sphere } from '@react-three/drei'
import { Leva, useControls } from 'leva'

const blueMaterial = new THREE.MeshBasicMaterial({ color: new THREE.Color('#01A0E9') })

export default function TorusAnime() {
  const { radius, tube } = useControls({
    radius: {
      value: 1,
      min: 0,
      max: 1.5,
      step: 0.01,
    },
    tube: {
      value: 0.01,
      min: 0.01,
      max: 0.1,
      step: 0.01,
    },
  })
  return (
    <>
      <Sphere material={blueMaterial} scale={0.02} />
      <Sphere material={blueMaterial} scale={0.02} position={[0, 1.1, 0]} />
      <Sphere material={blueMaterial} scale={0.02} position={[0, -1.1, 0]} />
      <Torus args={[radius, tube, 15, 50]} rotation-x={Math.PI / 2} material={blueMaterial} position={[0, 1.1, 0]} />
      <Torus
        args={[radius, tube, 15, 50]}
        rotation-x={Math.PI / 2}
        material={blueMaterial}
        position={[0, 0, 0]}
        scale={1.2}
      />
      <Torus args={[radius, tube, 15, 50]} rotation-x={Math.PI / 2} material={blueMaterial} position={[0, -1.1, 0]} />
    </>
  )
}
