import "styles/globals.css";
import Layout from "components/layout";

// fontawesome
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* ページの要素をスプレッド構文で展開している？ */}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
