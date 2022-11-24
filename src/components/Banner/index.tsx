import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react";
import { Banner, BannerBullets, BannerItems } from "./style";
import BannerImg from "../../assets/CoffeBanner.png";

export const BannerInfo = () => {
  return (
    <Banner>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h3>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h3>
        <BannerItems>
          <div>
            <div>
              <BannerBullets bulletsColor="yellow-dark">
                <ShoppingCart size={16} weight="fill" />
              </BannerBullets>
              <p>Compra simples e segura</p>
            </div>
            <div>
              <BannerBullets bulletsColor="yellow">
                <Timer size={16} weight="fill" />
              </BannerBullets>
              <p>Entrega rápida e rastreada</p>
            </div>
          </div>
          <div>
            <div>
              <BannerBullets bulletsColor="purple-dark">
                <Package size={16} weight="fill" />
              </BannerBullets>
              <p>Embalagem mantém o café intacto</p>
            </div>
            <div>
              <BannerBullets bulletsColor="purple">
                <Coffee size={16} weight="fill" />
              </BannerBullets>
              <p>O café chega fresquinho até você</p>
            </div>
          </div>
        </BannerItems>
      </div>
      <img src={BannerImg} />
    </Banner>
  );
};
