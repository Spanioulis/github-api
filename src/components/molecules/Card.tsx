import { Link } from 'react-router-dom';
import { Repository } from '../../hooks/types';
import { FlexBox, colors, dimensions } from '../../styles';
import { Button, Text, Title } from '../atoms';
import { useFavoriteReposStore } from '../../store/favoriteRepos';
import styled from 'styled-components';

const CardStyled = styled(FlexBox)`
   background: linear-gradient(180deg, #f9fafc 0%, ${colors.purple.purple2} 100%);
   border-radius: ${dimensions.borderRadius.base};
   box-shadow: 0px 4px 4px -2px rgba(13, 19, 24, 0.04), inset 0px 1px 2px #ffffff;
   height: 300px;
   padding: 1rem;
   text-align: center;
   width: 400px;

   &:hover {
      box-shadow: 2px 2px 10px ${colors.purple.purple1};
   }
`;

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
      <CardStyled justify="space-around">
         <FlexBox>
            <Title as="h1" color={colors.primary}>
               {repo.name}
            </Title>
            <Link to={repo.html_url}>{repo.html_url}</Link>
         </FlexBox>
         <Text color={colors.primary}>{repo.language}</Text>
         <Text color={colors.purple.purple2}>
            <i>Tamaño</i>: {repo.size}
         </Text>
         <Text color={colors.gray.gray1}>
            {new Date(repo.created_at).toLocaleDateString('es-ES', {
               year: 'numeric',
               month: 'long',
               day: 'numeric'
            })}
         </Text>
         <Button onClick={() => handleFavorite(repo.id)}>{isFavorite ? 'No me gusta' : 'Me gusta'}</Button>
      </CardStyled>
   );
};

export { Card };
