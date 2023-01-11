import { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
import { useMemberData, useGlobalState } from '@/store'
import { useFrame } from '@react-three/fiber'
import { Html, useTexture } from '@react-three/drei'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import vertexShader from '../shader/vertexSp.glsl'
import fragmentShader from '../shader/fragmentSp.glsl'
import { useControls } from 'leva'
import { useSwipeable } from 'react-swipeable'
import { ulVariants } from './Mpc'

// 写真のサイズ
const gHeight = 1.2
const gWidth = gHeight * 1.5

const planeGeometry = new THREE.PlaneGeometry(gWidth, gHeight, 32, 32)
const planeMaterial = new THREE.ShaderMaterial({
  uniforms: {
    uTexture: { value: null },
    uTime: { value: 0 },
  },
  vertexShader,
  fragmentShader,
  side: THREE.DoubleSide,
})

type plane = THREE.Mesh<typeof planeGeometry, typeof planeMaterial>

const btnVariants = {
  show: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
}

const introVariants = {
  off: {
    x: 0,
    y: 0,
  },
  on: {
    x: 0,
    y: 70,
  },
}

export default function MSp() {
  const members = useMemberData((state) => state.members)
  const { spMemberIndex, setSpMemberIndex, memberDetailActive, setMemberDetailActive } = useGlobalState(
    (state) => state,
  )
  const router = useRouter()
  const mIndex = Number(router.query.id)
  const textures = useTexture(members.map((member) => member.currentImg.url))
  const plane = useRef<plane>(null)
  const currentMemberData = useMemo(() => members && members[spMemberIndex], [members, spMemberIndex])
  const handlers = useSwipeable({
    onSwipedRight: () => {
      if (spMemberIndex > 0 && !memberDetailActive) {
        setSpMemberIndex(spMemberIndex - 1)
      }
    },
    onSwipedLeft: () => {
      if (spMemberIndex < members.length - 1 && !memberDetailActive) {
        setSpMemberIndex(spMemberIndex + 1)
      }
    },
  })
  const toDetail = (e) => {
    e.stopPropagation()
    if (!memberDetailActive) {
      setMemberDetailActive(true)
      router.push(`/member/${spMemberIndex}`)
    }
  }
  useEffect(() => {
    if (plane.current) {
      plane.current.material.uniforms.uTexture.value = textures[spMemberIndex]
    }
  }, [currentMemberData])
  useFrame((state, delta) => {
    if (plane.current) {
      plane.current.material.uniforms.uTime.value = state.clock.getElapsedTime()
    }
  })
  useEffect(() => {
    if (!isNaN(mIndex) && mIndex !== spMemberIndex) {
      setSpMemberIndex(mIndex)
    }
  }, [mIndex])
  useEffect(() => {
    if (plane.current) {
      if (memberDetailActive) {
        gsap.to(plane.current.scale, { x: 1.35, y: 1.35, z: 1.35, duration: 0.5 })
        gsap.to(plane.current.position, { x: -0.3, y: 0.65, z: 0, duration: 0.5 })
      } else {
        gsap.to(plane.current.scale, { x: 0.8, y: 0.8, z: 0.8, duration: 0.5 })
        gsap.to(plane.current.position, { x: 0, y: 0.65, z: 0, duration: 0.5 })
      }
    }
  }, [memberDetailActive])
  return (
    <>
      <mesh
        ref={plane}
        geometry={planeGeometry}
        material={planeMaterial}
        scale={[0.8, 0.8, 0.8]}
        position={[0, 0.65, 0]}
        onClick={(e) => toDetail(e)}
      />
      <Html fullscreen className='relative w-full h-full' {...handlers}>
        <div className='absolute bottom-0 w-full h-1/2'>
          {currentMemberData && (
            <div className='flex flex-col mx-8 text-right gap-4'>
              <motion.ul
                variants={ulVariants}
                animate={memberDetailActive ? 'hide' : 'show'}
                transition={{ duration: 0.5 }}
                className={`absolute left-1/2 -translate-x-1/2 -top-5 flex gap-5 ${
                  memberDetailActive ? 'pointer-events-none' : ''
                }`}>
                {members.map((_, index) => (
                  <li
                    key={index}
                    className={`w-5 h-2 rounded-full ${
                      spMemberIndex === index ? 'text-2xl font-extrabold bg-cdc-blue' : 'bg-cdc-gray'
                    }`}></li>
                ))}
              </motion.ul>
              <motion.h3
                variants={introVariants}
                animate={memberDetailActive ? 'on' : 'off'}
                className='text-xl font-semibold leading-relaxed whitespace-nowrap'>
                {currentMemberData.catchphrase[0]}
                <br />
                {currentMemberData.catchphrase[1]}
              </motion.h3>
              <motion.p variants={introVariants} animate={memberDetailActive ? 'on' : 'off'} className='text-lg'>
                {currentMemberData.memberName}
              </motion.p>
              <motion.p
                variants={introVariants}
                animate={memberDetailActive ? 'on' : 'off'}
                className='-mt-3 text-base'>
                {currentMemberData.duties}
              </motion.p>
              <motion.div
                animate={memberDetailActive ? 'hidden' : 'show'}
                transition={{ duration: 0.5 }}
                variants={btnVariants}
                className='absolute flex items-center px-5 py-2 text-xl text-white rounded-lg left-8 -tracking-wide bg-cdc-gray bottom-[20%] gap-4'
                onClick={(e) => toDetail(e)}>
                <span>出会う</span>
                <span className='w-10 h-5'>
                  <svg fill='#fff' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 243.58'>
                    <path d='M373.57 0 512 120.75 371.53 243.58l-20.92-23.91 94.93-83L0 137.09v-31.75l445.55-.41-92.89-81.02z' />
                  </svg>
                </span>
              </motion.div>
            </div>
          )}
        </div>
      </Html>
    </>
  )
}
