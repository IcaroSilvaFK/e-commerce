import { useContext } from "react";

import { ModalMobileContext } from "../contexts/menuMobile";

export function useMenu() {
  const data = useContext(ModalMobileContext);

  return data;
}
