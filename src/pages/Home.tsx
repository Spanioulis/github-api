import { useFetchRepositories } from '../hooks/useRepos';
import { Card } from '../components/molecules';
import { useFavoriteReposStore } from '../store/favoriteRepos';
import styled from 'styled-components';
import { FlexBox } from '../styles';

const HomeContainer = styled(FlexBox)`
   margin: 5rem auto;
`;

const Home = () => {
   const { data, isLoading } = useFetchRepositories('Spanioulis');
   const { favoriteReposIds } = useFavoriteReposStore();

   // TODO -> Añadir un spinner
   if (isLoading) return <div>Is loading...</div>;

   const filtered = (repo: { size: number; created_at: string }) => repo.size > 175 && repo.created_at > '2022-09-01';

   return (
      <HomeContainer direction="row" wrap="wrap" gap="2rem">
         {/* <img src={data[0]?.owner.avatar_url} width="250px" /> */}
         {data?.filter(filtered).map((repo) => (
            <Card key={repo.id} repo={repo} isFavorite={favoriteReposIds.includes(repo.id)} />
         ))}
      </HomeContainer>
   );
};

export default Home;
