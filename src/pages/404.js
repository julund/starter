import Layout from "../components/layout";
import Link from "../components/link";

const NotFound = () =>  {
  return (
    <Layout>
        <h1>404</h1>
        Fant ikke siden. Gå tilbake til <Link href="/">forsiden</Link>.
    </Layout>
  );
}
export default NotFound;