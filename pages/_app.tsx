import Script from "next/script";
import type { AppProps } from "next/app";

import "react-popper-tooltip/dist/styles.css";
import "styles/app.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="/particles.js" />
      <Component {...pageProps} />
    </>
  );
}
