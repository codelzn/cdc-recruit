import type { GetServerSideProps } from 'next'
import TopCom from '@/components/Top'
import CompanyCom from '@/components/Company'
import KeywordCom from '@/components/Keyword'
import RecruitCom from '@/components/Recruit'

export default function Page(props) {
  return (
    <>
      <TopCom />
      <CompanyCom />
      <KeywordCom />
      <RecruitCom />
    </>
  )
}
export const getStaticProps: GetServerSideProps = async () => {
  return { props: { title: 'トップ|CDC新卒採用サイト' } }
}
