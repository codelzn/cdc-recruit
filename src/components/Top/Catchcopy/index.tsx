import { useTopData } from '@/store'

export default function Catchcopy() {
  const catchcopy = useTopData((state) => state.catchcopy)
  return (
    <>
      <h1 className='font-semibold leading-snug text-8xl'>
        あなたの優秀さを
        <br />
        実らせる
      </h1>
    </>
  )
}
