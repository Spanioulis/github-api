import { create } from 'zustand';

type FavoriteReposProps = {
   favoriteReposIds: number[];
   addFavoriteRepo: (id: number) => void;
   removeFavoriteRepo: (id: number) => void;
};

const useFavoriteReposStore = create<FavoriteReposProps>(() => ({
   favoriteReposIds: [],
   addFavoriteRepo: (id: number) => {},
   removeFavoriteRepo: (id: number) => {}
}));

export { useFavoriteReposStore };
