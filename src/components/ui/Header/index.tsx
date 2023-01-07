import Link from 'next/link'
import { useGlobalState } from '@/store'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

const logoData = {
  bigLogo: {
    url: 'https://media.graphassets.com/BhXkMTK5QyGYcTlqi4YY',
    width: 1004,
    height: 733,
  },
  image: {
    url: 'https://media.graphassets.com/a8YNKSeSJ2FXv0GRHqWx',
    width: 617,
    height: 580,
  },
  alt: 'CDCキャリアデザインセンターのロゴ',
  description: 'キャリアデザインセンター',
}
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

export default function Header() {
  const { image, alt, description } = logoData
  const { asPath, push } = useRouter()
  const pathname = asPath.split('#')[0]
  const isMember = pathname.startsWith('/member')
  const moveAnime = useGlobalState((state) => state.moveAnime)
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <motion.header
        layout={!isMember}
        className={`fixed top-0 z-[999] h-16 flex items-center justify-between w-full ${
          moveAnime || isMember ? '' : '-mt-16'
        }`}
        transition={{ duration: 1 }}>
        <div className='flex items-center'>
          <Image
            src={image.url}
            width={image.width}
            height={image.height}
            priority
            alt={alt}
            className='w-10 ml-pc-m max-lg:ml-sp-m'
            onClick={() => push('/')}
          />
          <p className='mt-4 ml-4 text-xs'>{description}</p>
        </div>
        <nav className='w-fit max-lg:mr-sp-m mr-pc-m h-3/5'>
          {/* pc Nav */}
          <ul className={`max-lg:hidden flex items-center h-full text-base font-semibold gap-8`}>
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
          {/* sp Nav */}
          <div
            className='hidden w-12 h-12 text-xs border border-black rounded-full max-lg:grid place-items-center'
            onClick={() => setIsOpen((o) => !o)}>
            {isOpen ? 'CLOSE' : 'MENU'}
          </div>
        </nav>
      </motion.header>
      <motion.ul
        className={`${
          isOpen ? '' : 'hidden'
        } fixed w-full pt-28 px-[20px] text-2xl font-medium h-full bg-cdc-white z-[998]`}>
        {navigations.map((nav, index) =>
          index !== 5 ? (
            <li
              onClick={() => setIsOpen(false)}
              key={index}
              className={`pl-1 ${index === 4 ? 'border-b-2' : ''} border-t-2 border-collapse border-black py-7`}>
              <Link href={nav.to}>{nav.title}</Link>
            </li>
          ) : (
            <li
              key={index}
              className='w-4/5 px-6 mx-auto text-white border-black h-14 bg-cdc-blue rounded-md grid place-items-center mt-7'>
              <Link href={nav.to}>{nav.title}</Link>
            </li>
          ),
        )}
      </motion.ul>
    </>
  )
}
