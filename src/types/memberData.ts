// To parse this data:
//
//   import { Convert, MemberData } from "./file";
//
//   const memberData = Convert.toMemberData(json);

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
  currentImg: TImg
  nextImg: TImg
  interviews: Interview[]
  schedule: Schedule
}

export interface TImg {
  url: string
}

export interface Interview {
  title: string[]
  content: string
}

export interface Schedule {
  times: string[]
  contents: string[]
}
