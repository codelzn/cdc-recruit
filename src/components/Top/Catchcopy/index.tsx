import { motion } from 'framer-motion'
import { useTopData, useGlobalState } from '@/store'
import { useControls } from 'leva'

const h1Variants = {
  processing: { x: 0, y: 0 },
  ended: { x: -440, y: -80 },
}

export default function Catchcopy() {
  const catchcopy = useTopData((state) => state.catchcopy)
  const moveAnime = useGlobalState((state) => state.moveAnime)
  const mookcatchcopy = ['あなたの優秀さを', '実らせる']
  const { x, y } = useControls({
    x: { value: 0, min: -1000, max: 1000 },
    y: { value: 0, min: -1000, max: 1000 },
  })
  return (
    <motion.h1
      className='font-semibold leading-snug bg-blue-500 text-8xl w-fit'
      variants={h1Variants}
      // animate={moveAnime ? 'processing' : 'ended'}
    >
      {mookcatchcopy[0]}
      <br />
      {mookcatchcopy[1]}
    </motion.h1>
  )
}
