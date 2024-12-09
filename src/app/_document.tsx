// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preload" as="image" href="/images/clairedB.png" />
        <link rel="preload" as="image" href="/images/clairedA.png" />
        <link rel="preload" as="image" href="/images/thomamB.png" />
        <link rel="preload" as="image" href="/images/thomamA.png" />
        <link rel="preload" as="image" href="/images/sophiemB.png" />
        <link rel="preload" as="image" href="/images/sophiemA.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
