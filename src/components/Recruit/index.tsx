import { useTopData } from '@/store'

export default function RecruitCom() {
  const recruits = useTopData((state) => state.recruits)
  return (
    <>
      <div className='h-full bg-lime-300 grid place-items-center'>
        <h1>Recruitコンポーネント</h1>
      </div>
    </>
  )
}
