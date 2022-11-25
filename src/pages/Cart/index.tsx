import { MapPinLine } from "phosphor-react";
import { CartCard } from "../../components/Cards/cartCard";
import {
  CartPageContainer,
  FormContainer,
  ProductsCardsContainer,
} from "./style";

export const Cart = () => {
  return (
    <CartPageContainer>
      <div>
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
      </div>
      <ProductsCardsContainer>
        <CartCard name={"Cubano"} price={10} />
        <CartCard name={"Café com Leite"} price={2} />
      </ProductsCardsContainer>
      <div> payments</div>
    </CartPageContainer>
  );
};
