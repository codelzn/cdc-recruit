import SphereAnime from '@/components/canvas'
import { GetServerSideProps } from 'next'
import { getTopData, getMemberData } from '@/libs/hygraph'

export default function Page() {
  // console.log(topData)
  return (
    <>
      <SphereAnime />
    </>
  )
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const topData = await getTopData()
//   return {
//     props: {
//       topData,
//     },
//   }
// }
