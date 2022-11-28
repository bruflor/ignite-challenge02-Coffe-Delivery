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
  CheckoutContainer,
  PaymentContainer,
} from "./style";

export const Checkout = () => {
  const { onCart, setOnCart } = useContext(CartContext);

  //TODO: Form section as well for payments methods. They could be a select option
  //TODO: Button "confirmar pedido" as submit form
  //TODO: AmountCounter block negative numbers
  //TODO: Remove Button
  //TODO: Calculate prices totals
  //TODO: onSubmit change main page for sucess page and pass data to that

  const sumPrices = onCart.reduce((accumulator, object) => {
    return accumulator + object.priceTotal;
  }, 0);

  // function removeCoffeTypefromCart(typeToRemoveId: string) {
  //   const currentCart = [...onCart];
  //   const coffeTypeIndex = currentCart.findIndex(
  //     (coffeType) => coffeType.id === typeToRemoveId
  //   );

  //   currentCart.splice(coffeTypeIndex);
  //   return setOnCart(currentCart);
  // }

  const deliveryPrice = 3.5;
  return (
    <CartPageContainer>
      <CheckoutContainer>
        <FormContainer>
          <div>
            <MapPinLine size={24} />
            <div>
              <h3>Endereço de Entrega</h3>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </div>
          <form>
            <input placeholder="CEP" />
            <input placeholder="Rua" />
            <input placeholder="Número" />
            <input placeholder="Complemento" />
            <input placeholder="Bairro" />
            <div>
              <input placeholder="Cidade" />
              <input placeholder="UF" />
            </div>
          </form>
        </FormContainer>
        <PaymentContainer>
          <div>
            <CurrencyDollar size={24} />
            <div>
              <h3>Endereço de Entrega</h3>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </div>
          <div>
            <button>
              <CreditCard size={24} />
              Cartão de crédito
            </button>
            <button>
              <Bank size={24} />
              Cartão de débito
            </button>
            <button>
              <Money size={24} />
              dinheiro
            </button>
          </div>
        </PaymentContainer>
      </CheckoutContainer>

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
        <button>Confirmar pedido</button>
      </ProductsCardsContainer>
    </CartPageContainer>
  );
};
