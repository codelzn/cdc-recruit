import { Suspense, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import * as THREE from 'three'
import { useMemberData } from '@/store'
import { Preload, Html, useTexture } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Perf } from 'r3f-perf'

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
})

type GalleryMesh = THREE.Mesh<typeof GalleryGeometry, typeof GalleryMaterial>

let speed = 0
let position = 0
let rounded = 0

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0)
  const members = useMemberData((state) => state.members)
  const textures = useTexture(members.map((member) => member.currentImg.url))
  const block = useRef<HTMLDivElement>(null)
  const wrap = useRef<HTMLDivElement>(null)
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
  useEffect(() => {
    console.log(activeIndex)
  }, [activeIndex])
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
    position += Math.sign(diff) * Math.pow(Math.abs(diff), 0.7) * 0.008

    if (wrap.current) {
      wrap.current.style.transform = `translateY(-${Number(position.toFixed(2)) * 100}px)`
    }
    if (imgGroup.current) {
      imgGroup.current.children.forEach((child: GalleryMesh, index) => {
        child.material.uniforms.uTime.value = state.clock.getElapsedTime()
      })
    }
  })
  return (
    <>
      <group position-x={1} ref={imgGroup} rotation={[-0.2, -0.2, -0.1]}>
        {members.map((_, index) => (
          <mesh rotation-y={-0.3} key={index} material={GalleryMaterial.clone()} geometry={GalleryGeometry} />
        ))}
      </group>
      <Html fullscreen>
        <div ref={wrap}>
          {members.map((member, index) => (
            <div key={index} className={`n absolute w-[150px] h-[100px]`} style={{ top: index * 100 + 10 + 'px' }}>
              <Image
                src={member.currentImg.url}
                alt={member.memberName}
                width={member.currentImg.width}
                height={member.currentImg.height}
                className='w-full h-full'
              />
            </div>
          ))}
        </div>
        <div ref={block} className='w-24 h-24 bg-red-400'></div>
      </Html>
    </>
  )
}

export default function MemberCom() {
  return (
    <Canvas flat camera={{ position: [0, 0, 2] }}>
      <Suspense>
        <Perf position='top-left' />
        <Gallery />
        <Preload all />
      </Suspense>
    </Canvas>
  )
}
