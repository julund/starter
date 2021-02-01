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
          {/* <link rel="icon" type="image/png" href="favicon.png"/> */}
          <link rel="preload" href="/fonts/poppins-400.woff2" as="font" type="font/woff2" crossorigin="anonymous"></link>
          <link rel="preload" href="/fonts/poppins-700.woff2" as="font" type="font/woff2" crossorigin="anonymous"></link>
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