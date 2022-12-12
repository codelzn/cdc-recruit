import type { GetStaticProps } from 'next'
import TopCom from '@/components/Top'
import CompanyCom from '@/components/Company'
import KeywordCom from '@/components/Keyword'
import RecruitCom from '@/components/Recruit'
import { getTopData } from '@/libs'
import { TopPageProps } from '@/types'

export default function Page({
  logoData,
  navigations,
  catchcopy,
  introduce,
  cdcData,
  keyword,
  keyContents,
  recruits,
}: TopPageProps) {
  return (
    <>
      <TopCom logoData={logoData} navigations={navigations} catchcopy={catchcopy} />
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
