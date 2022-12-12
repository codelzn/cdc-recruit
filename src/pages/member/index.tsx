import type { GetStaticProps } from 'next'
import dynamic from 'next/dynamic'

const MemberCom = dynamic(() => import('@/components/Member'), { ssr: false })

export default function Page(props) {
  return <MemberCom />
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: { title: '優秀な人達を知る|CDC新卒採用サイト' } }
}
