import React from 'react'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  const { route } = useRouter()
  return (
    <AnimatePresence mode='wait' initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
      <motion.div
        className='h-full'
        key={route}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          type: 'tween',
          ease: 'linear',
          duration: 0.5,
          delay: 0.1,
        }}>
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
