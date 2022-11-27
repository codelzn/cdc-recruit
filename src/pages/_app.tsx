import Header from '@/config'
import Layout from '@/layout'
import '@/styles/global.scss'

export default function App({ Component, pageProps = { title: 'トップ|CDC新卒採用サイト' } }) {
  return (
    <>
      <Header title={pageProps.title} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
