import React from 'react'
import { useDeviceType } from '@/hooks'

function Alpha() {
  const { isMobile, isTablet, isDesktop } = useDeviceType()
  return <div className=''>alpha</div>
}

export default Alpha
