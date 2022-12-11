import React from 'react'
import { AnimatePresence } from 'framer-motion'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <AnimatePresence mode='wait' initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
      {children}
    </AnimatePresence>
  )
}
