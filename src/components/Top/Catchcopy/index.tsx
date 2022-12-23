import { LayoutGroup, motion } from 'framer-motion'
import { useTopData, useGlobalState } from '@/store'

const textVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
}

export default function Catchcopy() {
  const { title } = useTopData((state) => state.catchcopy)
  const { moveAnime, textAnime } = useGlobalState((state) => state)
  return (
    <>
      <motion.h1
        layout
        className={`${
          moveAnime ? 'ml-24 mt-[8%] text-8xl' : 'mx-auto mt-[15%] text-9xl'
        } font-semibold leading-snug w-fit`}
        transition={{ duration: 1 }}>
        <LayoutGroup>
          <motion.span
            layout
            animate={textAnime ? 'show' : 'hidden'}
            variants={textVariants}
            transition={{ duration: 1, opactiy: { ease: 'linear' } }}>
            {title[0]}
          </motion.span>
          <br />
          <motion.span
            layout
            animate={textAnime ? 'show' : 'hidden'}
            variants={textVariants}
            transition={{ duration: 1, opactiy: { ease: 'linear' } }}>
            {title[1]}
          </motion.span>
        </LayoutGroup>
      </motion.h1>
    </>
  )
}
