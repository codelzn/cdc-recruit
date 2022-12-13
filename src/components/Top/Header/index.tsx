import { useTopData } from '@/store'
export default function Header() {
  const { logoData, navigations } = useTopData((state) => state)
  return (
    <>
      <header className='w-full h-16 bg-red-400'>header</header>
    </>
  )
}
