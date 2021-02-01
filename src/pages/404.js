import Layout from "../components/layout";
import Link from "../components/link";

const NotFound = () =>  {
  return (
    <Layout page="404 - Not found">
        <h1 className="font-title text-3xl my-2">404 - Not found</h1>
        <p className="leading-relaxed my-1">In est dolores fuga. Maiores qui commodi sit qui. Nam et eligendi sed natus et commodi. Exercitationem voluptas quos <Link href="/">praesentium</Link>.</p>
    </Layout>
  );
}
export default NotFound;