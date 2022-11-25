import { MapPinLine } from "phosphor-react";
import { CartPageContainer, FormContainer } from "./style";

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
      <div>Cards products + total items and button</div>
    </CartPageContainer>
  );
};
