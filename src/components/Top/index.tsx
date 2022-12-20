import Header from './Header'
import Catchcopy from './Catchcopy'
import CanvasAnime from './CanvasAnime'
import Loading from './Loading'
import { useGlobalState } from '@/store'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function TopCom() {
  const { setSphereAnime, setMainController, loadAnime, mainController } = useGlobalState((state) => state)
  const router = useRouter()
  useEffect(() => {
    if (loadAnime) setSphereAnime(true)
  }, [loadAnime])
  // useEffect(() => {
  //   setMainController(true)
  // }, [])
  return (
    <>
      <div className='relative h-full overflow-hidden'>
        {!loadAnime && <Loading />}
        <Header />
        <Catchcopy />
        <button
          className='fixed bg-purple-300 border border-red-300 w-fit h-fit top-5 left-5'
          onClick={() => setMainController(true)}>
          Active animation
        </button>
        <button
          className='fixed bg-purple-300 border border-red-300 w-fit h-fit top-5 right-5'
          onClick={() => router.push('/member')}>
          To Member
        </button>
        <CanvasAnime />
      </div>
    </>
  )
}
