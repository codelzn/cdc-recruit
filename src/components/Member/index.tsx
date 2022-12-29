import { Suspense, useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useMemberData } from '@/store'
import { Preload, Html } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Perf } from 'r3f-perf'

import vertexShader from './shader/vertex.glsl'
import fragmentShader from './shader/fragment.glsl'

const GalleryMaterial = new THREE.ShaderMaterial({
  vertexShader,
  fragmentShader,
  side: THREE.DoubleSide,
})

let speed = 0
let position = 0
let rounded = 0

function Gallery() {
  const members = useMemberData((state) => state.members)
  const block = useRef<HTMLDivElement>(null)
  const divs = useRef<HTMLDivElement[]>([])
  useEffect(() => {
    const updateScroll = (e: WheelEvent) => {
      speed += e.deltaY * 0.0002
    }
    window.addEventListener('wheel', updateScroll, false)
    return () => window.removeEventListener('wheel', updateScroll, false)
  })
  useFrame((state, delta) => {
    if (divs.current.length === 0) {
      divs.current = Array.from(document.querySelectorAll('.n'))
    }
    let dists = Array(members.length).fill(0)
    position += speed
    speed *= 0.8
    dists.forEach((dist, i) => {
      dist = Math.min(Math.abs(position - i), 1)
      dist = 1 - dist ** 2
      if (divs.current.length > 0) {
        divs.current[i].style.transform = `scale(${1 + 0.4 * dist})`
      }
    })
    rounded = Math.round(position)
    let diff = rounded - position
    // 这里可以控制强度
    // Math.sign() 函数返回一个数字的符号，表示 number 是正数、负数还是零。
    // Math.pow() 函数返回基数（base）的指数（exponent）次幂，即 baseexponent。
    // position += diff * 0.01
    position += Math.sign(diff) * Math.pow(Math.abs(diff), 0.7) * 0.008

    if (block.current) {
      block.current.style.transform = `translateY(${Number(position.toFixed(2)) * 100}px)`
    }
  })
  return (
    <>
      <mesh material={GalleryMaterial}>
        <planeGeometry />
      </mesh>
      <Html fullscreen>
        <div ref={block} className='w-24 h-24 bg-red-400'></div>
        {members.map((member, index) => (
          <div key={index} className={`n absolute h-3 bg-orange-300`} style={{ top: index * 100 + 10 + 'px' }}>
            {member.memberName}
          </div>
        ))}
      </Html>
    </>
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
