import { useTopData } from '@/store'
export default function Header() {
  const { logoData, navigations } = useTopData((state) => state)
  return (
    <>
      <header>header</header>
    </>
  )
}
