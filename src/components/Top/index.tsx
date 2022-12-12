import Header from './Header'
import Catchcopy from './Catchcopy'
import CanvasAnime from './canvas'
export default function TopCom() {
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
