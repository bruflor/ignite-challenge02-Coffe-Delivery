import {
  MapPinLine,
  CurrencyDollar,
  Bank,
  Money,
  CreditCard,
} from "phosphor-react";
import { useContext } from "react";
import { CartCard } from "../../components/Cards/cartCard";
import { CartContext } from "../../contexts/CartContext";
import { useForm, useFormState } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  CartPageContainer,
  FormContainer,
  ProductsCardsContainer,
  PaymentContainer,
  AddressContainer,
  InputTextContainer,
  ErrorMessage,
} from "./style";
import { CartPurchaseProps } from ".";

interface CheckoutProps {
  setPurchaseData: (inputData: CartPurchaseProps) => void;
}

const OnCartFormValidationSchema = yup.object({
  CEP: yup.number().required("CEP is required"),
  bairro: yup.string().required(),
  cidade: yup.string().required(),
  complemento: yup.string().optional(),
  numero: yup.number().required(),
  paymentMethods: yup
    .string()
    .min(1, "Selecione um método de pagamento")
    .required(),
  rua: yup.string().required(),
  uf: yup.string().required(),
});

export const Checkout = ({ setPurchaseData }: CheckoutProps) => {
  const { onCart } = useContext(CartContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(OnCartFormValidationSchema),
  });

  const sumPrices = onCart.reduce((accumulator, object) => {
    return accumulator + object.priceTotal;
  }, 0);

  const deliveryPrice = 3.5;

  const handleSubmitData = (data: any) => {
    // const isValid = await OnCartFormValidationSchema.isValid(data);
    // console.log(data);
    setPurchaseData(data);
  };

  return (
    <CartPageContainer>
      <FormContainer
        id="checkoutForm"
        onSubmit={handleSubmit(handleSubmitData)}
      >
        <AddressContainer>
          <div>
            <MapPinLine size={24} />
            <div>
              <h3>Endereço de Entrega</h3>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </div>
          {errors.CEP?.message ||
          errors.rua?.message ||
          errors.numero?.message ||
          errors.bairro?.message ||
          errors.cidade?.message ||
          errors.uf?.message ? (
            <ErrorMessage>Verifique o endereço digitado</ErrorMessage>
          ) : (
            ""
          )}
          <InputTextContainer>
            <input placeholder="CEP*" {...register("CEP")} />
            <input placeholder="Rua*" {...register("rua")} />
            <input placeholder="Número*" {...register("numero")} />
            <input placeholder="Complemento" {...register("complemento")} />
            <input placeholder="Bairro*" {...register("bairro")} />
            <div>
              <input placeholder="Cidade*" {...register("cidade")} />
              <input placeholder="UF*" {...register("uf")} />
            </div>
            <span style={{ color: "#8a8a8a" }}>*Campos obrigatórios</span>
          </InputTextContainer>
        </AddressContainer>
        <PaymentContainer>
          <div>
            <CurrencyDollar size={24} />
            <div>
              <h3>Método de pagamento</h3>
              <span>Selecione um método de pagamento</span>
            </div>
          </div>
          {errors.paymentMethods?.message ? (
            <ErrorMessage>Selecione um método de pagamento</ErrorMessage>
          ) : (
            ""
          )}
          <div>
            <input
              type="radio"
              value="Cartão de crédito"
              id="creditCard"
              {...register("paymentMethods")}
            />
            <label htmlFor="creditCard">
              <CreditCard size={24} />
              Cartão de crédito
            </label>
            <input
              type="radio"
              value="Cartão de débito"
              id="debitCard"
              {...register("paymentMethods")}
            />
            <label htmlFor="debitCard">
              <Bank size={24} />
              Cartão de débito
            </label>
            <input
              type="radio"
              value="Dinheiro"
              id="money"
              {...register("paymentMethods")}
            />
            <label htmlFor="money">
              <Money size={24} />
              dinheiro
            </label>
          </div>
        </PaymentContainer>
      </FormContainer>

      <ProductsCardsContainer>
        {onCart.map((product) => {
          return (
            <CartCard
              key={product.id}
              id={product.id}
              amount={product.amount}
              name={product.name}
              priceUnit={product.priceUnit}
              priceTotal={product.priceTotal}
            />
          );
        })}
        <div>
          <p>Total de itens</p>
          <p>R$ {sumPrices.toFixed(2)}</p>
        </div>
        <div>
          <p>Entrega</p>
          <p>R$ {deliveryPrice.toFixed(2)}</p>
        </div>
        <div>
          <h3>Total</h3>
          <h3>R$ {(deliveryPrice + sumPrices).toFixed(2)}</h3>
        </div>
        <button type="submit" form="checkoutForm" value="Confirmar pedido">
          Confirmar pedido
        </button>
      </ProductsCardsContainer>
    </CartPageContainer>
  );
};
