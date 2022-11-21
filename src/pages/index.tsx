import dynamic from 'next/dynamic'
const Logo = dynamic(() => import('@/components/canvas/Logo'), { ssr: false })

export default function Page(props) {
  return (
    <>
      Top Page
    </>
  )
}

Page.canvas = (props) => <Logo scale={0.5} route='/blob' position-y={-1} />

export async function getStaticProps() {
  return { props: { title: 'トップ|CDC新卒採用サイト' } }
}
