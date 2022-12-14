import { GraphQLClient, gql } from 'graphql-request'
import type { TopData, MemberData } from '@/types'

export const hygraph = new GraphQLClient(process.env.CMS_API_URL)

/**
 * @description GraphQL query to get Top Page Data
 */

export const topQuery = gql`
  query TopData {
    # logoデータ
    logoData {
      bigLogo {
        url
        width
        height
      }
      image {
        url
        width
        height
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
        width
        height
      }
    }
    # CDCとは
    introduces {
      midashi
      title
      text
      detailTitle
      details
      graphic
      introimg {
        url
        width
        height
      }
    }
    # データで知るCDC
    cdcData {
      type
      subTitle
      data
      content
      img {
        url
        width
        height
      }
    }
    # CDCのキーワード
    keywords {
      catchcopy
      title
      img {
        url
        width
        height
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
      recruitdata {
        type
        content
      }
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
        width
        height
      }
      nextImg {
        url
        width
        height
      }
      interviews {
        title
        content
        sidepic {
          url
          width
          height
        }
      }
      schedule {
        times
        contents
      }
    }
  }
`
export async function getTopData() {
  const { logoData, navigations, catchcopies, introduces, cdcData, keywords, keyContents, recruits } =
    (await hygraph.request(topQuery)) as TopData
  return {
    logoData: logoData[0],
    navigations: navigations,
    catchcopy: catchcopies[0],
    introduce: introduces[0],
    cdcData: cdcData,
    keyword: keywords[0],
    keyContents: keyContents,
    recruits: recruits,
  }
}

export async function getMemberData() {
  const { members } = (await hygraph.request(memberQuery)) as MemberData
  return members
}
