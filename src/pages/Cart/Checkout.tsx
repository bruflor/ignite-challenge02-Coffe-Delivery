import {
  MapPinLine,
  CurrencyDollar,
  Bank,
  Money,
  CreditCard,
} from "phosphor-react";
import { CartCard } from "../../components/Cards/cartCard";
import {
  CartPageContainer,
  FormContainer,
  ProductsCardsContainer,
  CheckoutContainer,
  PaymentContainer,
} from "./style";

export const Checkout = () => {
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
        <CartCard name={"Cubano"} price={10} />
        <CartCard name={"Café com Leite"} price={2} />
        <div>
          <p>Total de itens</p>
          <p>R$ 1256</p>
        </div>
        <div>
          <p>Entrega</p>
          <p>R$ 2</p>
        </div>
        <div>
          <h3>Total</h3>
          <h3>R$ 1258</h3>
        </div>
        <button>Confirmar pedido</button>
      </ProductsCardsContainer>
    </CartPageContainer>
  );
};
