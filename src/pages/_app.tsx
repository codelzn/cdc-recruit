import { useRouter } from 'next/router'
import Header from '@/config'
import Layout from '@/layout'
import '@/styles/tailwind.scss'
import '@/styles/global.scss'

export default function App({ Component, pageProps = { title: 'トップ|CDC新卒採用サイト' } }) {
  const router = useRouter()
  return (
    <>
      <Header title={pageProps.title} />
      <Layout>
        <Component {...pageProps} key={router.pathname} />
      </Layout>
    </>
  )
}
