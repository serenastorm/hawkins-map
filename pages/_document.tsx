import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
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
