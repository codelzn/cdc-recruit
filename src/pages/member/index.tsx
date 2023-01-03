import type { GetStaticProps } from 'next'
import MemberCom from '@/components/Member'
import { getMemberData } from '@/libs'
import type { Member } from '@/types'
import { useMemberData } from '@/store'
import Header from '@/components/ui/Header'

type Props = {
  members: Member[]
}

export default function Page({ members }: Props) {
  useMemberData((state) => state.setMemberData)(members)
  return (
    <>
      {/* <Header /> */}
      <div className='fixed top-0 left-0 w-full h-full'>
        <MemberCom />
      </div>
    </>
  )
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
