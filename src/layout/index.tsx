import React, { useRef, forwardRef } from 'react'
import { mergeRefs } from 'react-merge-refs'

type Props = {
  children: React.ReactNode
  [key: string]: any
}

const Layout = forwardRef<any, Props>(({ children, ...props }, ref) => {
  const localRef = useRef()
  return <div ref={mergeRefs([ref, localRef])}>{children}</div>
})
Layout.displayName = 'Layout'

export default Layout
