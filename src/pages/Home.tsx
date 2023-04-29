import { useFetchRepositories } from '../hooks/useRepos';
import { Card } from '../components/molecules';
import { useFavoriteReposStore } from '../store/favoriteRepos'; // Estado Local

const Home = () => {
   const { data, isLoading } = useFetchRepositories();
   const { favoriteReposIds } = useFavoriteReposStore();

   // TODO -> Añadir un spinner
   if (isLoading) return <div>Is loading...</div>;

   console.log(data);

   return (
      <div>
         {data?.map((repo) => (
            <Card key={repo.id} repo={repo} isFavorite={favoriteReposIds.includes(repo.id)} />
         ))}
      </div>
   );
};

export default Home;
