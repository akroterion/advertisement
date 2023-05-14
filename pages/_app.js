import '@advertisment/styles/globals.css'
import Layout from './layout'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return( 
  <Layout div className='bg-gray-800'>
  <Component  key={router.asPath} {...pageProps} />
  </Layout>)
}
