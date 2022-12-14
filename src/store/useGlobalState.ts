import create from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

type GlobalState = {
  mainController: boolean
  loadAnime: boolean
  textAnime: boolean
  sphereAnime: boolean
  moveAnime: boolean
  setMainController: (value: boolean) => void
  setLoadAnime: (value: boolean) => void
  setTextAnime: (value: boolean) => void
  setMoveAnime: (value: boolean) => void
  setSphereAnime: (value: boolean) => void
}

export const useGlobalState = create(
  subscribeWithSelector<GlobalState>((set, get) => ({
    mainController: false,
    loadAnime: false,
    textAnime: false,
    sphereAnime: false,
    moveAnime: false,
    setMainController: (value: boolean) => set({ mainController: value }),
    setSphereAnime: (value: boolean) => set({ sphereAnime: value }),
    setMoveAnime: (value: boolean) => set({ moveAnime: value }),
    setTextAnime: (value: boolean) => set({ textAnime: value }),
    setLoadAnime: (value: boolean) => set({ loadAnime: value }),
  })),
)
