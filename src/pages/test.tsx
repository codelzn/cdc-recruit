import { SphereAnime } from '@/components/canvas'
import { GetStaticProps, GetServerSideProps } from 'next'
import { gql } from 'graphql-request'
import { hygraph } from '@/libs/hygraph'
import { useEffect } from 'react'

export default function Page({ data }) {
  console.log(data)
  return (
    <>
      <SphereAnime />
    </>
  )
}
const QUERY = gql`
  query Logo {
    catchcopies {
      id
      title
      description
      bgimg {
        url
      }
    }
  }
`
export const getServerSideProps: GetServerSideProps = async () => {
  const { catchcopies } = await hygraph.request(QUERY)
  return {
    props: {
      data: catchcopies[0],
    },
  }
}
