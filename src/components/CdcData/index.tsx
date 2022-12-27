import { useTopData } from '@/store'
import { type CdcDatum } from '@/types'
import Image from 'next/image'

function Details({ item, order }: { item: CdcDatum; order: number }) {
  const { type, subTitle, data, content, img } = item
  const isOdd = order % 2 === 0
  return (
    <li className={`relative p-10 w-[86%] neu_glass rounded-2xl ${isOdd ? 'self-end' : ''}`}>
      <Image
        src={img.url}
        width={img.width}
        height={img.height}
        alt={subTitle.toString()}
        className={`absolute w-1/2 -top-20 ${isOdd ? '-left-32' : '-right-32'}`}
        priority
      />
      <div className={`w-1/2 ${isOdd ? 'float-right' : ''}`}>
        <div className='flex justify-around pb-8'>
          {type === 'A' && (
            <ul className='text-lg tracking-wider leading-extra-loose'>
              {subTitle.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
          <h4 className='font-extrabold text-9xl'>
            {type === 'A'
              ? data
              : data.map((item, index) =>
                  /\d/.test(item) ? (
                    <span key={index}>{item}</span>
                  ) : (
                    <span className='text-6xl font-normal' key={index}>
                      {item}
                    </span>
                  ),
                )}
          </h4>
        </div>
        <p className='text-sm leading-loose tracking-widest'>{content}</p>
      </div>
    </li>
  )
}

export default function CdcData() {
  const title = useTopData((state) => state.introduce.title[1])
  const cdcData = useTopData((state) => state.cdcData)
  return (
    <section className='px-10 h-fit'>
      <h3 className='w-1/2 pb-4 text-3xl border-b-2 border-black'>{title}</h3>
      <ul className='flex flex-col items-center py-32 gap-40 w-[90%]'>
        {cdcData.map((item, index) => (
          <Details key={index} item={item} order={index} />
        ))}
      </ul>
    </section>
  )
}
