import type { GetStaticProps } from 'next'
import TopCom from '@/components/Top'
import MessageCom from '@/components/Message'
import CompanyCom from '@/components/Company'
import CdcDataCom from '@/components/CdcData'
import KeywordCom from '@/components/Keyword'
import RecruitCom from '@/components/Recruit'
import { getTopData } from '@/libs'
import { TopPageProps } from '@/types'
import { useTopData } from '@/store'
import Footer from '@/components/ui/Footer'
import Header from '@/components/ui/Header'
type Props = {
  topData: TopPageProps
}
export default function TopPage({ topData }: Props) {
  useTopData((state) => state.setTopData)(topData)
  return (
    <>
      <Header />
      <TopCom />
      <MessageCom />
      <CompanyCom />
      <CdcDataCom />
      {/* <KeywordCom />
      <RecruitCom /> */}
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
