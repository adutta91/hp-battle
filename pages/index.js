import Head from 'next/head'
import { AppShell, Center, Loader } from '@mantine/core';
import Header from './components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>HP Battle Game</title>
        <meta name="description" content="Web-app version of the board game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <AppShell
      padding="md"
      header={<Header height={60} p="xs">Test</Header>}
    >
      <Center>
        <Loader />
      </Center>
    </AppShell>
    </div>
  )
}
