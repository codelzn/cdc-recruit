import { GraphQLClient, gql } from 'graphql-request'

export const hygraph = new GraphQLClient(process.env.CMS_API_URL)

/**
 * @description GraphQL query to get Top Page Data
 */

export const topQuery = gql`
  query TopData {
    # logoデータ
    logoData {
      siteTitle
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
    }
    cdcdataImgs {
      dataImg {
        url
      }
    }
    # CDCのキーワード
    keywords {
      title
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
    }
  }
`
export async function getTopData() {
  const data = await hygraph.request(topQuery)
  return data
}

export async function getMemberData() {
  const data = await hygraph.request(memberQuery)
  return data
}
