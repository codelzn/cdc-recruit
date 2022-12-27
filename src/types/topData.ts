export type TopData = {
  logoData: LogoDatum[]
  navigations: Navigation[]
  catchcopies: Catchcopy[]
  introduces: Introduce[]
  cdcData: CdcDatum[]
  cdcdataImgs: CdcdataImg[]
  keywords: Keyword[]
  keyContents: KeyContent[]
  recruits: Recruit[]
}

export interface Catchcopy {
  title: string[]
  description: string[]
  bgimg: Bgimg
}

export interface Bgimg {
  url: string
  width: number
  height: number
}

export interface CdcDatum {
  type: string
  subTitle: string[]
  data: string[]
  content: string
}

export interface CdcdataImg {
  dataImg: Bgimg
}

export interface Introduce {
  midashi: string
  title: string
  text: string
  detailTitle: string
  details: string[]
  graphic: string[]
  introimg: Bgimg
}

export interface KeyContent {
  title: string
  subTitle: string
  content: string[]
}

export interface Keyword {
  title: string
  subTitle: string
  nav: string[]
  btnText: string
  btnLink: string
}

export interface LogoDatum {
  bigLogo: Bgimg
  image: Bgimg
  alt: string
  description: string
}

export interface Navigation {
  order: number
  title: string
  to: string
}

export interface Recruit {
  subtitle: string
  contents: string[]
}
