export type MemberData = {
  members: Member[]
}

export interface Member {
  key: number
  memberName: string
  duties: string
  catchphrase: string[]
  story: string
  year: string
  currentImg: CurrentImg
  nextImg: CurrentImg
  interviews: Interview[]
  schedule: Schedule | null
}

export interface CurrentImg {
  url: string
  width: number
  height: number
}

export interface Interview {
  title: string[]
  content: string
  sidepic: CurrentImg
}

export interface Schedule {
  times: string[]
  contents: string[]
}
