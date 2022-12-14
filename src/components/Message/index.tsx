import { useTopData, useGlobalState } from '@/store'
import { motion } from 'framer-motion'
import Image from 'next/image'
export default function Message() {
  const { bgimg, description } = useTopData((state) => state.catchcopy)
  const moveAnime = useGlobalState((state) => state.moveAnime)
  return (
    <>
      <motion.div
        layout
        className={`relative h-[110%] overflow-hidden ${moveAnime ? '-mt-[14%]' : ''}`}
        transition={{ duration: 1 }}>
        <div className='absolute w-4/5 h-full overflow-hidden rounded-3xl -right-6'>
          <Image src={bgimg.url} alt='introduce' fill priority />
        </div>
      </motion.div>
    </>
  )
}
