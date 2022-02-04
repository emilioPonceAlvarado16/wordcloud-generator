import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar/Navbar'
import Header from '../components/header/Header'
import App from '../components/app/App'

export default function Home() {

  return (
    <>
      <Head>
        <title>Word cloud generator - Free</title>
        <meta name="description" content="About Format maker, release date, utilities, powerful tool for everyone." />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar route="/" ></Navbar>
   <App/>
    </>
  )
}
