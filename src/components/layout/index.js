import Head from "next/head";
import Header from "./header";
import Navbar from "./navbar";
import Footer from "./footer";
import Main from "./main";

const Layout = props => (
  <>
    <Head>
      <title>Starter{props.page ? " - " + props.page : ""}</title>
    </Head>
    <Header/>
    <Main>
        <Navbar/>
        {props.children}
    </Main>
    <Footer/>
  </>
);

export default Layout;