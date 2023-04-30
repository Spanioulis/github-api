import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type FavoriteReposProps = {
   favoriteReposIds: number[];
   addFavoriteRepo: (id: number) => void;
   removeFavoriteRepo: (id: number) => void;
};

const useFavoriteReposStore = create(
   // Se agregan/guardan todas las acciones que hagamos dentro del local storage
   persist<FavoriteReposProps>(
      (set) => ({
         favoriteReposIds: [],
         addFavoriteRepo: (id: number) =>
            set((state) => ({
               favoriteReposIds: [...state.favoriteReposIds, id]
            })),
         removeFavoriteRepo: (id: number) =>
            set((state) => ({
               favoriteReposIds: state.favoriteReposIds.filter((repoId) => repoId !== id)
            }))
      }),
      {
         name: 'favorite-repos'
      }
   )
);

export { useFavoriteReposStore };
