import type { GetStaticProps } from 'next'
import dynamic from 'next/dynamic'
import { getMemberData } from '@/libs'

const MemberCom = dynamic(() => import('@/components/Member'), { ssr: false })

export default function Page({ members }) {
  return <MemberCom />
}

export const getStaticProps: GetStaticProps = async () => {
  const { members } = await getMemberData()
  return { props: { members, title: '優秀な人達を知る|CDC新卒採用サイト' } }
}
