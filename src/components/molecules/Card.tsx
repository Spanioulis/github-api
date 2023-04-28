import { Link } from 'react-router-dom';
import { Repository } from '../../hooks/types';
import { FlexBox } from '../../styles';
import { Text, Title } from '../atoms';

type CardProps = {
   repo: Repository;
};

const Card = ({ repo }: CardProps) => {
   return (
      <FlexBox>
         <Title as="h2">{repo.name}</Title>
         <Text>{repo.name}</Text>
         <Link to={repo.html_url}>{repo.html_url}</Link>
         <Text>{repo.updated_at}</Text>
      </FlexBox>
   );
};

export { Card };
