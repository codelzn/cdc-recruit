import { motion } from 'framer-motion'
import { useControls } from 'leva'
export default function Animation() {
  const { w, h, r, trx } = useControls({
    w: { value: 100, min: 0, max: 1000 },
    h: { value: 100, min: 0, max: 1000 },
    r: { value: 0, min: 0, max: 360 },
    trx: { value: 0, min: 0, max: 1000 },
  })
  return (
    <>
      <div className='bg-red-300' style={{ width: w, height: h, rotate: `${r}deg`, transform: `translateX(${trx}px)` }}>
        123
      </div>
    </>
  )
}
