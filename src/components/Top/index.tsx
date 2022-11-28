import topData from '@/data/top.json'

export default function TopCom() {
  return (
    <>
      <div className='h-full grid place-items-center'>
        <h1>Topコンポーネント</h1>
        <h1 className='text-8xl'>{`${topData.catchcopy.title[0]}${topData.catchcopy.title[1]}`}</h1>
      </div>
    </>
  )
}
