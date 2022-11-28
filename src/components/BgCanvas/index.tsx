import Experience from './components/Experience'
import Scene from './components/Scene'

export default function BgCanvas() {
  return (
    <>
      <Scene flat dpr={[1, 2]}>
        <Experience />
      </Scene>
    </>
  )
}
