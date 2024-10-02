import "@/styles/globals.css";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = {
  Component: NextPageWithLayout;
  pageProps?: any; // Лучше специфицировать типы prop-ов, если возможно
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
}


// import type { AppProps } from "next/app";
//
// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }
