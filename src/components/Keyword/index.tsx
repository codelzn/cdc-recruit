import { useTopData } from '@/store'
import Link from 'next/link'
import Image from 'next/image'

export default function KeywordCom() {
  const { img, catchcopy, title, subTitle, btnLink, btnText } = useTopData((state) => state.keyword)
  const keyContents = useTopData((state) => state.keyContents)
  return (
    <section className='flex flex-col px-32 py-20 text-white h-fit bg-cdc-gray'>
      <div className='relative w-full h-fit'>
        <Image src={img.url} width={img.width} height={img.height} alt={title} />
        <div className='absolute top-0 flex flex-col items-center justify-around w-full h-full bg-gray-filter'>
          <p className='text-3xl font-semibold leading-loose text-center -mt-14'>
            {catchcopy[0]}
            <br />
            {catchcopy[1]}
          </p>
          <div className='text-center'>
            <h2 className='text-5xl font-bold'>{title}</h2>
            <p className='mt-10 text-3xl'>{subTitle}</p>
          </div>
        </div>
      </div>
      <div className='mt-10 tracking-widest'>
        <h3 className='text-3xl'>{keyContents[0].title}</h3>
        <h4 className='my-6 text-2xl'>{keyContents[0].subTitle}</h4>
        <ul className='flex flex-col text-sm tracking-wider gap-2'>
          {keyContents[0].content.map((item, index) => (
            <li className='list-disc' key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className='relative z-10 px-2 my-4 font-extrabold w-fit btnarrow'>NEXT</div>
      <Link href={btnLink}>{btnText}</Link>
    </section>
  )
}
