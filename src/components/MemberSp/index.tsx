import { Suspense, useRef, useState } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Preload, ScrollControls, Scroll, useScroll, Image, Html } from '@react-three/drei'
import { useMemberData, useGlobalState } from '@/store'
import { useRouter } from 'next/router'
import { damp } from 'three/src/math/MathUtils'

type ItemType = {
  index: number
  position: number | [number, number, number]
  scale: number | [number, number]
  c?: THREE.Color
  url: string
}

function Item({ index, position, scale, c = new THREE.Color(), url }: ItemType) {
  const ref = useRef()
  const scroll = useScroll()
  return <Image ref={ref} url={url} position={position} scale={scale} />
}

function Slider({ w = 0.7, gap = 0.15 }: { w?: number; gap?: number }) {
  const members = useMemberData((state) => state.members)
  const { memberDetailActive, setMemberDetailActive } = useGlobalState((state) => state)
  const { width } = useThree((state) => state.viewport)
  const xW = w + gap
  return (
    <>
      <ScrollControls horizontal damping={4} pages={members.length}>
        <Scroll>
          {members.map((member, i) => (
            <Item
              key={i}
              index={i}
              position={[i * width, 0, 0]}
              scale={[(member.currentImg.width / member.currentImg.height) * 2, 2]}
              url={member.currentImg.url}
            />
          ))}
        </Scroll>
      </ScrollControls>
    </>
  )
}

export default function MemberSp() {
  return (
    <Canvas flat>
      <Suspense fallback={null}>
        <Slider />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
