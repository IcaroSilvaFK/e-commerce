import { Container, Title, MobileContainer } from "./styles";
import { Navigation } from "../Navigation";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { useMenu } from "../../hooks/useMenu";

export function Header() {
  const { isOpenMenu, toggleOpen } = useMenu();

  return (
    <Container>
      <div>
        <Title>Shoes shoppe</Title>
      </div>
      <Navigation />
      <MobileContainer>
        {!isOpenMenu ? (
          <button onClick={toggleOpen}>
            <AiOutlineMenuUnfold size={25} />
          </button>
        ) : (
          <></>
        )}
      </MobileContainer>
    </Container>
  );
}
