import dynamic from 'next/dynamic'
import Scene from '@/components/canvas/Scene'

export default function Page(props) {
  return (
    <>
      <h1>
        あなたの
        <br />
        優秀さを
        <br />
        実らせる
      </h1>
    </>
  )
}

export async function getStaticProps() {
  return { props: { title: 'トップ|CDC新卒採用サイト' } }
}
