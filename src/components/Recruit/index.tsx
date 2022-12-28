import { useTopData } from '@/store'

export default function RecruitCom() {
  const recruits = useTopData((state) => state.recruits)
  return (
    <>
      <section id='recruit' className='px-10 pt-24 pb-16 h-fit'>
        <h2 className='text-4xl font-bold'>採用情報</h2>
        <ul className='flex flex-col px-5 py-6 mt-10 neu_glass gap-y-5'>
          {recruits.map((item, index) => (
            <li key={index} className='w-full grid grid-cols-10'>
              <div className='col-span-3'>{item.subtitle}</div>
              <ul className='col-span-7'>
                {item.recruitdata.length > 1 ? (
                  <>
                    {item.recruitdata.map((ctx, index) => (
                      <li
                        key={index}
                        className={`ml-4 leading-loose tracking-wider ${ctx.type === 'A' ? 'list-disc' : ''}`}>
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
        <div className='px-10 py-2 mx-auto mt-16 text-4xl font-bold tracking-widest text-white rounded-lg w-fit bg-cdc-blue'>
          ENTRY
        </div>
      </section>
    </>
  )
}
