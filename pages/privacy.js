import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Head from 'next/head';
// import Footer from '../components/footer/Footer';
import dynamic from 'next/dynamic'


const Priv=dynamic(
  () => import('../components/priv/Priv'),
  { loading: () => (

  <p style={{fontWeight:"bold", fontSize:"1.1rem"}}> Just a Second: Loading</p>
    
    
    ) }
)

const Footer=dynamic(
  () => import('../components/footer/Footer'),
  { loading: () => (

  <p >Loading</p>
    
    
    ) });



export default function privacy() {
  const title={
    fontWeight: "bold" ,
    fontSize:"2rem"
  }
  const sub_title={
    fontWeight: "bold" ,
    fontSize:"1.75rem"
  }

  return (
    <>
      <Head>
        <title>Free Wordcloud Online - Privacy</title>
        <meta name="description" content="Privacy content of Free WordCloud online, everything about the Privacy Policy and Data Protection" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar route="/privacy" ></Navbar>
      <Priv/>

      <Footer />
    </>

  )
}
