import { Container, Title } from "./styles";
import { Navigation } from "../Navigation";

export function Header() {
  return (
    <Container>
      <div>
        <Title>Shoes shoppe</Title>
      </div>
      <Navigation />
    </Container>
  );
}
