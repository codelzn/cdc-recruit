import { useTopData } from '@/store'
import Link from 'next/link'

export default function RecruitCom() {
  const recruits = useTopData((state) => state.recruits)
  return (
    <>
      <section id='recruit' className='px-10 pt-24 pb-16 2xl:px-16 max-lg:pt-16 h-fit max-lg:px-4'>
        <h2 className='text-4xl font-bold'>採用情報</h2>
        <ul className='flex flex-col px-5 py-6 mt-10 neu_glass gap-y-5'>
          {recruits.map((item, index) => (
            <li key={index} className='w-full grid grid-cols-10 max-lg:flex max-lg:flex-col'>
              <div className='col-span-3 max-lg:font-medium max-lg:text-lg 2xl:text-xl max-lg:tracking-wider'>
                {item.subtitle}
              </div>
              <ul className='col-span-7 2xl:text-lg 2xl:leading-loose'>
                {item.recruitdata.length > 1 ? (
                  <>
                    {item.recruitdata.map((ctx, index) => (
                      <li
                        key={index}
                        className={`ml-4 max-lg:ml-6 leading-loose tracking-wider ${
                          ctx.type === 'A' ? 'list-disc' : ''
                        }`}>
                        {ctx.content}
                      </li>
                    ))}
                  </>
                ) : (
                  <>
                    {item.recruitdata.map((ctx, index) => (
                      <li key={index} className='leading-loose tracking-wider'>
                        {ctx.content}
                      </li>
                    ))}
                  </>
                )}
              </ul>
            </li>
          ))}
        </ul>
        <Link
          href='https://job.mynavi.jp/24/pc/search/corp71482/outline.html'
          className='block px-10 py-2 mx-auto mt-10 text-4xl font-bold tracking-widest text-white rounded-lg cursor-pointer max-lg:text-2xl max-lg:mt-10 w-fit bg-cdc-blue'>
          ENTRY
        </Link>
      </section>
    </>
  )
}
