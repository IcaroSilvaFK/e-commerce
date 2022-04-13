import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";

export const Container = styled.nav`
  ul {
    display: flex;
    gap: 20px;

    li {
      font-size: 18px;
    }
  }
`;

export const Button = styled.button`
  position: relative;
  background-color: transparent;
  &::before {
    content: ${(props) =>
      props.quantity > 0 ? '"' + props.quantity + '"' : ""};

    position: absolute;

    top: -12px;
    right: -10px;

    font-size: 14px;

    width: 20px;
    height: 20px;

    border-radius: 50px;

    color: var(--color-red);

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const CartIcon = styled(FiShoppingCart)`
  width: 25px;
  height: 25px;

  color: var(--color-blue);

  position: relative;

  display: block;
`;
