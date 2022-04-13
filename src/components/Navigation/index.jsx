import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { Container, CartIcon, Button } from "./styles";

import { useCart } from "../../hooks/useCart";

export function Navigation() {
  const { cart } = useSelector((state) => state.cartReducer);
  const { toogleModal, modalIsOpen } = useCart();

  //!
  return (
    <Container>
      <ul>
        <li>
          <Link to='/'>Products</Link>
        </li>
        <li>
          <Link to='/'>Profile</Link>
        </li>
        <li>
          <Button quantity={cart.length} onClick={toogleModal}>
            <CartIcon />
          </Button>
        </li>
      </ul>
    </Container>
  );
}
