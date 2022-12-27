import { useTopData } from '@/store'
import { type CdcDatum } from '@/types'
import Image from 'next/image'

function Details({ item, order }: { item: CdcDatum; order: number }) {
  const { type, subTitle, data, content, img } = item
  return (
    <li className='w-4/5 p-10 neu_glass rounded-2xl'>
      {/* <Image src={img.url} width={img.width} height={img.height} alt={subTitle.toString()} className='w-2/5' priority /> */}
      <div className='w-1/2'>
        {type === 'A' && (
          <ul>
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
        <p>{content}</p>
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
      <ul className='flex flex-col mt-10 gap-40'>
        {cdcData.map((item, index) => (
          <Details key={index} item={item} order={index} />
        ))}
      </ul>
    </section>
  )
}
