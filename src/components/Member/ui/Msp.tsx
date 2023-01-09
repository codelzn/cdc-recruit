import { useMemberData } from '@/store'
import { useRouter } from 'next/router'
import { useEffect, useMemo } from 'react'

export default function MSp() {
  const members = useMemberData((state) => state.members)
  const router = useRouter()
  const activeMember = useMemo(() => Number(router.asPath.split('/')[2]) ?? -1, [router.asPath])
  const toDetails = (index: number) => {
    router.push(`/member/${index}`)
  }
  return (
    <>
      <ul className='mx-auto mt-24 w-fit'>
        {members.map((member, index) => (
          <li
            onClick={() => toDetails(index)}
            key={index}
            className={`${activeMember === index ? 'text-red-500' : ''} `}>
            {member.memberName}
          </li>
        ))}
      </ul>
    </>
  )
}
