import React, { useRef } from 'react'
import * as THREE from 'three'
import { ScrollControls, Scroll } from '@react-three/drei'
import TopCom from '@/components/Top'
import Tree from './Tree'
import CompanyCom from '@/components/Company'
import KeywordCom from '@/components/Keyword'
import RecruitCom from '@/components/Recruit'
import { useFrame } from '@react-three/fiber'

export default function Experience() {
  const treeRef = useRef<THREE.Group>(null)
  return (
    <ScrollControls pages={5} damping={4}>
      <Tree ref={treeRef} />
      {/* @ts-ignore */}
      <Scroll html style={{ width: '100%', height: '100%' }}>
        <TopCom />
        <CompanyCom />
        <KeywordCom />
        <RecruitCom />
      </Scroll>
    </ScrollControls>
  )
}
