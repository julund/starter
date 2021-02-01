import Layout from "../components/layout";
import Link from "../components/link";
import Content from "../components/content";

const NotFound = () =>  {
  return (
    <Layout page="404 - Not found">
        <Content>
            <h1 className="font-title text-3xl my-2">404 - Not found</h1>
            <p className="leading-relaxed my-1">In est dolores fuga. Maiores qui commodi sit qui. Nam et eligendi sed natus et commodi. Exercitationem voluptas quos <Link href="/">praesentium</Link>.</p>
        </Content>
    </Layout>
  );
}
export default NotFound;