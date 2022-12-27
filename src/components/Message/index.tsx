import { useTopData, useGlobalState } from '@/store'
import { motion } from 'framer-motion'
import Image from 'next/image'
export default function Message() {
  const { bgimg, description } = useTopData((state) => state.catchcopy)
  const moveAnime = useGlobalState((state) => state.moveAnime)
  return (
    <>
      <motion.section
        layout
        // className={`relative h-[110%] overflow-hidden ${moveAnime ? '-mt-[14%]' : ''}`}
        className={`relative h-[110%] overflow-hidden`}
        transition={{ duration: 1 }}>
        <Image
          src={bgimg.url}
          width={bgimg.width}
          height={bgimg.height}
          alt='introduce'
          priority
          style={{ width: 'auto' }}
          className='absolute h-full overflow-hidden rounded-xl -right-52'
        />
        <ul className='absolute p-10 text-3xl tracking-widest bottom-10 left-10 leading-extra-loose message_class w-fit'>
          {description.map((text, index) => (
            <li key={index}>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </motion.section>
    </>
  )
}
