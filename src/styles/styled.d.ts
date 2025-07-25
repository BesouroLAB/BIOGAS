import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      dark: string;
      light: string;
      contrastYellow: string;
      contrastGreen: string;
    };
  }
}
