import DeliveryImg from "../../assets/delivery.png";

export const Sucess = () => {
  return (
    <div>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <div>
          <div>
            icon
            <div>
              <p>
                Entrega em: <b>RUA</b>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </div>
          <div>
            icon
            <div>
              <p>Previsão de entrega</p>
              <p>
                <b>20 min - 30 min </b>
              </p>
            </div>
          </div>
          <div>
            icon
            <div>
              <p>Pagamento na entrega</p>
              <p>
                <b>Cartão de Crédito</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <img src={DeliveryImg} />
    </div>
  );
};
