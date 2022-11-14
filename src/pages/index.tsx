import dynamic from 'next/dynamic'
import Instructions from '@/components/dom/Instructions'

const Logo = dynamic(() => import('@/components/canvas/Logo'), { ssr: false })

export default function Page(props) {
  return (
    <Instructions>
      This is a minimal starter for Nextjs + React-three-fiber and Threejs. Click on the{' '}
      <span className='text-cyan-200'>atoms nucleus</span> to navigate to the{' '}
      <span className='text-green-200'>/blob</span> page. OrbitControls are enabled by default.
    </Instructions>
  )
}

// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
Page.canvas = (props) => <Logo scale={0.5} route='/blob' position-y={-1} />

export async function getStaticProps() {
  return { props: { title: 'トップ|CDC新卒採用サイト' } }
}
