import zustand from 'zustand'

export const useStore = zustand((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}))
