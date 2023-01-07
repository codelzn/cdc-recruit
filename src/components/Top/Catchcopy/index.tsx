import { LayoutGroup, motion } from 'framer-motion'
import { useTopData, useGlobalState } from '@/store'
import { useDeviceType } from '@/hooks'

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
  const { isMobile } = useDeviceType()
  return (
    <>
      <motion.h1
        layout
        className={`font-semibold leading-snug text-9xl w-fit max-lg:text-4xl max-lg:leading-loose ${
          moveAnime ? (isMobile ? 'text-3xl' : 'text-7xl') : ''
        } `}
        transition={{ duration: 1 }}>
        <LayoutGroup>
          <motion.span
            layout
            initial='hidden'
            animate={textAnime ? 'show' : 'hidden'}
            variants={textVariants}
            transition={{ duration: 1, opactiy: { ease: 'linear' } }}>
            {title[0]}
          </motion.span>
          <br />
          <motion.span
            layout
            initial='hidden'
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
