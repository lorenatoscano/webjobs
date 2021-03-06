import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    color: {
      primary: string;
      lightTag: string;
      dark: string;
      lightCard: string;
      lightBackground: string;
      lightGrey: string;
      text: string;
      darkText: string;
    };
    boxShadow: string;
    font: {
      size: {
        xSmall: string;
        small: string;
        medium: string;
        large: string;
      };
      family: string;
      weight: {
        regular: number;
        medium: number;
        semiBold: number;
        bold: number;
      };
    };
    borderRadius: {
      tag: string;
      badge: string;
      card: string;
      filterBox: string;
      shareButton: string;
    };
    device: {
      mobile: (mediaQueryType?: string) => string;
      tablet: (mediaQueryType?: string) => string;
      desktop: (mediaQueryType?: string) => string;
      ultrawide: (mediaQueryType?: string) => string;
    };
  }
}
