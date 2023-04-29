import { create } from 'zustand';

type FavoriteReposProps = {
   favoriteReposIds: number[];
   addFavoriteRepo: (id: number) => void;
   removeFavoriteRepo: (id: number) => void;
};

const useFavoriteReposStore = create<FavoriteReposProps>((set) => ({
   favoriteReposIds: [],
   addFavoriteRepo: (id: number) =>
      set((state) => ({
         favoriteReposIds: [...state.favoriteReposIds, id]
      })),
   removeFavoriteRepo: (id: number) =>
      set((state) => ({
         favoriteReposIds: state.favoriteReposIds.filter((repoId) => repoId !== id)
      }))
}));

export { useFavoriteReposStore };
