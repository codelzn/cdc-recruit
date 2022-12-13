import Header from './Header'
import Catchcopy from './Catchcopy'
import CanvasAnime from './CanvasAnime'
import { useGlobalState } from '@/store'

export default function TopCom() {
  const setSphereAnime = useGlobalState((state) => state.setSphereAnime)
  return (
    <>
      <div className='relative h-full overflow-hidden'>
        <Header />
        <Catchcopy />
        <button
          className='fixed bg-purple-300 border border-red-300 w-fit h-fit top-5 left-5'
          onClick={() => setSphereAnime(true)}>
          Active anime
        </button>
        <CanvasAnime />
      </div>
    </>
  )
}
