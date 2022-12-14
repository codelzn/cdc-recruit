import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTopData, useGlobalState } from '@/store'

const variants = {
  show: {
    scale: 1,
  },
  hidden: {
    scale: 0.01,
  },
}

export default function Loading() {
  const { bigLogo } = useTopData((state) => state.logoData)
  const { setLoadAnime, mainController } = useGlobalState((state) => state)
  const toNext = (e: string) => {
    if (e === 'hidden') {
      setLoadAnime(true)
    }
  }
  return (
    <motion.div
      className='absolute w-full h-full'
      transition={{ duration: 0.75, ease: 'easeInOut', delay: 0.5 }}
      animate={mainController ? 'hidden' : 'show'}
      variants={variants}
      onAnimationComplete={(e) => toNext(e as string)}>
      <motion.div className='absolute w-full top-1/2 h-4/5 -translate-y-1/2'>
        <Image src={bigLogo.url} alt='logo' fill priority style={{ objectFit: 'contain' }} />
      </motion.div>
    </motion.div>
  )
}
