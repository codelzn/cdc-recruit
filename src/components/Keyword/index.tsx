import { useTopData } from '@/store'

export default function KeywordCom() {
  const { keyword, keyContents } = useTopData((state) => state)
  return (
    <>
      <div className='h-full bg-indigo-400 grid place-items-center'>
        <h1>Keywordコンポーネント</h1>
      </div>
    </>
  )
}
