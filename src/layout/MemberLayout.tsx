import MemberPc from '@/components/MemberPc'
import MemberSp from '@/components/MemberSp'
import Header from '@/components/ui/Header'
import { useGlobalState } from '@/store'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDeviceType } from '@/hooks'

type Props = {
  children: React.ReactNode
}

export default function MemberLayout({ children }: Props) {
  const { memberDetailActive, setMemberDetailActive } = useGlobalState((state) => state)
  const { asPath } = useRouter()
  const { isMobile } = useDeviceType()
  useEffect(() => {
    if (asPath === '/member' || asPath === '/member/') {
      setMemberDetailActive(false)
    } else {
      setMemberDetailActive(true)
    }
  }, [asPath])
  return (
    <>
      <Header />
      {isMobile ? (
        <main className={`fixed top-0 left-0 w-full h-full ${memberDetailActive ? '-z-10' : ''}`}>
          <MemberSp />
        </main>
      ) : (
        <main className={`fixed top-0 left-0 w-full h-full ${memberDetailActive ? '-z-10' : ''}`}>
          <MemberPc />
        </main>
      )}
      {children ? <>{children}</> : null}
    </>
  )
}
