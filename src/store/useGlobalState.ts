import create from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

type GlobalState = {
  sphereAnime: boolean
  moveAnime: boolean
  setSphereAnime: (value: boolean) => void
  setMoveAnime: (value: boolean) => void
}

export const useGlobalState = create(
  subscribeWithSelector<GlobalState>((set, get) => ({
    sphereAnime: false,
    moveAnime: false,
    setSphereAnime: (value: boolean) => set({ sphereAnime: value }),
    setMoveAnime: (value: boolean) => set({ moveAnime: value }),
  })),
)
