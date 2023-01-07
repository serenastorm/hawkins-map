import Script from "next/script";
import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";

import "react-popper-tooltip/dist/styles.css";
import "styles/app.scss";

export default function App({ Component, pageProps, router }: AppProps) {
  console.log(router);

  return (
    <>
      {router.pathname !== "/starcourt" && <Script src="/particles.js" />}
      <AnimatePresence mode="wait">
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </>
  );
}
