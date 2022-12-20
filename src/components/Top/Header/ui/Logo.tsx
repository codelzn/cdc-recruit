import { useTopData } from '@/store'
import Image from 'next/image'

export default function Logo() {
  const { image, alt, description } = useTopData((state) => state.logoData)
  return (
    <h1 className='relative w-10 h-full ml-5'>
      <Image
        src={image.url}
        fill
        sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
        priority
        alt={alt}
        style={{ objectFit: 'contain' }}
      />
    </h1>
  )
}
