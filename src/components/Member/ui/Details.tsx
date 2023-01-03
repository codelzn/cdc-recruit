import { useMemberData } from '@/store'

type Props = {
  active: number
}

export default function Details({ active = 0 }: Props) {
  const members = useMemberData((state) => state.members)
  const member = members[active]
  return (
    <>
      <h2 className='absolute text-4xl font-semibold leading-normal tracking-wider left-16 top-1/3'>
        {member.catchphrase[0]}
        <br />
        {member.catchphrase[1]}
      </h2>
      <div className='absolute text-2xl leading-loose tracking-wider text-right top-[60%] right-[56%]'>
        <p>{member.memberName}</p>
        <p className='text-xl'>{member.duties}</p>
      </div>
      <div className='absolute flex items-center px-5 py-2 text-xl text-white rounded-lg -tracking-wide bg-cdc-gray left-16 bottom-[20%] gap-4'>
        <span>出会う</span>
        <span className='w-10 h-5'>
          <svg
            fill='#fff'
            xmlns='http://www.w3.org/2000/svg'
            shape-rendering='geometricPrecision'
            text-rendering='geometricPrecision'
            image-rendering='optimizeQuality'
            fill-rule='evenodd'
            clip-rule='evenodd'
            viewBox='0 0 512 243.58'>
            <path
              fill-rule='nonzero'
              d='M373.57 0 512 120.75 371.53 243.58l-20.92-23.91 94.93-83L0 137.09v-31.75l445.55-.41-92.89-81.02z'
            />
          </svg>
        </span>
      </div>
    </>
  )
}
