import { useMemberData } from '@/store'
export default function MemberCom() {
  const members = useMemberData((state) => state.members)
  return (
    <>
      <h1>Memberコンポーネント</h1>
    </>
  )
}
