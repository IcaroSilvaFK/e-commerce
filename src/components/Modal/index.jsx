import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { BiCheck, BiPlus, BiMinus } from "react-icons/bi";
import { toast } from "react-toastify";

import { useCart } from "../../hooks/useCart";
import { priceFormatter } from "../../utils/priceFormat";
import {
  removeCart,
  addNewQuantity,
  decreaseQuantity,
} from "../../store/actions/cart.actions";
import { api } from "../../configs/axios";

import {
  Container,
  Box,
  Card,
  Describe,
  Footer,
  Button,
  Close,
  ButtonFinally,
  ContainerFooter,
  ContainerButtons,
} from "./styles";

export function Modal() {
  const [value, setValue] = useState(0);
  const state = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const { modalIsOpen, toogleModal } = useCart();

  useEffect(() => {
    (() => {
      if (state.cart.length > 0) {
        const value = state.cart.reduce(
          (previousValue, currentValue) =>
            currentValue?.price * currentValue?.quantity + previousValue,
          0
        );
        setValue(value);
      }
    })();

    if (state.cart.length <= 0) {
      toogleModal();
    }
  }, [state.cart]);

  function handleRemoveItem(id) {
    dispatch(removeCart(id));
  }

  async function handleAddItem(id) {
    const { data } = await api.get(`products/${id}`);
    const hasAmmount = state.cart.filter((product) => product.id === id);

    if (hasAmmount[0].quantity < data.amount) {
      dispatch(addNewQuantity(id));
    } else {
      toast.error("Fora de estoque 🧮", {
        theme: "light",
        draggable: true,
        position: "top-center",
      });
    }
  }

  function handleDecreaseItem(id) {
    const hasAmmount = state.cart.filter((product) => product.id === id);

    if (hasAmmount[0].quantity - 1 === 0) {
      dispatch(removeCart(id));
    }
    dispatch(decreaseQuantity(id));
  }

  if (modalIsOpen) {
    return (
      <Container onClick={toogleModal}>
        <Box onClick={(e) => e.stopPropagation()}>
          <Close onClick={toogleModal}>
            <IoCloseOutline size={20} color='#fff' />
          </Close>
          {state.cart.map((product) => (
            <Card key={product.id}>
              <img src={product.image} alt={product.title} />
              <Describe>
                <strong>{product.title}</strong>
                <Footer>
                  <span>
                    {priceFormatter(product.price * product.quantity)}
                  </span>
                  <ContainerButtons>
                    <button
                      className='minus'
                      onClick={() => handleDecreaseItem(product.id)}
                    >
                      <BiMinus />
                    </button>
                    {product.quantity}
                    <button
                      className='plus'
                      onClick={() => handleAddItem(product.id)}
                    >
                      <BiPlus />
                    </button>
                  </ContainerButtons>
                  <Button onClick={() => handleRemoveItem(product.id)}>
                    <MdOutlineRemoveShoppingCart />
                  </Button>
                </Footer>
              </Describe>
            </Card>
          ))}
          <ContainerFooter>
            <div>
              <strong>{priceFormatter(value)}</strong>
            </div>
            <ButtonFinally>
              Finalizar
              <BiCheck />
            </ButtonFinally>
          </ContainerFooter>
        </Box>
      </Container>
    );
  }

  return <></>;
}
