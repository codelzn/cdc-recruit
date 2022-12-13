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
        className={`relative bg-orange-300 h-[110%] ${moveAnime ? '-mt-[10%]' : ''}`}
        transition={{ duration: 1 }}>
        <Image src={bgimg.url} alt='' height={100} width={100} className='' />
      </motion.div>
    </>
  )
}
