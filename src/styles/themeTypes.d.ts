import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSize: {
      small?: string;
      medium?: string;
      large?: string;
    };

    fontWeight: { small?: string; medium?: string; large?: string };

    color: {
      useless: string;
      background: string;
    };
  }
}