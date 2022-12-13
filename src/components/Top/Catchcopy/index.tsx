import { motion } from 'framer-motion'
import { useTopData } from '@/store'

export default function Catchcopy() {
  const catchcopy = useTopData((state) => state.catchcopy)
  const mookcatchcopy = ['あなたの優秀さを', '実らせる']
  return (
    <>
      <motion.h1 className='font-semibold leading-snug text-8xl'>
        {mookcatchcopy[0]}
        <br />
        {mookcatchcopy[1]}
      </motion.h1>
    </>
  )
}
