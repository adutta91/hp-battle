import '../styles/globals.css'
import Head from 'next/head'
import { AppShell } from '@mantine/core';
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>HP Battle Game</title>
        <meta name="description" content="Web-app version of the board game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
      <AppShell
        padding="md"
        header={<Header height={60} p="xs" />}
      >
        <Component {...pageProps} />
      </AppShell>
    </div>
  )
  return 
}

export default MyApp
