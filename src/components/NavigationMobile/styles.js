import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";

export const Container = styled.nav`
  position: fixed;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: rgba(0, 0, 0, 0.3);

  display: flex;
  justify-content: flex-end;

  ul {
    width: 200px;

    background-color: #fff;

    font-size: 18px;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 20px;

    padding-top: 30px;

    li {
    }
  }
`;

export const CartIcon = styled(FiShoppingCart)``;

export const Button = styled.div`
  position: relative;

  &::after {
    content: ${(props) => (props.value > 0 ? '"' + props.value + '"' : "")};

    position: absolute;
    top: -10px;
    right: -10px;
  }
`;

export const ContainerClose = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
`;
