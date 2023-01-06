import type { GetStaticProps } from 'next'
import { getMemberData } from '@/libs'
import type { Member } from '@/types'
import { useMemberData } from '@/store'
import Header from '@/components/ui/Header'

type Props = {
  members: Member[]
}

export default function MemberPage({ members }: Props) {
  useMemberData((state) => state.setMemberData)(members)
  return null
}

export const getStaticProps: GetStaticProps = async () => {
  const members = await getMemberData()
  return {
    props: {
      members,
      title: '優秀な人達を知る|CDC新卒採用サイト',
    },
  }
}
