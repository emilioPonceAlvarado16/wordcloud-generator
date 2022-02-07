import Head from 'next/head'
import Navbar from '../components/navbar/Navbar'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Contactform from '../components/contactform/Contactform'
export default function contact() {
  return (
    <>
      <Head>
        <title>Free Wordcloud Online - Contact</title>
        <meta name="description" content="Free Wordcloud online - contact section, where you can send a message directly to me, the creator of this Page (Isaias E. Ponce Alvarado), and add more value to the App." />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
   
      <Navbar route="/contact" ></Navbar>

      <Contactform/>
      <Footer/>
    </>
  )
}
