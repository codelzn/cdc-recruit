/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Tree: THREE.Mesh
    Cube: THREE.Mesh
    Cube002: THREE.Mesh
    Cube003: THREE.Mesh
    Cube004: THREE.Mesh
    Cube005: THREE.Mesh
    Cube006: THREE.Mesh
    Cube007: THREE.Mesh
    Cube008: THREE.Mesh
    Cube009: THREE.Mesh
    Cube010: THREE.Mesh
    Cube011: THREE.Mesh
    Cube012: THREE.Mesh
    Cube025: THREE.Mesh
  }
  materials: {
    ['wood.005']: THREE.MeshStandardMaterial
    ['tree.001']: THREE.MeshStandardMaterial
    ['tree.002']: THREE.MeshStandardMaterial
    ['tree.003']: THREE.MeshStandardMaterial
    ['tree.004']: THREE.MeshStandardMaterial
    ['tree.005']: THREE.MeshStandardMaterial
    ['tree.006']: THREE.MeshStandardMaterial
    ['tree.007']: THREE.MeshStandardMaterial
    ['tree.008']: THREE.MeshStandardMaterial
    ['tree.009']: THREE.MeshStandardMaterial
    ['tree.010']: THREE.MeshStandardMaterial
    ['tree.011']: THREE.MeshStandardMaterial
    ['tree.012']: THREE.MeshStandardMaterial
    tree: THREE.MeshStandardMaterial
  }
}

const Tree = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF('/model/tree.gltf') as GLTFResult
  return (
    <group dispose={null} ref={ref} position={[0, 0, 0]} {...props}>
      <mesh geometry={nodes.Tree.geometry} material={materials['wood.005']}>
        <mesh geometry={nodes.Cube.geometry} material={materials['tree.001']} />
        <mesh geometry={nodes.Cube002.geometry} material={materials['tree.002']} />
        <mesh geometry={nodes.Cube003.geometry} material={materials['tree.003']} />
        <mesh geometry={nodes.Cube004.geometry} material={materials['tree.004']} />
        <mesh geometry={nodes.Cube005.geometry} material={materials['tree.005']} />
        <mesh geometry={nodes.Cube006.geometry} material={materials['tree.006']} />
        <mesh geometry={nodes.Cube007.geometry} material={materials['tree.007']} />
        <mesh geometry={nodes.Cube008.geometry} material={materials['tree.008']} />
        <mesh geometry={nodes.Cube009.geometry} material={materials['tree.009']} />
        <mesh geometry={nodes.Cube010.geometry} material={materials['tree.010']} />
        <mesh geometry={nodes.Cube011.geometry} material={materials['tree.011']} />
        <mesh geometry={nodes.Cube012.geometry} material={materials['tree.012']} />
        <mesh geometry={nodes.Cube025.geometry} material={materials.tree} />
      </mesh>
    </group>
  )
})
Tree.displayName = 'Tree'
useGLTF.preload('/model/tree.gltf')
export default Tree
