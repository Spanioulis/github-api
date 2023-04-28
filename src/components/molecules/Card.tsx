import { Repository } from '../../hooks/types';
import { FlexBox } from '../../styles';
import { Title } from '../atoms';

type CardProps = {
   repo: Repository;
};

const Card = ({ repo }: CardProps) => {
   return (
      <FlexBox>
         <Title as="h2">{repo.name}</Title>
      </FlexBox>
   );
};

export { Card };
