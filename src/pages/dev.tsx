import Logo from '@/components/Top/Header/ui/Logo'
import Navigation from '@/components/Top/Header/ui/Navigation'
import { getTopData } from '@/libs'
import { TopPageProps } from '@/types'
import { GetStaticProps } from 'next'
import { useTopData } from '@/store'

type Props = {
  topData: TopPageProps
}

export default function Dev({ topData }: Props) {
  const setTopData = useTopData((state) => state.setTopData)
  setTopData(topData)
  return (
    <>
      <header className='fixed top-0 w-full h-16 bg-red-300'>
        <Logo />
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
