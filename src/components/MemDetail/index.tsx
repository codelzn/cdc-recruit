import { type Member } from '@/types'

type Props = {
  mData: Member
}

function MemDetail({ mData }: Props) {
  return (
    <>
      <div className='w-full h-full font-extrabold bg-purple-100 grid place-items-center text-9xl'>
        {mData.memberName}
      </div>
      <div className='w-full h-full font-extrabold bg-sky-300 grid place-items-center text-9xl'>
        {mData.catchphrase}
      </div>
    </>
  )
}

export default MemDetail
