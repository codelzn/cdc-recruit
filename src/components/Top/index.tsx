import Catchcopy from './Catchcopy'
import CanvasAnime from './CanvasAnime'
import Loading from './Loading'
import { useGlobalState } from '@/store'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function TopCom() {
  const { setSphereAnime, setMainController, loadAnime, mainController } = useGlobalState((state) => state)
  useEffect(() => {
    if (loadAnime) setSphereAnime(true)
  }, [loadAnime])
  useEffect(() => {
    setMainController(true)
  }, [])
  return (
    <>
      <section id='top' className='relative h-full overflow-hidden grid place-items-center'>
        {!loadAnime && <Loading />}
        <Catchcopy />
        <CanvasAnime />
      </section>
    </>
  )
}
