import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Banner, BannerBullets, BannerItems } from "./App.styles";
import Logo from "./assets/LogoCoffeDelivery.svg";
import { Coffee, MapPin, Package, ShoppingCart, Timer } from "phosphor-react";
import BannerImg from "./assets/CoffeBanner.png";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <main>
        <Banner>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h3>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
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
        <div>
          <div>Card</div>
        </div>
      </main>
    </ThemeProvider>
  );
}
