import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import * as THREE from 'three'
import gsap from 'gsap'
import { motion } from 'framer-motion'
import { useGlobalState, useMemberData } from '@/store'
import { Preload, Html, useTexture } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
// import { Perf } from 'r3f-perf'
import { useControls } from 'leva'

import vertexShader from './shader/vertex.glsl'
import fragmentShader from './shader/fragment.glsl'

import Details from './ui/Details'

// 写真のサイズ
const gHeight = 1.2
const gWidth = gHeight * 1.5

// 共通のジオメトリとマテリアル
const GalleryGeometry = new THREE.PlaneGeometry(gWidth, gHeight, 32, 32)
const GalleryMaterial = new THREE.ShaderMaterial({
  uniforms: {
    uTime: { value: 0 },
    uTexture: { value: null },
    // 画像の中心からの距離（透明度設定）
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

// ulのアニメーション定義
const ulVariants = {
  show: {
    opacity: 1,
  },
  hide: {
    opacity: 0,
  },
}

const meshConfig = {
  gPositionX: 0.8,
  gRotationX: -0.2,
  gRotationY: -0.2,
  gRotationZ: -0.1,
  iRotationY: -0.3,
}

function Gallery() {
  const members = useMemberData((state) => state.members)
  const { memberDetailActive, setMemberDetailActive } = useGlobalState((state) => state)
  const router = useRouter()
  const mIndex = Number(router.query.id)
  const [activeIndex, setActiveIndex] = useState(0)
  const [attract, setAttract] = useState(false)
  const [attractTo, setAttractTo] = useState(0)
  const textures = useTexture(members.map((member) => member.currentImg.url))
  const imgGroup = useRef<THREE.Group>(null)
  // マウスホイールでスクロール
  const updateScroll = (e: WheelEvent) => {
    speed += e.deltaY * 0.0002
  }
  useEffect(() => {
    const isMemberMain = router.pathname === '/member'
    if (isMemberMain) {
      window.addEventListener('wheel', updateScroll, false)
    }
    return () => window.removeEventListener('wheel', updateScroll, false)
  })
  // 画像の読み込み
  useEffect(() => {
    if (imgGroup.current) {
      imgGroup.current.children.forEach((child: GalleryMesh, index) => {
        child.material.uniforms.uTexture.value = textures[index]
      })
    }
  })
  useEffect(() => {
    // メンバー詳細の表示してる場合
    if (memberDetailActive) {
      window.removeEventListener('wheel', updateScroll, false)
      imgGroup.current?.children.forEach((child: GalleryMesh, index) => {
        // 他のmeshを非表示
        if (index !== activeIndex) {
          child.visible = false
        }
        // 選択中のmeshにアニメーションをかける
        if (index === activeIndex) {
          gsap.to(imgGroup.current?.rotation, {
            duration: 0.5,
            x: 0,
            y: 0,
            z: 0,
          })
          gsap.to(imgGroup.current?.position, {
            duration: 0.5,
            x: 0,
          })
          gsap.to(child.rotation, {
            duration: 0.5,
            y: 0,
          })
          gsap.to(child.position, {
            duration: 0.5,
            z: 0.9,
          })
        }
      })
    } else if (!memberDetailActive && !attract) {
      // メンバー詳細から戻った場合
      imgGroup.current?.children.forEach((child: GalleryMesh, index) => {
        child.visible = true
        gsap.to(imgGroup.current.rotation, {
          duration: 0.5,
          x: meshConfig.gRotationX,
          y: meshConfig.gRotationY,
          z: meshConfig.gRotationZ,
        })
        gsap.to(imgGroup.current.position, {
          duration: 0.5,
          x: meshConfig.gPositionX,
        })
        gsap.to(child.rotation, {
          duration: 0.5,
          y: meshConfig.iRotationY,
        })
        gsap.to(child.position, {
          duration: 0.5,
          z: 0,
        })
      })
    }
    imgGroup.current?.children.forEach((child: GalleryMesh, index) => {
      if (index === activeIndex) {
        child.visible = true
      }
    })
  }, [memberDetailActive, activeIndex])
  // 動画コントロール
  useFrame((state, delta) => {
    let dists = Array(members.length).fill(0)
    position += speed
    speed *= 0.8
    // 慣性アニメーション
    dists.forEach((dist, i) => {
      dist = Math.min(Math.abs(position - i), 1)
      dist = 1 - dist ** 2
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
      const activeIdx = gsap.utils.clamp(0, Math.round(position), members.length - 1)
      if (activeIdx !== activeIndex) {
        if (activeIdx < 0) {
          return false
        }
        setActiveIndex(activeIdx)
      }
    })
    rounded = Math.abs(Math.round(position))
    let diff = rounded - position
    // ナビモード
    if (attract) {
      position += (attractTo - position) * 0.05
    } else {
      position += Math.sign(diff) * Math.pow(Math.abs(diff), 0.7) * 0.008
    }
    // メンバー詳細の表示してる場合
    if (!isNaN(mIndex) && mIndex !== activeIndex) {
      position = mIndex
    }
    if (position < 0) {
      // ずれないようにする
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
        x: meshConfig.gRotationX,
        y: meshConfig.gRotationY,
        z: meshConfig.gRotationZ,
      })
      gsap.to(rots, {
        duration: 0.3,
        x: 0,
        y: meshConfig.iRotationY,
        z: 0,
      })
    }
  }
  // メンバー詳細へ
  const toDetail = (index: number) => {
    setMemberDetailActive(true)
    router.push(`/member/${index}`)
  }
  const meshClick = (index: number) => {
    if (index === activeIndex) {
      setMemberDetailActive(true)
      router.push(`/member/${index}`)
    }
  }
  return (
    <>
      <group
        position-x={meshConfig.gPositionX}
        ref={imgGroup}
        rotation={[meshConfig.gRotationX, meshConfig.gRotationY, meshConfig.gRotationZ]}>
        {members.map((_, index) => (
          <mesh
            rotation-y={meshConfig.iRotationY}
            key={index}
            material={GalleryMaterial.clone()}
            geometry={GalleryGeometry}
            onClick={() => meshClick(index)}
          />
        ))}
      </group>
      <Html fullscreen className='relative'>
        <Details active={activeIndex} toDetail={() => toDetail(activeIndex)} />
        <motion.ul
          variants={ulVariants}
          animate={memberDetailActive ? 'hide' : 'show'}
          transition={{ duration: 0.5 }}
          className={`absolute flex flex-col top-1/2 right-2 -translate-x-1/2 -translate-y-1/2 gap-5 ${
            memberDetailActive ? 'pointer-events-none' : ''
          }`}
          onMouseEnter={() => memberNavOpen()}
          onMouseLeave={() => memberNavClose()}>
          {members.map((member, index) => (
            <li
              key={index}
              className={`w-3 h-6 rounded-full ${
                activeIndex === index ? 'text-2xl font-extrabold bg-cdc-blue' : 'bg-cdc-gray'
              }`}
              onMouseOver={() => setAttractTo(index)}></li>
          ))}
        </motion.ul>
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
