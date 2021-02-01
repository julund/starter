import Head from "next/head";
import Header from "./header";
import Navbar from "./navbar";
import Footer from "./footer";
import Main from "./main";
import Content from './content'
import Hero from "./hero";

const Layout = props => (
  <>
    <Head>
      <title>Starter{props.page ? " ~ " + props.page : ""}</title>
    </Head>
    <Header/>
    <Main>
        <Navbar/>
        { props.page === 'Home' && <Hero/>}
        <Content>
            {props.children}
        </Content>
    </Main>
    <Footer/>
  </>
);

export default Layout;