import type { GetStaticProps } from 'next'
import TopCom from '@/components/Top'
import CompanyCom from '@/components/Company'
import KeywordCom from '@/components/Keyword'
import RecruitCom from '@/components/Recruit'
import { getTopData } from '@/libs'
import { TopPageProps } from '@/types'
import { useTopData } from '@/store'
type Props = {
  topData: TopPageProps
}
export default function Page({ topData }: Props) {
  const setTopData = useTopData((state) => state.setTopData)
  setTopData(topData)
  return (
    <>
      <TopCom />
      <CompanyCom />
      <KeywordCom />
      <RecruitCom />
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
