import type { GetStaticProps } from 'next'
import dynamic from 'next/dynamic'

const TopCom = dynamic(() => import('@/components/Top'), { ssr: false })
const CompanyCom = dynamic(() => import('@/components/Company'), { ssr: false })
const KeywordCom = dynamic(() => import('@/components/Keyword'), { ssr: false })
const RecruitCom = dynamic(() => import('@/components/Recruit'), { ssr: false })

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
type StaticProps = {
  title: string
}
export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  return { props: { title: 'トップ|CDC新卒採用サイト' } }
}
