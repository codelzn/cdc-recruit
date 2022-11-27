import React, { useRef, forwardRef } from 'react'
import { mergeRefs } from 'react-merge-refs'

type Props = {
  children: React.ReactNode
}

const Layout = forwardRef<HTMLDivElement, Props>(({ children }, ref) => {
  const localRef = useRef()
  return (
    <div style={{ height: '100%' }} ref={mergeRefs([ref, localRef])}>
      {children}
    </div>
  )
})
Layout.displayName = 'Layout'

export default Layout
