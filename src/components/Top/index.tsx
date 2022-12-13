import Header from './Header'
import Catchcopy from './Catchcopy'
import CanvasAnime from './CanvasAnime'
import { useGlobalState } from '@/store'

export default function TopCom() {
  const setSphereAnime = useGlobalState((state) => state.setSphereAnime)
  return (
    <>
      <div className='relative h-full'>
        <Header />
        <Catchcopy />
        <button className='bg-purple-300 border border-red-300 w-fit h-fit' onClick={() => setSphereAnime(true)}>
          Active anime
        </button>
        <CanvasAnime />
      </div>
    </>
  )
}
