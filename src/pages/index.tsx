import type { GetStaticProps } from 'next'
import TopCom from '@/components/Top'
import CompanyCom from '@/components/Company'
import KeywordCom from '@/components/Keyword'
import RecruitCom from '@/components/Recruit'
import { getTopData } from '@/libs/hygraph'
import type { TopPageProps } from '@/types/topPageProps'
export default function Page({ logoData, navigation, catchcopy }: TopPageProps) {
  return (
    <>
      {/* <TopCom /> */}
      <CompanyCom />
      <KeywordCom />
      <RecruitCom />
    </>
  )
}
// get server side props
export const getStaticProps: GetStaticProps = async () => {
  const { logoData, navigation, catchcopy } = await getTopData()

  return {
    props: {
      logoData,
      navigation,
      catchcopy,
      title: 'トップ|CDC新卒採用サイト',
    },
  }
}
