import { useRouter } from 'next/router'
import MemDetail from '@/components/MemDetail'
import type { GetStaticPaths, GetStaticProps } from 'next'
import { getMemberData } from '@/libs'
import { useMemberData } from '@/store'
import { Member } from '@/types'
import { useEffect, useState } from 'react'

type Props = {
  members: Member[]
}

export default function MDtails({ members }: Props) {
  const setMemberData = useMemberData((state) => state.setMemberData)
  const allMembers = members
  const { id } = useRouter().query
  const currentMember = allMembers[Number(id)]
  const nextMember = allMembers[Number(id) === allMembers.length - 1 ? 0 : Number(id) + 1]
  // こうしないと、スマホ上でバグる
  // https://github.com/vercel/next.js/discussions/35773
  // https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
  const [showChild, setShowChild] = useState(false)
  useEffect(() => {
    setMemberData(members)
    setShowChild(true)
  })
  if (!showChild) return null
  return (
    <>
      <div className='w-full h-full mt-[100vh]'>
        <MemDetail mData={currentMember} nData={nextMember} />
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
