import * as THREE from 'three'
import Scene from './components/base/Scene'
import { OrbitControls } from '@react-three/drei'
import SphereAnime from './components/SphereAnime'
import TorusAnime from './components/TorusAnime'

export default function CanvasAnime() {
  return (
    <Scene gl={{ outputEncoding: THREE.LinearEncoding }} flat camera={{ position: [0, 0, 5] }}>
      {/* <color args={['black']} attach='background' /> */}
      <OrbitControls />
      <SphereAnime />
      <TorusAnime />
    </Scene>
  )
}
