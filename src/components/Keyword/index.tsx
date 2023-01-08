import { useTopData } from '@/store'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function KeywordCom() {
  const { img, catchcopy, title, subTitle, btnLink, btnText } = useTopData((state) => state.keyword)
  const keyContents = useTopData((state) => state.keyContents)
  const [activeContent, setActiveContent] = useState(0)
  return (
    <section id='keyword' className='flex flex-col px-32 py-20 text-white max-lg:px-4 h-fit bg-cdc-gray'>
      <div className='relative w-full h-fit'>
        <Image
          priority
          src={img.url}
          width={img.width}
          height={img.height}
          alt={title}
          className='object-cover max-lg:h-[50vh]'
        />
        <div className='absolute top-0 flex flex-col items-center justify-around w-full h-full bg-gray-filter'>
          <p className='-mt-16 text-3xl font-semibold leading-loose text-center max-lg:text-lg max-lg:font-medium'>
            {catchcopy[0]}
            <br className='hidden max-lg:block' />
            {catchcopy[1]}
            <br />
            {catchcopy[2]}
          </p>
          <div className='-mb-16 text-center'>
            <h2 className='text-5xl font-bold max-lg:text-3xl'>{title}</h2>
            <p className='mt-10 text-3xl max-lg:text-xl'>{subTitle}</p>
          </div>
        </div>
      </div>
      <div className='mt-10 tracking-widest'>
        <h3 className='text-3xl'>{keyContents[activeContent].title}</h3>
        <h4 className='my-6 text-2xl'>{keyContents[activeContent].subTitle}</h4>
        <ul className='flex flex-col px-5 text-sm tracking-wider gap-2'>
          {keyContents[activeContent].content.map((item, index) => (
            <li className='list-disc' key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div
        className='relative z-10 self-end px-2 my-6 mr-16 font-extrabold max-lg:mb-10 w-fit'
        onClick={() => setActiveContent((activeContent) => (activeContent === 0 ? 1 : 0))}>
        {activeContent === 0 ? 'NEXT' : 'PREV'}
        <div className={`absolute top-0 w-full h-full btnarrow ${activeContent === 0 ? '' : 'rot'}`}></div>
      </div>
      <Link
        className='flex items-center justify-around h-10 px-6 mx-auto text-black rounded-lg bg-cdc-white w-fit gap-6'
        href={btnLink}>
        <span className='btn_maru'></span>
        <p>{btnText}</p>
        <span className='btn_arrow'></span>
      </Link>
    </section>
  )
}
