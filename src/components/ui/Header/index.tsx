import { useTopData, useGlobalState } from '@/store'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Navigation from './ui/Navigation'

const logoData = {
  bigLogo: {
    url: 'https://media.graphassets.com/BhXkMTK5QyGYcTlqi4YY',
    width: 1004,
    height: 733,
  },
  image: {
    url: 'https://media.graphassets.com/a8YNKSeSJ2FXv0GRHqWx',
    width: 617,
    height: 580,
  },
  alt: 'CDCキャリアデザインセンターのロゴ',
  description: 'キャリアデザインセンター',
}

export default function Header() {
  const { image, alt, description } = logoData
  const moveAnime = useGlobalState((state) => state.moveAnime)
  return (
    <motion.header
      layout
      // className={`h-16 flex items-center justify-between w-full`}
      className={`fixed top-0 z-[999] h-16 flex items-center justify-between w-full ${
        moveAnime ? '' : '-mt-16'
      } max-sm:bg-red-400 max-lg:bg-blue-400`}
      transition={{ duration: 1 }}>
      <div className='flex items-center'>
        <Image src={image.url} width={image.width} height={image.height} priority alt={alt} className='w-10 ml-pc-m' />
        <p className='mt-4 ml-4 text-xs'>{description}</p>
      </div>
      <Navigation />
    </motion.header>
  )
}
