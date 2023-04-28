import { useFetchRepositories } from '../hooks/useRepos';

const Home = () => {
   const { data, isLoading } = useFetchRepositories();

   if (isLoading) return <div>Is loading...</div>;

   console.log(data);

   return (
      <div>
         {data?.map((d) => (
            <h1>{d.name}</h1>
         ))}
      </div>
   );
};

export default Home;
