import { Suspense, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import * as THREE from 'three'
import gsap from 'gsap'
import { useMemberData } from '@/store'
import { Preload, Html, useTexture } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import { useControls } from 'leva'

import vertexShader from './shader/vertex.glsl'
import fragmentShader from './shader/fragment.glsl'

const gHeight = 1.3
const gWidth = gHeight * 1.5

const GalleryGeometry = new THREE.PlaneGeometry(gWidth, gHeight, 32, 32)

const GalleryMaterial = new THREE.ShaderMaterial({
  uniforms: {
    uTime: { value: 0 },
    uTexture: { value: null },
    uDistanceCenter: { value: 0 },
  },
  vertexShader,
  fragmentShader,
  side: THREE.DoubleSide,
  transparent: true,
})

type GalleryMesh = THREE.Mesh<typeof GalleryGeometry, typeof GalleryMaterial>

let speed = 0
let position = 0
let rounded = 0

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [attract, setAttract] = useState(false)
  const [attractTo, setAttractTo] = useState(0)
  const members = useMemberData((state) => state.members)
  const textures = useTexture(members.map((member) => member.currentImg.url))
  const divs = useRef<HTMLDivElement[]>([])
  const imgGroup = useRef<THREE.Group>(null)
  useEffect(() => {
    const updateScroll = (e: WheelEvent) => {
      speed += e.deltaY * 0.0002
    }
    window.addEventListener('wheel', updateScroll, false)
    return () => window.removeEventListener('wheel', updateScroll, false)
  })
  useEffect(() => {
    if (imgGroup.current) {
      imgGroup.current.children.forEach((child: GalleryMesh, index) => {
        child.material.uniforms.uTexture.value = textures[index]
      })
    }
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
      const scale = 1 + 0.2 * dist
      if (imgGroup.current) {
        imgGroup.current.children.forEach((child: GalleryMesh, index) => {
          if (index === i) {
            child.position.y = -index * 1.5 + position * 1.5
            child.scale.set(scale, scale, scale)
            child.material.uniforms.uDistanceCenter.value = dist
          }
        })
      }
      const activeIdx = Math.round(position)
      if (activeIdx !== activeIndex) {
        setActiveIndex(activeIdx)
      }
    })
    rounded = Math.round(position)
    let diff = rounded - position
    // 这里可以控制强度
    // Math.sign() 函数返回一个数字的符号，表示 number 是正数、负数还是零。
    // Math.pow() 函数返回基数（base）的指数（exponent）次幂，即 baseexponent。
    // position += diff * 0.01
    if (attract) {
      position += (attractTo - position) * 0.05
    } else {
      position += Math.sign(diff) * Math.pow(Math.abs(diff), 0.7) * 0.008
    }
    // 边缘检测
    if (position < 0) {
      position += (0 - position) * 0.2
      speed += (0 - speed) * 0.2
    } else if (position > members.length - 1) {
      position += (members.length - 1 - position) * 0.2
      speed += (0 - speed) * 0.2
    }
    if (imgGroup.current) {
      imgGroup.current.children.forEach((child: GalleryMesh, index) => {
        child.material.uniforms.uTime.value = state.clock.getElapsedTime()
      })
    }
  })
  const memberNavOpen = () => {
    setAttract(true)
    if (imgGroup.current) {
      let rots = imgGroup.current.children.map((e) => e.rotation)
      gsap.to(rots, {
        duration: 0.3,
        x: 0,
        y: 0,
        z: 0,
      })
      gsap.to(imgGroup.current.rotation, {
        duration: 0.3,
        x: -0.5,
        y: 0,
        z: 0,
      })
    }
  }
  const memberNavClose = () => {
    setAttract(false)
    if (imgGroup.current) {
      let rots = imgGroup.current.children.map((e) => e.rotation)
      gsap.to(imgGroup.current.rotation, {
        duration: 0.3,
        x: -0.2,
        y: -0.2,
        z: -0.1,
      })
      gsap.to(rots, {
        duration: 0.3,
        x: 0,
        y: -0.3,
        z: 0,
      })
    }
  }
  return (
    <>
      <group position-x={0.4} ref={imgGroup} rotation={[-0.2, -0.2, -0.1]}>
        {members.map((_, index) => (
          <mesh
            rotation-y={-0.3}
            key={index}
            material={GalleryMaterial.clone()}
            geometry={GalleryGeometry}
            onClick={() => console.log(`${index} clicked`)}
          />
        ))}
      </group>
      <Html fullscreen className='relative'>
        <div className='text-5xl ml-96 left-1/2'>
          {members.filter((member, index) => index === activeIndex).map((m) => m.memberName)}
        </div>
        <ul
          className='absolute flex flex-col top-1/2 right-2 -translate-x-1/2 -translate-y-1/2 gap-5'
          onMouseEnter={() => memberNavOpen()}
          onMouseLeave={() => memberNavClose()}>
          {members.map((member, index) => (
            <li
              key={index}
              className={`w-5 h-10 rounded-full ${
                activeIndex === index ? 'text-red-600 text-2xl font-extrabold bg-orange-400' : 'bg-blue-500'
              }`}
              onMouseOver={(e) => setAttractTo(index)}>
              {index}
            </li>
          ))}
        </ul>
      </Html>
    </>
  )
}

export default function MemberCom() {
  return (
    <Canvas flat camera={{ position: [0, 0, 2] }}>
      <Suspense>
        {/* <Perf position='top-left' /> */}
        <Gallery />
        <Preload all />
      </Suspense>
    </Canvas>
  )
}
