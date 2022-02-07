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
        <meta name="description" content="About Format maker, release date, utilities, powerful tool for everyone." />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
   
      <Navbar route="/contact" ></Navbar>

      <Contactform/>
      <Footer/>
    </>
  )
}
