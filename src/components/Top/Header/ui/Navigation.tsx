import React from 'react'
import Link from 'next/link'
import { useTopData } from '@/store'

function Navigation() {
  const navigations = useTopData((state) => state.navigations)
  return (
    <nav className='bg-blue-400 w-fit mr-pc-m'>
      <ul className='flex text-xl gap-8'>
        {navigations.map((nav, index) => (
          <li key={index}>
            <Link href={nav.to}>{nav.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
