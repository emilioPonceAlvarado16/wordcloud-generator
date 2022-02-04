import Head from 'next/head'
import Navbar from '../components/navbar/Navbar'
import About from '../components/about/About'
import Footer from '../components/footer/Footer'
export default function Home() {

  return (
    <>
      <Head>
        <title>Word cloud generator - Free</title>
        <meta name="description" content="About Format maker, release date, utilities, powerful tool for everyone." />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar route="/about" ></Navbar>
  
     <About/>
     <Footer/>
    </>
  )
}
