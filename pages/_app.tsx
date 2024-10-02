import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { getLayout } from "@/components/layout/Layout";
import {NextPage} from "next";

// Определение типа страницы с возможностью задать свой layout
export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

// Определение типа пропсов с возможностью передавать layout
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Используем getLayout, если он есть у страницы, иначе используем стандартный
  const layoutFunction = Component.getLayout ?? getLayout;

  return layoutFunction(<Component {...pageProps} />);
}

// import { NextPage } from "next";
// import { ReactElement, ReactNode } from "react";
//
// export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
//   getLayout?: (page: ReactElement) => ReactNode;
// };
//
// type AppPropsWithLayout = {
//   Component: NextPageWithLayout;
//   pageProps?: any; // Лучше специфицировать типы prop-ов, если возможно
// };
//
// export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
//   const getLayout = Component.getLayout ?? ((page) => page);
//
//   return getLayout(<Component {...pageProps} />);
// }


// import type { AppProps } from "next/app";
//
// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }
