import { useTopData } from '@/store'
import Image from 'next/image'

export default function CompanyCom() {
  const { midashi, title, text, detailTitle, details, introimg } = useTopData((state) => state.introduce)
  return (
    <>
      <section className='h-full px-10 pt-24'>
        <h2 className='text-4xl font-bold'>{midashi}</h2>
        <div className='flex justify-around mt-14'>
          <div className='w-1/2'>
            <Image
              src={introimg.url}
              width={introimg.width}
              height={introimg.height}
              alt={title}
              priority
              className='w-4/5 mx-auto'
            />
          </div>
          <div className='w-1/2 pl-5'>
            <h3 className='pb-4 text-3xl border-b-2 border-black'>{title}</h3>
            <p className='mt-6 leading-loose'>{text}</p>
            <h4 className='mt-6 text-2xl'>{detailTitle}</h4>
            <ul>
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
