import Head from "next/head";
import Header from "./header";
import Nav from "./nav";
import Footer from "./footer";
import Main from "./main";
import Content from './content'

const Layout = props => (
  <>
    <Head>
      <title>{props.page ? props.page + " • " : ""}Starter</title>
    </Head>
    <Header/>
    <Main>
        <Nav/>
        <Content>
            {props.children}
        </Content>
    </Main>
    <Footer/>
  </>
);

export default Layout;