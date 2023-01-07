import * as THREE from 'three'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { useGlobalState } from '@/store'

let torusGeometry = new THREE.TorusGeometry(0, 0.016, 15, 50)
const blueMaterial = new THREE.MeshBasicMaterial({ color: new THREE.Color('#01A0E9') })
const torusProps = {
  radius: 0,
}

type Props = {
  active?: boolean
}

export default function TorusAnime({ active = false }: Props) {
  const torusRef = useRef<THREE.Mesh<THREE.TorusGeometry, THREE.MeshBasicMaterial>>(null!)
  const setTextAnime = useGlobalState((state) => state.setTextAnime)
  const anime = () => {
    torusRef.current.visible = true
    const tl = gsap.timeline()
    tl.to(torusRef.current.position, {
      duration: 1,
      y: 1.1,
      ease: 'none',
      onComplete: () => setTextAnime(true),
    })
    tl.to(torusProps, {
      radius: 1.4,
      duration: 1,
      ease: 'circ.out',
      onUpdate: () => {
        torusGeometry.dispose()
        torusGeometry = null
        torusGeometry = new THREE.TorusGeometry(torusProps.radius, 0.016, 15, 50)
        if (torusRef.current) {
          torusRef.current.geometry = torusGeometry
        }
      },
    })
    tl.to(
      torusRef.current.position,
      {
        duration: 1,
        y: 0,
        ease: 'none',
      },
      '-=1',
    )
    tl.to(torusProps, {
      radius: 0,
      duration: 1,
      ease: 'circ.in',
      onUpdate: () => {
        torusGeometry.dispose()
        torusGeometry = null
        torusGeometry = new THREE.TorusGeometry(torusProps.radius, 0.016, 15, 50)
        if (torusRef.current) {
          torusRef.current.geometry = torusGeometry
        }
      },
    })
    tl.to(
      torusRef.current.position,
      {
        duration: 1,
        y: -1.1,
        ease: 'none',
      },
      '-=1',
    )
    tl.to(
      torusRef.current,
      {
        visible: false,
      },
      '-=0.5',
    )
  }
  useEffect(() => {
    if (active) {
      anime()
    }
  }, [active])
  return (
    <mesh
      visible={false}
      geometry={torusGeometry}
      material={blueMaterial}
      rotation-x={Math.PI / 2}
      position={[0, 0, 0]}
      ref={torusRef}
    />
  )
}
