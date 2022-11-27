import Scene from './components/Scene'
import Tree from './components/Tree'

export default function BgCanvas() {
  return (
    <>
      <Scene flat dpr={[1, 2]}>
        <Tree />
      </Scene>
    </>
  )
}
