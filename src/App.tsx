import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Banner } from "./App.styles";
import Logo from "./assets/LogoCoffeDelivery.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
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
            <div>
              <div>
                <div>
                  <span>icon</span>
                  <p>text</p>
                </div>
                <div>
                  <span>icon</span>
                  <p>text</p>
                </div>
              </div>
              <div>
                <div>
                  <span>icon</span>
                  <p>text</p>
                </div>
                <div>
                  <span>icon</span>
                  <p>text</p>
                </div>
              </div>
            </div>
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
