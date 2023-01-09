import { Suspense, useRef, useState } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Preload, ScrollControls, Scroll, useScroll, Image, Html } from '@react-three/drei'
import { useMemberData, useGlobalState } from '@/store'
import { useRouter } from 'next/router'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
type ItemType = {
  index: number
  position: number | [number, number, number]
  scale: number | [number, number]
  c?: THREE.Color
  url: string
  clkEvent: () => void
}

function Item({ index, position, scale, c = new THREE.Color(), url, clkEvent }: ItemType) {
  const ref = useRef()
  const scroll = useScroll()
  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image ref={ref} url={url} position={position} scale={scale} onClick={clkEvent} />
}

function Slider({ w = 0.7, gap = 0.15 }: { w?: number; gap?: number }) {
  const members = useMemberData((state) => state.members)
  const [active, setActive] = useState(true)
  const { memberDetailActive, setMemberDetailActive } = useGlobalState((state) => state)
  const { width, height } = useThree((state) => state.viewport)
  const xW = w + gap
  const imgClick = (index: number) => {
    setActive((acive) => !acive)
  }
  return (
    <>
      <ScrollControls enabled={active} damping={4} pages={members.length}>
        <Scroll>
          {members.map((member, i) => (
            <Item
              clkEvent={() => imgClick(i)}
              key={i}
              index={i}
              position={[0, -height * i + 0.5, 0]}
              scale={[(member.currentImg.width / member.currentImg.height) * 2, 2]}
              url={member.currentImg.url}
            />
          ))}
        </Scroll>
      </ScrollControls>
    </>
  )
}

function Experience() {
  const members = useMemberData((state) => state.members)
  return (
    <>
      <Html fullscreen className='w-full h-full'>
        <Swiper
          loop
          direction={'vertical'}
          pagination={{
            enabled: true,
            clickable: true,
          }}
          modules={[Pagination]}
          onSwiper={(swiper) => console.log(swiper)}
          className='w-full h-full'>
          {members.map((member, i) => (
            <SwiperSlide key={i} className='grid place-items-center'>
              <picture>
                <img src={member.currentImg.url} alt='' />
              </picture>
              {member.memberName}
            </SwiperSlide>
          ))}
        </Swiper>
      </Html>
    </>
  )
}

export default function MemberSp() {
  return (
    <Canvas flat>
      <Suspense fallback={null}>
        {/* <Slider /> */}
        <Experience />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
