import '../styles/global.css'
import '../styles/carousel.css';
import { AnimateSharedLayout } from "framer-motion"
import { AnimatePresence } from 'framer-motion';
import Layout from '../components/layout'

export default function App({ Component, pageProps }) {
  return (
    <AnimateSharedLayout>
      <AnimatePresence exitBeforeEnter>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}
