import Layout from "../components/layout";
import Link from "next/link";
import Content from "../components/content";

const Error = ({ statusCode }) =>  {
  return (
    <Layout>
        <Content>
            <h1>{statusCode}</h1>
            {statusCode
            ? `An error ${statusCode} occurred on server`
            : 'An error occurred on client'}. <Link href="/"><a>start</a></Link>.
        </Content>
    </Layout>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error;