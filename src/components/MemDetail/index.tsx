import { type Member } from '@/types'
import Image from 'next/image'
import { useMemberData } from '@/store'

type Props = {
  mData: Member
}

function MemDetail({ mData }: Props) {
  const members = useMemberData((state) => state.members)
  const nextKey = (mData.key = members.length ? 1 : mData.key + 1)
  const nextMember = members.filter((member) => member.key === nextKey)[0]
  return (
    <>
      <ul className='flex flex-col items-center w-full py-20 h-fit bg-cdc-white gap-20'>
        {mData.interviews.map((interview, index) => (
          <li key={index} className='relative flex flex-col w-4/5 px-10'>
            <div className='absolute top-0 flex items-start text-4xl -left-24 gap-2'>
              <i className='text-xl font-blod'>#</i>
              <span>0{index + 1}</span>
            </div>
            <h3 className='mb-10 text-4xl font-semibold leading-normal tracking-wider'>
              {interview.title[0]}
              {interview.title[1] ? (
                <>
                  <br />
                  {interview.title[1]}
                </>
              ) : null}
            </h3>
            <p className='w-4/5 px-10 py-5 mb-20 leading-loose tracking-widest neu_glass'>{interview.content}</p>
            {interview.sidepic ? (
              <Image
                src={interview.sidepic.url}
                width={interview.sidepic.width}
                height={interview.sidepic.height}
                alt={`${mData.memberName}の写真`}
                className='mx-auto max-w-[1000px]'
              />
            ) : null}
          </li>
        ))}
      </ul>
      {!!mData.schedule && (
        <div className='w-full pb-20 grid place-items-center h-fit bg-cdc-white'>
          <div className='flex flex-col w-4/5 mx-auto bg-cdc-white h-fit'>
            <span className='self-center w-full border-t-2 border-black'></span>
            <div className='flex items-center'>
              <svg className='scale-75' xmlns='http://www.w3.org/2000/svg' height='48' width='48'>
                <path d='m31.35 33.65 2.25-2.25-7.95-8V13.35h-3V24.6ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24t1.575-7.75q1.575-3.65 4.3-6.375 2.725-2.725 6.375-4.3Q19.9 4 24 4t7.75 1.575q3.65 1.575 6.375 4.3 2.725 2.725 4.3 6.375Q44 19.9 44 24t-1.575 7.75q-1.575 3.65-4.3 6.375-2.725 2.725-6.375 4.3Q28.1 44 24 44Zm0-20Zm0 17q7 0 12-5t5-12q0-7-5-12T24 7q-7 0-12 5T7 24q0 7 5 12t12 5Z' />
              </svg>
              <span className='text-xl font-semibold'>1日のスケジュール</span>
            </div>
            <div className='flex mt-10 gap-16'>
              <ul className='flex flex-col gap-5'>
                {mData.schedule.times.map((time, index) => (
                  <li className='px-2 py-1 text-center text-white rounded-lg bg-cdc-blue' key={index}>
                    {time}
                  </li>
                ))}
              </ul>
              <ul className='flex flex-col gap-5'>
                {mData.schedule.contents.map((content, index) => (
                  <li className='px-2 py-1' key={index}>
                    {content}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      <div className='w-full h-fit bg-cdc-white'>
        <div className='relative w-4/5 mx-auto'>
          <div className='absolute text-4xl font-semibold top-3 left-10'>NEXT</div>
          <div className='absolute text-4xl top-1/2'>
            <p>
              {nextMember.catchphrase[0]}
              <br />
              {nextMember.catchphrase[1]}
            </p>
            <p>{nextMember.memberName}</p>
          </div>
          <Image
            src={mData.nextImg.url}
            width={mData.nextImg.width}
            height={mData.nextImg.height}
            alt={`${nextMember.memberName}の写真`}
            className='object-cover object-top w-full h-auto mx-auto'
          />
        </div>
      </div>
    </>
  )
}

export default MemDetail
