import Head from 'next/head'
import Image from 'next/image'
import Masthead from '../components/Masthead'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className="p-0">
      <Head>
        <title>The Philippines</title>
        <meta name="description" content="This isn't actually official :P" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<Navbar />
<Masthead />
    </div>
  )
}
