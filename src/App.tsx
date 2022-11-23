import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <div>
        <nav>
          <span>logo</span>
          <div>
            <div>Location</div>
            <a href="#">card</a>
          </div>
        </nav>
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
