import { useFetchRepositories } from '../hooks/useRepos';
import { Card } from '../components/molecules';

const Home = () => {
   const { data, isLoading } = useFetchRepositories();

   if (isLoading) return <div>Is loading...</div>;

   console.log(data);

   return (
      <div>
         {data?.map((repo) => (
            <Card key={repo.id} repo={repo} />
         ))}
      </div>
   );
};

export default Home;
