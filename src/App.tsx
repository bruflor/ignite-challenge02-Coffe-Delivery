import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <div>
        <main>
          <div>Banner</div>
          <div>
            <div>Card</div>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}
