import { useRouter } from 'next/router'
import MemDetail from '@/components/MemDetail'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getMemberData } from '@/libs'
import { useMemberData } from '@/store'
import { Member } from '@/types'

type Props = {
  members: Member[]
}

export default function Page({ members }: Props) {
  useMemberData((state) => state.setMemberData)(members)
  const allMembers = useMemberData((state) => state.members)
  const router = useRouter()
  const { id } = router.query
  const currentMember = allMembers[Number(id)]
  return (
    <>
      <div
        className='fixed top-0 left-0 w-32 h-20 text-3xl font-extrabold cursor-pointer bg-cdc-blue grid place-items-center'
        onClick={() => router.back()}>
        BACK（仮）
      </div>
      <div className='w-full h-full mt-[100vh]'>
        <MemDetail mData={currentMember} />
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
