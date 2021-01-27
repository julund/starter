import Layout from "../components/layout";
import Link from "../components/link";

const NotFound = () =>  {
  return (
    <Layout>
        <h1 className="font-title text-3xl my-2">404 - ikke funnet</h1>
        <p className="leading-relaxed my-1">Vi fant deverre ikke siden du lette etter. Gå tilbake til <Link href="/">forsiden</Link>.</p>
    </Layout>
  );
}
export default NotFound;