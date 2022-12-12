import { LogoDatum, Navigation, Catchcopy, CdcDatum, Introduce, KeyContent, Keyword, Recruit } from './topData'

export type TopPageProps = {
  logoData: LogoDatum
  navigations: Navigation[]
  catchcopy: Catchcopy
  introduce: Introduce
  cdcData: CdcDatum[]
  keyword: Keyword
  keyContents: KeyContent[]
  recruits: Recruit[]
}
