import { create } from "zustand";

export const useMovieStore = create((set, get) => ({
  loaded: false,
  data: {},
  favorites: [],
  madeChanges: false,
  setMadeChanges: () => (state) => ({ madeChanges: true }),
  setData: (data) =>
    set((state) => ({
      data: data,
      loaded: true,
    })),
  updateData: (dataToUpdate) =>
    set((state) => ({ data: { ...state.data, ...dataToUpdate } })),
  addFavorite: (favorite) => {
    return set((state) => ({
      favorites: [...get().favorites, favorite],
    }));
  },
  resetData: () => set((state) => ({ data: {} })),
}));
