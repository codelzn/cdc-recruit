import * as THREE from 'three'
import { extend, useThree } from '@react-three/fiber'
import { Effects } from '@react-three/drei'
import { SSAOPass, UnrealBloomPass } from 'three-stdlib'

extend({ SSAOPass, UnrealBloomPass })

export default function Post() {
  const { scene, camera } = useThree()
  return (
    <Effects disableGamma>
      {/* @ts-ignore */}
      <sSAOPass args={[scene, camera]} kernelRadius={0.5} maxDistance={0.1} />
      {/* @ts-ignore */}
      <unrealBloomPass threshold={0.9} strength={0.75} radius={0.5} />
    </Effects>
  )
}
