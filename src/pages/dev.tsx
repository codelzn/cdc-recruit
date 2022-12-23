import { getTopData } from '@/libs'
import { TopPageProps } from '@/types'
import { GetStaticProps } from 'next'
import { useTopData } from '@/store'
import Header from '@/components/Top/Header'
import Message from '@/components/Message'
type Props = {
  topData: TopPageProps
}

export default function Dev({ topData }: Props) {
  const setTopData = useTopData((state) => state.setTopData)
  setTopData(topData)
  return (
    <>
      <Header />
      <div className='bg-blue-300 h-[70%]'></div>
      <Message />
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
