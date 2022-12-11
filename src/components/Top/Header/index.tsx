import type { LogoDatum, Navigation } from '@/types/topData'
type Props = {
  logoData: LogoDatum
  navigation: Navigation
}
export default function Header({ logoData, navigation }: Props) {
  return (
    <>
      <header>header</header>
    </>
  )
}
