import { useFetchRepositories } from '../hooks/useRepos';
import { Card } from '../components/molecules';
import { useFavoriteReposStore } from '../store/favoriteRepos'; // Estado Local
import { FlexBox } from '../styles';

const Home = () => {
   const { data, isLoading } = useFetchRepositories('Spanioulis');
   const { favoriteReposIds } = useFavoriteReposStore();

   // TODO -> Añadir un spinner
   if (isLoading) return <div>Is loading...</div>;

   console.log(data);

   return (
      <FlexBox direction="row" wrap="wrap">
         {data?.map((repo) => (
            <Card key={repo.id} repo={repo} isFavorite={favoriteReposIds.includes(repo.id)} />
         ))}
      </FlexBox>
   );
};

export default Home;
