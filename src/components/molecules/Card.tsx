import { Link } from 'react-router-dom';
import { Repository } from '../../hooks/types';
import { FlexBox } from '../../styles';
import { Button, Text, Title } from '../atoms';
import { useFavoriteReposStore } from '../../store/favoriteRepos';

type CardProps = {
   repo: Repository;
   isFavorite: boolean;
};

const Card = ({ repo, isFavorite }: CardProps) => {
   const addFavoriteRepo = useFavoriteReposStore((state) => state.addFavoriteRepo);
   const removeFavoriteRepo = useFavoriteReposStore((state) => state.removeFavoriteRepo);

   const handleFavorite = (id: number) => {
      if (isFavorite) {
         removeFavoriteRepo(id);
         return;
      }

      addFavoriteRepo(id);
   };

   return (
      <FlexBox>
         <Title as="h2">{repo.name}</Title>
         <Text>{repo.name}</Text>
         <Link to={repo.html_url}>{repo.html_url}</Link>
         <Text>{repo.updated_at}</Text>
         <Button onClick={() => handleFavorite(repo.id)}>{isFavorite ? 'No me gusta' : 'Me gusta'}</Button>
      </FlexBox>
   );
};

export { Card };
