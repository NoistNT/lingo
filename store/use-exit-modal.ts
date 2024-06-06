import { create } from 'zustand'

interface ExitModalState {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export const useExitModal = create<ExitModalState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}))
