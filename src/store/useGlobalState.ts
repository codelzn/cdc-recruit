import create from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

type GlobalState = {
  sphereAnime: boolean
  setSphereAnime: (value: boolean) => void
}

export const useGlobalState = create(
  subscribeWithSelector<GlobalState>((set, get) => ({
    sphereAnime: false,
    setSphereAnime: (value: boolean) => set({ sphereAnime: value }),
  })),
)
