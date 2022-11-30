import { useState } from "react";
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
