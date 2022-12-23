import { useTopData, useGlobalState } from '@/store'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Navigation from './ui/Navigation'
export default function Header() {
  const { image, alt, description } = useTopData((state) => state.logoData)
  const moveAnime = useGlobalState((state) => state.moveAnime)
  return (
    <motion.header
      layout
      className={`h-16 flex items-center justify-between w-full`}
      // className={`h-16 flex items-center justify-between w-full ${moveAnime ? '' : '-mt-16'}`}
      transition={{ duration: 1 }}>
      <div className='flex items-center'>
        <Image src={image.url} width={image.width} height={image.height} priority alt={alt} className='w-10 ml-pc-m' />
        <p className='mt-4 ml-4 text-xs'>{description}</p>
      </div>
      <Navigation />
    </motion.header>
  )
}
