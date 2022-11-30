import { useFrame } from '@react-three/fiber'
import { useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
const colorArr = ['#594f4f', '#547980', '#45ada8', '#9de0ad', '#e5fcc2']
const tempObject = new THREE.Object3D()
const tempColor = new THREE.Color()
const data = Array.from({ length: 1000 }, () => ({ color: colorArr[Math.floor(Math.random() * 5)], scale: 1 }))
export default function Boxes() {
  const [hovered, set] = useState<number>()
  const colorArray = useMemo(
    () => Float32Array.from(new Array(1000).fill(null).flatMap((_, i) => tempColor.set(data[i].color).toArray())),
    [],
  )
  const meshRef = useRef<THREE.InstancedMesh>(null!)
  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime()
    meshRef.current.rotation.x = Math.sin(time / 4)
    meshRef.current.rotation.y = Math.sin(time / 2)
    let i = 0
    for (let x = 0; x < 10; x++)
      for (let y = 0; y < 10; y++)
        for (let z = 0; z < 10; z++) {
          const id = i++
          console.log(id)
          tempObject.position.set(5 - x, 5 - y, 5 - z)
          tempObject.rotation.y = Math.sin(x / 4 + time) + Math.sin(y / 4 + time) + Math.sin(z / 4 + time)
          tempObject.rotation.z = tempObject.rotation.y * 2
          const scale = (data[id].scale = THREE.MathUtils.lerp(data[id].scale, id === hovered ? 2.5 : 1, 0.1))
          tempObject.scale.setScalar(scale)
          tempObject.updateMatrix()
          meshRef.current.setMatrixAt(id, tempObject.matrix)
        }
    meshRef.current.instanceMatrix.needsUpdate = true
  })
  return (
    <instancedMesh
      ref={meshRef}
      args={[null, null, 1000]}
      onPointerMove={(e) => (e.stopPropagation(), set(e.instanceId))}
      onPointerOut={(e) => set(undefined)}>
      <boxGeometry args={[0.6, 0.6, 0.6]}>
        <instancedBufferAttribute attach='attributes-color' args={[colorArray, 3]} />
      </boxGeometry>
      <meshBasicMaterial vertexColors toneMapped={false} />
      {/* <meshNormalMaterial /> */}
    </instancedMesh>
  )
}
