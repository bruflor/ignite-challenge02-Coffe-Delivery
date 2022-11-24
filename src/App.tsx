import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { CoffeMenu } from "./App.styles";
import { coffeMenu } from "./mocks/coffeMenu";
import { MenuCard } from "./components/Cards/menuCard";
import { BannerInfo } from "./components/Banner";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <main>
        <BannerInfo />
        <CoffeMenu>
          <h2>Nossos Cafés</h2>
          <div>
            {coffeMenu.map((coffe) => {
              return (
                <MenuCard
                  key={coffe.id}
                  name={coffe.name}
                  description={coffe.description}
                  tags={coffe.tags}
                  price={coffe.price}
                />
              );
            })}
          </div>
        </CoffeMenu>
      </main>
    </ThemeProvider>
  );
}
