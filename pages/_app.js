import Header from '@/components/Header'
import '@/styles/globals.css'
import Footer from '@/components/Footer'
import Section from '@/components/Section'

export default function App({ Component, pageProps }) {
  return <>
    <Header/>
    <Component {...pageProps} />
    {/* <Section/> */}
    <Footer/>
  </>
}
