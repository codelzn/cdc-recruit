import { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useMemberData, useGlobalState } from '@/store'
import { useThree } from '@react-three/fiber'
import { Html, useTexture } from '@react-three/drei'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import vertexShader from '../shader/vertexSp.glsl'
import fragmentShader from '../shader/fragmentSp.glsl'
import { useControls } from 'leva'

// 写真のサイズ
const gHeight = 1.2
const gWidth = gHeight * 1.5

const planeGeometry = new THREE.PlaneGeometry(gWidth, gHeight, 32, 32)
const planeMaterial = new THREE.ShaderMaterial({
  uniforms: {
    uTexture: { value: null },
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

export default function MSp() {
  const members = useMemberData((state) => state.members)
  const { spMemberIndex, setSpMemberIndex, memberDetailActive } = useGlobalState((state) => state)
  const router = useRouter()
  const textures = useTexture(members.map((member) => member.currentImg.url))
  const { viewport } = useThree()
  const plane = useRef<plane>(null)
  const currentMemberData = useMemo(() => members && members[spMemberIndex], [members, spMemberIndex])
  const toDetail = () => {
    router.push(`/member/${spMemberIndex}`)
  }
  useEffect(() => {
    if (plane.current) {
      plane.current.material.uniforms.uTexture.value = textures[spMemberIndex]
    }
  }, [currentMemberData])
  return (
    <>
      <mesh
        ref={plane}
        geometry={planeGeometry}
        material={planeMaterial}
        scale={[0.8, 0.8, 0.8]}
        position={[0, 0.6, 0]}
        onClick={() => toDetail()}
      />
      <Html fullscreen className='relative w-full h-full'>
        <div className='absolute bottom-0 w-full h-1/2'>
          {currentMemberData && (
            <div className='flex flex-col mx-8 text-right gap-4'>
              <h3 className='text-xl font-semibold leading-relaxed whitespace-nowrap'>
                {currentMemberData.catchphrase[0]}
                <br />
                {currentMemberData.catchphrase[1]}
              </h3>
              <p className='text-lg'>{currentMemberData.memberName}</p>
              <p className='-mt-3 text-base'>{currentMemberData.duties}</p>
              <motion.div
                animate={memberDetailActive ? 'hidden' : 'show'}
                transition={{ duration: 0.5 }}
                variants={btnVariants}
                className='absolute flex items-center px-5 py-2 text-xl text-white rounded-lg left-8 -tracking-wide bg-cdc-gray bottom-[20%] gap-4'
                onClick={() => toDetail()}>
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
