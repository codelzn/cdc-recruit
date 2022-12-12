import Header from './Header'
import Catchcopy from './Catchcopy'
import CanvasAnime from './CanvasAnime'
import type { TopPageProps } from '@/types'
type Props = Pick<TopPageProps, 'logoData' | 'navigations' | 'catchcopy'>
export default function TopCom({ logoData, navigations, catchcopy }: Props) {
  return (
    <>
      <div className='relative h-full'>
        <Header />
        <Catchcopy />
        <div className='absolute top-0 w-full h-full'>
          <CanvasAnime />
        </div>
      </div>
    </>
  )
}
