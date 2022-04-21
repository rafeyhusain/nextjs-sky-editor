import Layout from "../components/Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "../public/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
