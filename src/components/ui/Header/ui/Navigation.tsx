import React from 'react'
import Link from 'next/link'

const navigations = [
  {
    order: 1,
    title: 'トップ',
    to: '/#top',
  },
  {
    order: 2,
    title: 'CDCを知る',
    to: '/#company',
  },
  {
    order: 3,
    title: 'CDCのキーワード',
    to: '/#keyword',
  },
  {
    order: 4,
    title: '優秀な人達を知る',
    to: '/member',
  },
  {
    order: 5,
    title: '採用情報',
    to: '/#recruit',
  },
  {
    order: 6,
    title: 'ENTRY',
    to: 'https://job.mynavi.jp/24/pc/search/corp71482/outline.html',
  },
]

function Navigation() {
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
