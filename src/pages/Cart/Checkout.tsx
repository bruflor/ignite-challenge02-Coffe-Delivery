import {
  MapPinLine,
  CurrencyDollar,
  Bank,
  Money,
  CreditCard,
} from "phosphor-react";
import { useContext, useEffect } from "react";
import { CartCard } from "../../components/Cards/cartCard";
import { CartContext } from "../../contexts/CartContext";
import {
  CartPageContainer,
  FormContainer,
  ProductsCardsContainer,
  PaymentContainer,
  AddressContainer,
  InputTextContainer,
} from "./style";

export const Checkout = () => {
  const { onCart } = useContext(CartContext);

  //TODO: Button "confirmar pedido" as submit form
  //TODO: onSubmit change main page for sucess page and pass data to that

  const sumPrices = onCart.reduce((accumulator, object) => {
    return accumulator + object.priceTotal;
  }, 0);

  const deliveryPrice = 3.5;

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log(e.target.value);
  }
  return (
    <CartPageContainer>
      <FormContainer id="checkoutForm" onSubmit={handleSubmit}>
        <AddressContainer>
          <div>
            <MapPinLine size={24} />
            <div>
              <h3>Endereço de Entrega</h3>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </div>
          <InputTextContainer>
            <input placeholder="CEP" />
            <input placeholder="Rua" />
            <input placeholder="Número" />
            <input placeholder="Complemento" />
            <input placeholder="Bairro" />
            <div>
              <input placeholder="Cidade" />
              <input placeholder="UF" />
            </div>
          </InputTextContainer>
        </AddressContainer>
        <PaymentContainer>
          <div>
            <CurrencyDollar size={24} />
            <div>
              <h3>Endereço de Entrega</h3>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </div>
          <div>
            <input
              name="paymentMethods"
              type="radio"
              value="creditCard"
              id="creditCard"
            />
            <label htmlFor="creditCard">
              <CreditCard size={24} />
              Cartão de crédito
            </label>
            <input
              name="paymentMethods"
              type="radio"
              value="debitCard"
              id="debitCard"
            />
            <label htmlFor="debitCard">
              <Bank size={24} />
              Cartão de débito
            </label>
            <input
              name="paymentMethods"
              type="radio"
              value="money"
              id="money"
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
