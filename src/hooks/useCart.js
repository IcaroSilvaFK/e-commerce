import { useContext } from "react";

import { ModalContext } from "../contexts/modalPorducts";

export function useCart() {
  const data = useContext(ModalContext);

  return data;
}
