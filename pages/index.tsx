import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Films and TV shows review app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>hi</h1>

    </div>
  )
}

export default Home
