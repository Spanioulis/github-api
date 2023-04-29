import { Link } from 'react-router-dom';
import { Repository } from '../../hooks/types';
import { FlexBox } from '../../styles';
import { Button, Text, Title } from '../atoms';

type CardProps = {
   repo: Repository;
   isFavorite: boolean;
};

const Card = ({ repo, isFavorite }: CardProps) => {
   const handleFavorite = () => {
      console.log('Botón favorito');
   };

   return (
      <FlexBox>
         <Title as="h2">{repo.name}</Title>
         <Text>{repo.name}</Text>
         <Link to={repo.html_url}>{repo.html_url}</Link>
         <Text>{repo.updated_at}</Text>
         <Button onClick={handleFavorite}>{isFavorite ? 'No me gusta' : 'Me gusta'}</Button>
      </FlexBox>
   );
};

export { Card };
