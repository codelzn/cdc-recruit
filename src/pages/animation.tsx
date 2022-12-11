import { useAnimation } from 'framer-motion'
export default function Animation() {
  const controls = useAnimation()
  return (
    <>
      <div className='w-full h-full bg-red-300'>content1</div>
      <div className='w-full h-full bg-slate-400'>content2</div>
      <div className='w-full h-full bg-orange-400'>content3</div>
      <div className='w-full h-full bg-blue-200'>content4</div>
      <div className='w-full h-full bg-violet-400'>content5</div>
    </>
  )
}
