import Head from 'next/head'
import { AppShell, Center, Loader } from '@mantine/core';
import Header from './components/Header'
import useGames from './hooks/useGames';

export default function Home() {
  const { games } = useGames()
  console.log(`games -------->>>>>>>>`, games)
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
