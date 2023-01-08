import { useTopData } from '@/store'
import Image from 'next/image'

export default function CompanyCom() {
  const { midashi, title, text, detailTitle, details, introimg } = useTopData((state) => state.introduce)
  return (
    <>
      <section id='company' className='h-full px-10 pt-24 max-lg:px-4 max-lg:h-fit'>
        <h2 className='text-4xl font-bold'>{midashi}</h2>
        <div className='flex justify-around mt-14 max-lg:flex-col'>
          <div className='w-1/2 max-lg:w-full grid place-items-center max-lg:mb-10'>
            <Image
              src={introimg.url}
              width={introimg.width}
              height={introimg.height}
              alt={title[0]}
              priority
              className='w-4/5 max-lg:w-full'
            />
          </div>
          <div className='w-1/2 p-5 max-lg:w-full neu_glass'>
            <h3 className='pb-4 text-3xl border-b-2 border-black max-lg:text-2xl'>{title[0]}</h3>
            <p className='mt-6 leading-loose max-lg:text-sm max-lg:leading-loose'>{text}</p>
            <h4 className='mt-6 text-2xl max-lg:text-xl'>{detailTitle}</h4>
            <ul className='max-lg:text-sm max-lg:leading-loose'>
              {details.map((item, index) => (
                <li key={index} className='mt-4 list-disc list-inside'>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
