import MemberCom from '@/components/Member'
import Header from '@/components/ui/Header'
import { useGlobalState } from '@/store'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

type Props = {
  children: React.ReactNode
}

export default function MemberLayout({ children }: Props) {
  const { memberDetailActive, setMemberDetailActive } = useGlobalState((state) => state)
  const { asPath } = useRouter()
  useEffect(() => {
    if (asPath === '/member') {
      setMemberDetailActive(false)
    } else {
      setMemberDetailActive(true)
    }
  }, [asPath])
  return (
    <>
      <Header />
      <div className={`fixed top-0 left-0 w-full h-full ${memberDetailActive ? '-z-10' : ''}`}>
        <MemberCom />
      </div>
      {children ? <>{children}</> : null}
    </>
  )
}
