import Scene from '../../base/Scene'
import Boxes from './Boxes'
import Post from './Post'
export function MultiBox() {
  return (
    <Scene camera={{ position: [0, 0, 15] }}>
      <Boxes />
      <Post />
    </Scene>
  )
}
