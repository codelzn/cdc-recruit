import { motion } from 'framer-motion'
import { useTopData, useGlobalState } from '@/store'
import { useControls } from 'leva'
import { useState } from 'react'

const h1Variants = {
  processing: { x: 0, y: 0 },
  ended: { x: -440, y: -80 },
}

export default function Catchcopy() {
  const { title } = useTopData((state) => state.catchcopy)
  const moveAnime = useGlobalState((state) => state.moveAnime)
  // const mookcatchcopy = ['あなたの優秀さを', '実らせる']
  return (
    <>
      <motion.h1
        layout
        className={`${
          moveAnime ? 'ml-24 mt-[8%] text-8xl' : 'mx-auto mt-[15%] text-9xl'
        } font-semibold leading-snug w-fit`}
        transition={{ duration: 1 }}>
        {title[0]}
        <br />
        {title[1]}
      </motion.h1>
    </>
  )
}
