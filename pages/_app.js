import '../styles/globals.css'
import {config} from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

import Layout from "../components/sidebar";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
    <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
