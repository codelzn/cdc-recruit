import { GraphQLClient, gql } from 'graphql-request'
import type { TopData } from '@/types/topData'
import type { MemberData } from '@/types/memberData'

export const hygraph = new GraphQLClient(process.env.CMS_API_URL)

/**
 * @description GraphQL query to get Top Page Data
 */

export const topQuery = gql`
  query TopData {
    # logoデータ
    logoData {
      image {
        url
      }
      alt
      description
    }
    # ナビゲション
    navigations {
      order
      title
      to
    }
    # キャッチコピー
    catchcopies {
      title
      description
      bgimg {
        url
      }
    }
    # CDCとは
    introduces {
      title
      text
      detailTitle
      details
      graphic
    }
    # データで知るCDC
    cdcData {
      type
      subTitle
      data
      content
      img {
        url
      }
    }
    # CDCのキーワード
    keywords {
      catchcopy
      title
      img {
        url
      }
      subTitle
      nav
      btnText
      btnLink
    }
    keyContents {
      title
      subTitle
      content
    }
    # 採用情報
    recruits {
      subtitle
      contents
    }
  }
`
/**
 * @description GraphQL query to get People Page Data
 */

export const memberQuery = gql`
  query MemberData {
    members {
      key
      memberName
      duties
      catchphrase
      story
      year
      currentImg {
        url
      }
      nextImg {
        url
      }
      interviews {
        title
        content
      }
      schedule {
        times
        contents
      }
      sidepic {
        url
      }
    }
  }
`
export async function getTopData() {
  const { logoData, navigations, catchcopies, introduces } = (await hygraph.request(topQuery)) as TopData
  return { logoData: logoData[0], navigation: navigations[0], catchcopy: catchcopies[0], introduce: introduces[0] }
}

export async function getMemberData() {
  const data = (await hygraph.request(memberQuery)) as MemberData
  return data
}
