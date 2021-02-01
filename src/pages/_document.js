import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="no">
        <Head>
          <link rel="manifest" href="manifest.json" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="preload" href="/fonts/poppins-400.woff2" as="font" type="font/woff2" crossorigin="anonymous"/>
          <link rel="preload" href="/fonts/poppins-700.woff2" as="font" type="font/woff2" crossorigin="anonymous"/>
          <meta name="Description" content="Put your description here."/>
        </Head>
        <body>
          <Main />
          <div id="modal"/>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;