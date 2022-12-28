import { getTopData } from '@/libs'
import { TopPageProps } from '@/types'
import { GetStaticProps } from 'next'
import { useTopData } from '@/store'
import Header from '@/components/ui/Header'
import Message from '@/components/Message'
import CompanyCom from '@/components/Company'
import CdcData from '@/components/CdcData'
import KeywordCom from '@/components/Keyword'
import RecruitCom from '@/components/Recruit'
import Footer from '@/components/ui/Footer'
type Props = {
  topData: TopPageProps
}

export default function Dev({ topData }: Props) {
  useTopData((state) => state.setTopData)(topData)
  return (
    <>
      <Header />
      <div className='bg-blue-300 h-[70%]'></div>
      <Message />
      <CompanyCom />
      <CdcData />
      <KeywordCom />
      <RecruitCom />
      <Footer />
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
