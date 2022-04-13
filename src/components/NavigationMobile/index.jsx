import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { useMenu } from "../../hooks/useMenu";
import { useCart } from "../../hooks/useCart";

import { Container, CartIcon, Button, ContainerClose } from "./styles";
import { AiOutlineMenuFold } from "react-icons/ai";

export function HeaderMobile() {
  const { cart } = useSelector((state) => state.cartReducer);
  const { toogleModal } = useCart();
  const { isOpenMenu, toggleMenu } = useMenu();

  if (isOpenMenu) {
    return (
      <Container onClick={toggleMenu}>
        <ContainerClose onClick={toggleMenu}>
          <AiOutlineMenuFold size={25} />
        </ContainerClose>
        <ul onClick={(e) => e.stopPropagation()}>
          <li>
            <Link to='/'>Products</Link>
          </li>
          <li>
            <Link to='/'>Profile</Link>
          </li>
          <li>
            <Button
              value={cart.length}
              onClick={() => {
                toogleModal();
                toggleMenu();
              }}
            >
              <CartIcon />
            </Button>
          </li>
        </ul>
      </Container>
    );
  }
  return <></>;
}
