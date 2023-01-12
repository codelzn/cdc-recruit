import { useTopData } from '@/store'
import { type CdcDatum } from '@/types'

function Details({ item, order }: { item: CdcDatum; order: number }) {
  const { type, subTitle, data, content, img } = item
  const isOdd = order % 2 === 0
  return (
    <li
      className={`relative p-10 2xl:p-16 max-lg:p-4 w-[86%] 2xl:w-4/5 max-lg:w-full neu_glass rounded-2xl ${
        isOdd ? 'self-end' : ''
      }`}>
      {/* ここはnextのImage使うとスマホブラウザが崩れる、理由は不明 */}
      <picture
        className={`absolute max-lg:static w-1/2 max-lg:w-full -top-20 ${
          isOdd ? 'lg:-left-32 max-lg:left-0' : '-right-32 max-lg:right-0'
        }`}>
        <img src={img.url} alt={subTitle.toString()} />
      </picture>
      <div className={`w-1/2 max-lg:w-full ${isOdd ? 'float-right' : ''}`}>
        <div className='flex justify-around pb-8 2xl:pb-12'>
          {type === 'A' && (
            <ul className='text-lg tracking-wider 2xl:text-2xl 2xl:leading-extra-loose whitespace-nowrap leading-extra-loose max-lg:w-2/5'>
              {subTitle.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
          <h4 className='font-extrabold text-center text-9xl max-lg:text-7xl max-lg:flex-1'>
            {type === 'A'
              ? data
              : data.map((item, index) =>
                  /\d/.test(item) ? (
                    <span key={index}>{item}</span>
                  ) : (
                    <span className='text-6xl font-normal max-lg:text-4xl' key={index}>
                      {item}
                    </span>
                  ),
                )}
          </h4>
        </div>
        <p className='text-base leading-loose tracking-widest max-lg:leading-loose max-lg:text-sm 2xl:text-lg 2xl:leading-loose'>
          {content}
        </p>
      </div>
    </li>
  )
}

export default function CdcData() {
  const title = useTopData((state) => state.introduce.title[1])
  const cdcData = useTopData((state) => state.cdcData)
  return (
    <section className='px-10 2xl:px-16 max-lg:px-4 h-fit max-lg:mt-20'>
      <h3 className='w-1/2 pb-4 text-3xl border-b-2 border-black 2xl:text-4xl max-lg:text-2xl max-lg:w-full'>
        {title}
      </h3>
      <ul className='flex flex-col items-center py-32 max-lg:py-16 gap-40 max-lg:gap-20 w-[90%] max-lg:w-full'>
        {cdcData.map((item, index) => (
          <Details key={index} item={item} order={index} />
        ))}
      </ul>
    </section>
  )
}
