import { createContext, useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";

export const ModalContext = createContext({});

export function ModalContextProvider({ children }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const state = useSelector((state) => state.cartReducer);

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "Escape": {
          setModalIsOpen(false);
          break;
        }
        default: {
          setModalIsOpen(false);
        }
      }
    });
  }, []);

  const toogleModal = useCallback(() => {
    if (state.cart.length >= 1) {
      setModalIsOpen((prev) => !prev);
    }
  }, [state.cart]);

  return (
    <ModalContext.Provider value={{ modalIsOpen, toogleModal }}>
      {children}
    </ModalContext.Provider>
  );
}
