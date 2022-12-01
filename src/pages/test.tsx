import { MultiBox, SphereAnime } from '@/components/canvas'
import { GetStaticProps } from 'next'
import { gql } from 'graphql-request'
import { hygraph } from '@/libs/hygraph'
import { useEffect } from 'react'

export default function Page({ logoData }) {
  console.log(logoData)
  return (
    <>
      <SphereAnime />
    </>
  )
}
const QUERY = gql`
  query {
    logoData {
      alt
      id
      img {
        url
      }
    }
  }
`
export const getStaticProps: GetStaticProps = async () => {
  const { logoData } = await hygraph.request(QUERY)
  return {
    props: {
      logoData,
    },
  }
}
