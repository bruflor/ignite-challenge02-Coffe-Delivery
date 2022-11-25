import { MapPin, Timer, CurrencyDollar } from "phosphor-react";
import DeliveryImg from "../../assets/delivery.png";
import { BannerBullets } from "../../components/Banner/style";
import { SucessContainer, DetailDeliveryContainer } from "./style";

export const Sucess = () => {
  return (
    <SucessContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <DetailDeliveryContainer>
          <div>
            <div>
              <BannerBullets bulletsColor="purple">
                <MapPin size={24} weight="fill" />
              </BannerBullets>
              <div>
                <p>
                  Entrega em: <b>RUA</b>
                </p>
                <p>Farrapos - Porto Alegre, RS</p>
              </div>
            </div>
            <div>
              <BannerBullets bulletsColor="yellow">
                <Timer size={24} weight="fill" />
              </BannerBullets>
              <div>
                <p>Previsão de entrega</p>
                <p>
                  <b>20 min - 30 min </b>
                </p>
              </div>
            </div>
            <div>
              <BannerBullets bulletsColor="yellow-dark">
                <CurrencyDollar size={24} weight="bold" />
              </BannerBullets>
              <div>
                <p>Pagamento na entrega</p>
                <p>
                  <b>Cartão de Crédito</b>
                </p>
              </div>
            </div>
          </div>
        </DetailDeliveryContainer>
      </div>
      <img src={DeliveryImg} />
    </SucessContainer>
  );
};
