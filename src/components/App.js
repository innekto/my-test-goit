import { Card } from './Card/Card';
import { CardList } from './CardList/CardList';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <CardList>
        <Card />
      </CardList>
    </Container>
  );
};
