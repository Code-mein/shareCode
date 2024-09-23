import { create } from "zustand";

export const useCapturedLines = create((set) => ({
  capturedLines: [],
  addLine: (line) => set((state) => ({ capturedLines: [line,...state.capturedLines] })),
  removeLine: (line) => set((state) => ({ capturedLines: state.capturedLines.filter((l) => l !== line) })),
  clearLines: () => set({ capturedLines: [] }),
}));