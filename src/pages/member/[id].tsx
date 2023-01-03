import { useRouter } from 'next/router'
import MemberCom from '@/components/Member'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getMemberData } from '@/libs'
import { useMemberData } from '@/store'
import { Member } from '@/types'

type Props = {
  members: Member[]
}

export default function Page({ members }: Props) {
  useMemberData((state) => state.setMemberData)(members)
  const router = useRouter()
  const { id } = router.query
  return (
    <>
      {/* <div className='fixed top-0 left-0 w-full h-full -z-10'>
        <MemberCom />
      </div> */}
      <div className='w-full h-full bg-red-300 mt-[100vh]'></div>
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

export const getStaticPaths: GetStaticPaths = async () => {
  const members = await getMemberData()
  const paths = members.map((_, index) => ({
    params: { id: index.toString() },
  }))
  return {
    paths,
    fallback: false,
  }
}
