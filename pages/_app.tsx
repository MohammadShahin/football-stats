import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../src/components/Layout'

function MyApp({ Component, pageProps }: AppProps) {

  const fn = () => {}

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
