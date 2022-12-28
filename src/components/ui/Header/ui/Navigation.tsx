import React from 'react'
import Link from 'next/link'
import { useTopData } from '@/store'

function Navigation() {
  const navigations = useTopData((state) => state.navigations)
  return (
    <nav className='block w-fit mr-pc-m h-3/5'>
      <ul className='flex items-center h-full text-base font-semibold gap-8'>
        {navigations.map((nav, index) =>
          index !== 5 ? (
            <li key={index}>
              <Link href={nav.to}>{nav.title}</Link>
            </li>
          ) : (
            <li key={index} className='px-6 text-white h-5/6 bg-cdc-blue rounded-md grid place-items-center'>
              <Link href={nav.to}>{nav.title}</Link>
            </li>
          ),
        )}
      </ul>
    </nav>
  )
}

export default Navigation
