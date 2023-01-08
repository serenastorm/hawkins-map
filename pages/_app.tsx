import Script from "next/script";
import { AnimatePresence } from "framer-motion";

import type { AppProps } from "next/app";

import "styles/app.scss";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      {router.pathname !== "/starcourt" && <Script src="/particles.js" />}
      <AnimatePresence mode="wait">
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </>
  );
}
