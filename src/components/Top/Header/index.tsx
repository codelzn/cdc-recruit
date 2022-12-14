import { useTopData, useGlobalState } from '@/store'
import { motion } from 'framer-motion'
export default function Header() {
  const { logoData, navigations } = useTopData((state) => state)
  const moveAnime = useGlobalState((state) => state.moveAnime)
  return (
    <>
      <header className='h-16'>
        <motion.div
          layout
          className={`flex items-center justify-center w-full h-full ${moveAnime ? '' : '-mt-16'}`}
          transition={{ duration: 1 }}>
          <div className='w-1/5 h-full bg-red-300'>LOGO</div>
          <div className='w-4/5 h-full bg-orange-300'>Navigation</div>
        </motion.div>
      </header>
    </>
  )
}
