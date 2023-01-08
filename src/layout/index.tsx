import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import MemberLayout from './MemberLayout'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  const { asPath } = useRouter()
  const pathname = asPath.split('#')[0]
  return (
    <AnimatePresence mode='wait' initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
      {pathname === '/' ? <>{children}</> : <MemberLayout>{children}</MemberLayout>}
    </AnimatePresence>
  )
}
