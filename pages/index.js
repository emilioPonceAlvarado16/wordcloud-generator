import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar/Navbar'
import App from '../components/app/App'
import Footer from '../components/footer/Footer'
export default function Home() {

  return (
    <>
      <Head>
        <title>Free Wordcloud Online</title>
        <meta name="description" content="The best and Free Word Cloud generator for everyone in 2022, Easy to use, and very intuitive not like others." />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar route="/" ></Navbar>
   <App/>
   <Footer/>
    </>
  )
}
