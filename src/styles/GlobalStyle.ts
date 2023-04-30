import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  background-color: ${colors.black.black2};
  color: ${colors.primary};
}
`;

export { GlobalStyle };
