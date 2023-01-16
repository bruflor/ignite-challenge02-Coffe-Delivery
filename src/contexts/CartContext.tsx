import { createContext, ReactNode, useState } from "react";

interface CartContextProviderProps {
  children: ReactNode;
}
interface CartContextType {
  setOnCart: (products: CartProps[]) => void;
  onCart: CartProps[];
}

interface CartProps {
  name: string;
  priceUnit: number;
  priceTotal: number;
  amount: number;
  id: string;
}

export const CartContext = createContext({} as CartContextType);

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [onCart, setOnCart] = useState<CartProps[]>([]);
  return (
    <CartContext.Provider value={{ onCart, setOnCart }}>
      {children}
    </CartContext.Provider>
  );
};
