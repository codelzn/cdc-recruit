import { useMemo } from 'react'
import * as THREE from 'three'
function Spoints() {
  // 获取球体内100个随机坐标点
  const points = useMemo(() => {
    const points = []
    for (let i = 0; i < 100; i++) {
      const point = new THREE.Vector3()
      point.x = THREE.MathUtils.randFloatSpread(20)
      point.y = THREE.MathUtils.randFloatSpread(20)
      point.z = THREE.MathUtils.randFloatSpread(20)
      points.push(point)
    }
    return points
  }, [])
  return (
    <points>
      <sphereGeometry args={[3, 32, 32]} />
      <pointsMaterial color='hotpink' size={0.1} sizeAttenuation />
    </points>
  )
}

export default Spoints
