import { useSelector, useDispatch } from "react-redux";
import { BsCartPlus } from "react-icons/bs";
import { toast } from "react-toastify";

import { api } from "../../configs/axios";

import { priceFormatter } from "../../utils/priceFormat";
import { addCart, addNewQuantity } from "../../store/actions/cart.actions";

import { Container, ContainerTitle, Button } from "./styles";

export function Card({ product }) {
  const state = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  async function handleAddNewProduct(product) {
    const productExists = state.cart.find(
      (element) => element.id === product.id
    );

    if (!!productExists) {
      const { data } = await api.get(`/products/${product.id}`);

      const findProduct = state.cart.filter(
        (element) => element.id === data.id
      );
      if (findProduct[0].quantity < data.amount) {
        dispatch(addNewQuantity(findProduct[0].id));
      } else {
        toast.error("Infelizmnente não temos mais estoque do produtor 😧", {
          theme: "light",
          position: "top-center",
          draggable: true,
        });
      }
    } else {
      dispatch(
        addCart({
          product: {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: 1,
          },
        })
      );
    }
  }

  return (
    <Container>
      <img src={product.image} alt={product.title} width={250} />
      <ContainerTitle>
        <strong>{product.title}</strong>
      </ContainerTitle>
      <span>{priceFormatter(product.price)}</span>
      <Button onClick={() => handleAddNewProduct(product)}>
        Adicionar ao carrinho
        <BsCartPlus size={15} />
      </Button>
    </Container>
  );
}
