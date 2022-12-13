import type { GetStaticProps } from 'next'
import MemberCom from '@/components/Member'
import { getMemberData } from '@/libs'
import type { Member } from '@/types'
import { useMemberData } from '@/store'

type Props = {
  members: Member[]
}

export default function Page({ members }: Props) {
  const setMemberData = useMemberData((state) => state.setMemberData)
  setMemberData(members)
  return <MemberCom />
}

export const getStaticProps: GetStaticProps = async () => {
  const members = await getMemberData()
  return { props: { members, title: '優秀な人達を知る|CDC新卒採用サイト' } }
}
