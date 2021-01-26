import Head from "next/head";
import "../styles/_app.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      </>
  );
}

export default App;