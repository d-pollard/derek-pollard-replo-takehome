import type { AppProps } from "next/app";
import './globals.css';
import {ReploGlobalStateProvider} from "../components/ReploGlobalState";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,700&display=swap"
        rel="stylesheet"
      ></link>
      <ReploGlobalStateProvider>
        <Component {...pageProps} />
      </ReploGlobalStateProvider>
    </>
  );
}

export default MyApp;
