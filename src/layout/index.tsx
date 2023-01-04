import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import MemberLayout from './MemberLayout'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  const { asPath } = useRouter()
  const pathname = asPath.split('#')[0]
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <AnimatePresence mode='wait' initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
      {/* <motion.div
        className='h-full'
        key={route}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          type: 'tween',
          ease: 'linear',
          duration: 0.5,
        }}>
        {children}
      </motion.div> */}
      {pathname === '/' ? <>{children}</> : <MemberLayout>{children}</MemberLayout>}
    </AnimatePresence>
  )
}
