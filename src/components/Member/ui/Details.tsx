import { useMemberData, useGlobalState } from '@/store'
import { motion } from 'framer-motion'

type Props = {
  active: number
  toDetail: () => void
}

const btnVariants = {
  show: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
}

export default function Details({ active = 0, toDetail }: Props) {
  const members = useMemberData((state) => state.members)
  const member = members[active]
  const memberDetailActive = useGlobalState((state) => state.memberDetailActive)
  if (!member) return null
  return (
    <>
      <h2 className='absolute text-4xl font-semibold leading-normal tracking-wider left-16 top-1/3'>
        {member.catchphrase[0]}
        <br />
        {member.catchphrase[1]}
      </h2>
      <div className={`absolute text-2xl leading-loose tracking-wider text-right top-[55%] right-[56%]`}>
        <p>{member.memberName}</p>
        <p className='text-xl'>{member.duties}</p>
      </div>
      <motion.p
        variants={btnVariants}
        animate={memberDetailActive ? 'show' : 'hidden'}
        transition={{ duration: 0.5 }}
        className='absolute w-1/3 text-sm tracking-wider text-right bottom-28 left-16'>
        {member.story}
      </motion.p>
      <motion.div
        animate={memberDetailActive ? 'hidden' : 'show'}
        transition={{ duration: 0.5 }}
        variants={btnVariants}
        className='absolute flex items-center px-5 py-2 text-xl text-white rounded-lg -tracking-wide bg-cdc-gray left-16 bottom-[20%] gap-4'
        onClick={toDetail}>
        <span>出会う</span>
        <span className='w-10 h-5'>
          <svg fill='#fff' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 243.58'>
            <path d='M373.57 0 512 120.75 371.53 243.58l-20.92-23.91 94.93-83L0 137.09v-31.75l445.55-.41-92.89-81.02z' />
          </svg>
        </span>
      </motion.div>
    </>
  )
}
