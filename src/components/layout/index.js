import Head from "next/head";
import styles from './index.module.css'

const Layout = props => (
  <>
    <Head>
      <title>{props.page ? props.page + " • " : ""}Starter</title>
    </Head>
    <main className={styles.container}>
      {props.children}
    </main>
  </>
);

export default Layout;