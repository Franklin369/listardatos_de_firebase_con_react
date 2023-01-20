import { Light } from "../styles/Themes";
import { GlobalStyles } from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";

import { Team } from "../components/sections/Team";

export function MenuPrincipal() {
  return (
    <main>
      <GlobalStyles />
      <ThemeProvider theme={Light}>
        <Team />
      </ThemeProvider>
    </main>
  );
}
