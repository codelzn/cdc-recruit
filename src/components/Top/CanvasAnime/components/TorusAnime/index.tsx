import * as THREE from 'three'
import { Torus, Sphere, Html } from '@react-three/drei'
import { Leva, useControls } from 'leva'
import gsap from 'gsap'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const blueMaterial = new THREE.MeshBasicMaterial({ color: new THREE.Color('#01A0E9') })

export default function TorusAnime() {
  const { radius, y } = useControls({
    radius: {
      value: 1,
      min: 0,
      max: 1.2,
      step: 0.01,
    },
    y: {
      value: 0.0,
      min: -1.1,
      max: 1.1,
      step: 0.01,
    },
  })
  const sphereRef = useRef<THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>>(null!)
  const torusRef = useRef<THREE.Mesh<THREE.TorusGeometry, THREE.MeshBasicMaterial>>(null!)
  const go1 = () => {
    gsap.to(sphereRef.current.position, {
      duration: 0.5,
      y: 1.1,
      ease: 'power1.inOut',
    })
  }
  const go2 = () => {
    gsap.to(torusRef.current, {
      radius: 1.2,
      duration: 1,
      ease: 'power1.inOut',
      onUpdate: (v) => {
        console.log(v)
      },
    })
  }
  return (
    <>
      <Html>
        <div onClick={go1}>ANIME|ONE</div>
        <div onClick={go2}>ANIME|TWO</div>
      </Html>
      {/* <Sphere material={blueMaterial} scale={0.02} position={[0, 0, 0]} ref={sphereRef} /> */}
      <Torus
        args={[0.0, 0.016, 15, 50]}
        rotation-x={Math.PI / 2}
        material={blueMaterial}
        position={[0, 0, 0]}
        ref={torusRef}
      />
    </>
  )
}
