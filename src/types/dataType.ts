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
 * @description Top Component Data Interface
 */
export interface TopDataInterface {
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
 * @description Company Component Data Interface
 */
export interface CompanyDataInterface {
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
 * @description Keyword Component Data Interface
 */
export interface KeywordDataInterface {
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
 * @description Recruit Component Data Interface
 */
export interface RecruitDataInterface {
  title: string
  details: {
    subtitle: string
    content: string[]
  }[]
}
/***
 * @description Member Component Data Interface
 */
export interface MemberDataInterface {
  title: string
  data: MemberData[]
}
