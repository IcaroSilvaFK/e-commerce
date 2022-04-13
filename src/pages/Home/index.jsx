import { useState, useEffect } from "react";

import { api } from "../../configs/axios";

import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { ModalContextProvider } from "../../contexts/modalPorducts";
import { Modal } from "../../components/Modal";

import { ContainerCards } from "./styles";

export function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setError] = useState(false);

  useEffect(() => {
    (async () => {
      api
        .get("products")
        .then((response) => {
          setProducts(response.data);
          setLoading(false);
        })
        .catch((error) => setError(true));
    })();
  }, []);

  if (loading) {
    return <h1>Loading</h1>;
  }

  if (erro) {
    return <h1>Tivemos um erro</h1>;
  }

  return (
    <ModalContextProvider>
      <Header />
      <ContainerCards>
        {products.map((product, index) => (
          <Card product={product} key={product.id} />
        ))}
      </ContainerCards>
      <Modal />
    </ModalContextProvider>
  );
}
