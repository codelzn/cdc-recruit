import Image from 'next/image'
import { getTopData } from '@/libs'
import { TopPageProps } from '@/types'
import { GetStaticProps } from 'next'
import { useTopData } from '@/store'
import Navigation from '@/components/Top/Header/ui/Navigation'

type Props = {
  topData: TopPageProps
}

export default function Dev({ topData }: Props) {
  const setTopData = useTopData((state) => state.setTopData)
  setTopData(topData)
  const { image, alt, description } = useTopData((state) => state.logoData)
  return (
    <>
      <header className='flex items-center justify-between w-full h-16'>
        <div className='flex items-center'>
          <Image
            src={image.url}
            width={image.width}
            height={image.height}
            priority
            alt={alt}
            className='w-10 ml-pc-m'
          />
          <p className='mt-4 ml-4 text-xs'>{description}</p>
        </div>
        <Navigation />
      </header>
      <div className='h-full bg-purple-300'></div>
      <div className='h-full bg-pink-300'></div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const topData = await getTopData()
  return {
    props: {
      topData,
      title: 'トップ|CDC新卒採用サイト',
    },
  }
}
