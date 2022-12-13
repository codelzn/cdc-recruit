import create from 'zustand'
import type { Member } from '@/types'

type MemberData = {
  members: Member[]
  setMemberData: (memberData: Member[]) => void
}

export const useMemberData = create<MemberData>((set) => ({
  members: [],
  setMemberData: (members: Member[]) => set({ members }),
}))
