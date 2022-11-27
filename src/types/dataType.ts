type Navigation = {
  title: string
  to: string
}
type MemberData = {
  key: number
  name: string
  duties: string
  catchphrase: string[]
  history: string
  year: string
  imgs: string[]
  interview: {
    title: string[]
    text: string
  }[]
  schedule: {
    time: string
    text: string
  }[]
}
/***
 * @description Top Component Data Type
 */
export type TopDataType = {
  logo: {
    src: string
    alt: string
    description: string
  }
  navigation: Navigation[]
  catchcopy: {
    title: string
    description: string[]
  }
}
/***
 * @description Company Component Data Type
 */
export type CompanyDataType = {
  title: string
  introduce: {
    title: string
    text: string
    details: string[]
    graphic: string[]
  }
  cdcdata: {
    title: string
    data: {
      num: string
      text: string
    }[]
  }
}
/***
 * @description Keyword Component Data Type
 */
export type KeywordDataType = {
  title: string
  content: {
    subtitle: string
    text: string
  }[]
  btn: {
    text: string
    link: string
  }
}
/***
 * @description Recruit Component Data Type
 */
export type RecruitDataType = {
  title: string
  details: {
    subtitle: string
    content: string[]
  }[]
}
/***
 * @description Member Component Data Type
 */
export type MemberDataType = {
  title: string
  data: MemberData[]
}
