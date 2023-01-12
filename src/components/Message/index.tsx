import { useTopData, useGlobalState } from '@/store'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useDeviceType } from '@/hooks'
export default function Message() {
  const { bgimg, description } = useTopData((state) => state.catchcopy)
  const moveAnime = useGlobalState((state) => state.moveAnime)
  const { isMobile } = useDeviceType()
  return (
    <>
      <motion.section
        layout
        className={`relative h-full max-lg:h-fit overflow-hidden ${
          moveAnime ? (isMobile ? '-mt-[20%]' : '-mt-[14%]') : ''
        } max-lg:mx-4 2xl:ml-16`}
        // className={`relative h-[110%] overflow-hidden`}
        transition={{ duration: 1 }}>
        <Image
          src={bgimg.url}
          width={bgimg.width}
          height={bgimg.height}
          alt='introduce'
          priority
          style={{ width: 'auto' }}
          className='absolute object-cover h-full overflow-hidden rounded-xl -right-52 max-lg:right-0'
        />
        <ul className='absolute p-10 text-3xl tracking-widest 2xl:p-16 2xl:text-4xl 2xl:leading-extra-loose max-lg:static max-lg:p-5 max-lg:text-lg bottom-10 left-10 leading-extra-loose message_glass w-fit max-lg:mt-20 max-lg:mb-8 max-lg:flex max-lg:flex-col max-lg:gap-4 max-lg:leading-normal max-lg:font-semibold max-lg:mx-4'>
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
