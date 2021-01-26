import Layout from "../components/layout";
import Link from "next/link";

const NotFound = () =>  {
  return (
    <Layout>
      <div>
        <h1>404</h1>
        Fant ikke siden. Gå tilbake til <Link href="/"><a>start</a></Link>.
      </div>
    </Layout>
  );
}
export default NotFound;