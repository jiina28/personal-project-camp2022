import '../styles/globals.css'
import {config} from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { useEffect, useState } from 'react'

import Layout from "../components/sidebar";

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false)
  useEffect(() => {
    setShowChild(true)
  }, [])

  if(!showChild) {
    return null
  }

  return (

    <Component {...pageProps} />

  );
}

export default MyApp;
