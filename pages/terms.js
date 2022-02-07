import Head from 'next/head'
import Navbar from '../components/navbar/Navbar'

import dynamic from 'next/dynamic'

const Posi=dynamic(
  () => import('../components/posi/Posi'),
  { loading: () => (

  <p style={{fontWeight:"bold", fontSize:"1.1rem"}}> Just a Second: Loading</p>
    
    
    ), ssr: false }
)

const Footer=dynamic(
  () => import('../components/footer/Footer'),
  { loading: () => (

  <p >Loading</p>
    
    
    ), ssr: false  }
)
export default function Terms() {

 
  return (
    <>
      <Head>
        <title>Free Wordcloud Online - Terms</title>
        <meta name="description" content="Terms section of Free Wordcloud online , Legal notice and General conditions of Use for this Page." />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar route="/terms" ></Navbar>
    <br/>

      <Posi/>

        <Footer />


    </>
  )
}
