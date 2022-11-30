import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Checkout } from "./Checkout";
import { Sucess } from "./Success";

export interface CartPurchaseProps {
  CEP: string;
  bairro: string;
  cidade: string;
  complemento: string;
  numero: string;
  paymentMethods: string;
  rua: string;
  uf: string;
}

export const Cart = () => {
  const [purchaseData, setPurchaseData] = useState<CartPurchaseProps>();
  const { setOnCart } = useContext(CartContext);

  useEffect(() => {
    purchaseData && setOnCart([]);
  }, [purchaseData]);

  return (
    <>
      {purchaseData ? (
        <Sucess purchaseData={purchaseData} />
      ) : (
        <Checkout setPurchaseData={setPurchaseData} />
      )}
    </>
  );
};
