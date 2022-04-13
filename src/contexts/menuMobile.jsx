import { createContext, useState, useCallback } from "react";

export const ModalMobileContext = createContext({});

export function ModalMobileContextProvider({ children }) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpenMenu(false);
  }, []);
  const toggleOpen = useCallback(() => {
    setIsOpenMenu(true);
  }, []);

  return (
    <ModalMobileContext.Provider value={{ isOpenMenu, toggleMenu, toggleOpen }}>
      {children}
    </ModalMobileContext.Provider>
  );
}
