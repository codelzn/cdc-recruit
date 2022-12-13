import create from 'zustand'
import { TopPageProps } from '@/types'

type TopData = Partial<TopPageProps> & {
  setTopData: (data: Omit<TopData, 'setTopData'>) => void
}

export const useTopData = create<TopData>((set) => ({
  logoData: null,
  navigations: null,
  catchcopy: null,
  introduce: null,
  cdcData: null,
  keyword: null,
  keyContents: null,
  recruits: null,
  setTopData: (data) => set(data),
}))
