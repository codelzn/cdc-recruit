import { OrbitControls } from '@react-three/drei'
import Scene from '../../base/Scene'
import Spoints from './Spoints'

export function SpherePoints() {
  return (
    <Scene>
      <OrbitControls />
      <Spoints />
    </Scene>
  )
}
