import { type Member } from '@/types'
import Image from 'next/image'
import Footer from '../ui/Footer'
import { useRouter } from 'next/router'

type Props = {
  mData: Member
  nData: Member
}

function MemDetail({ mData, nData }: Props) {
  const router = useRouter()
  const toNext = () => {
    const next = mData.key === 6 ? 0 : mData.key
    router.push(`/member/${next}`)
  }
  const toMemberIndex = () => {
    router.push('/member')
  }
  return (
    <>
      {/* インタビュー */}
      <ul className='flex flex-col items-center w-full py-20 h-fit bg-cdc-white gap-20'>
        {mData.interviews.map((interview, index) => (
          <li key={index} className='relative flex flex-col items-center w-4/5 px-10'>
            <div className='absolute top-0 left-0 flex items-start text-4xl gap-2'>
              <i className='text-xl font-blod'>#</i>
              <span>0{index + 1}</span>
            </div>
            <h3 className='w-4/5 mb-10 text-4xl font-semibold leading-normal tracking-wider'>
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
      {/* スケジュール（あったら） */}
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
      {/* 次の人 */}
      <div className='w-full h-fit bg-cdc-white'>
        <div className='relative w-4/5 mx-auto'>
          <div className='absolute text-6xl font-semibold top-3 left-10'>NEXT</div>
          <div className='absolute flex flex-col text-4xl left-16 top-1/2 -translate-y-1/2 gap-5'>
            <p className='font-medium leading-normal'>
              {nData.catchphrase[0]}
              <br />
              {nData.catchphrase[1]}
            </p>
            <p className='text-2xl'>{nData.memberName}</p>
            <div
              className='flex items-center px-5 py-2 text-xl text-white rounded-lg -tracking-wide bg-cdc-gray gap-4 w-fit'
              onClick={() => toNext()}>
              <span>出会う</span>
              <span className='w-10 h-5'>
                <svg fill='#fff' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 243.58'>
                  <path d='M373.57 0 512 120.75 371.53 243.58l-20.92-23.91 94.93-83L0 137.09v-31.75l445.55-.41-92.89-81.02z' />
                </svg>
              </span>
            </div>
          </div>
          <Image
            src={mData.nextImg.url}
            width={mData.nextImg.width}
            height={mData.nextImg.height}
            alt={`${nData.memberName}の写真`}
            className='object-cover object-top w-full h-auto mx-auto'
          />
        </div>
      </div>
      {/* 一覧に戻る */}
      <div className='flex items-center justify-center w-full h-16 text-2xl text-white bg-cdc-gray gap-10' onClick={() => toMemberIndex()}>
        <span className='w-10 h-5 rotate-180'>
          <svg fill='#fff' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 243.58'>
            <path d='M373.57 0 512 120.75 371.53 243.58l-20.92-23.91 94.93-83L0 137.09v-31.75l445.55-.41-92.89-81.02z' />
          </svg>
        </span>
        <span>一覧に戻る</span>
      </div>
      <Footer />
    </>
  )
}

export default MemDetail
