import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        {/* Josefin sans is needed for SVG */}
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Josefin+Sans:wght@700&family=Overpass+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <div id="canvascontainer">
          <canvas id="buffer"></canvas>
          <canvas id="canvas"></canvas>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
