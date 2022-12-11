import type { LogoDatum, Navigation, Catchcopy as CType } from '@/types/topData'
import Header from './Header'
import Catchcopy from './Catchcopy'
import CanvasAnime from './canvas'
type Props = {
  logoData: LogoDatum
  navigation: Navigation
  catchcopy: CType
}
export default function TopCom({ logoData, navigation, catchcopy }: Props) {
  return (
    <>
      <div className='relative h-full'>
        <Header logoData={logoData} navigation={navigation} />
        <Catchcopy />
        <div className='absolute top-0 w-full h-full'>
          <CanvasAnime />
        </div>
      </div>
    </>
  )
}
