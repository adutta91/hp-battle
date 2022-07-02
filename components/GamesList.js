import { useEffect, useState } from 'react';
import { Center, Button, Card, Container, Text, Loader } from '@mantine/core';
import NewGameForm from './NewGameForm'
import useGames from '../hooks/useGames';
import useUser from '../hooks/useUser';

export default function GamesList () {
  const [opened, setOpened] = useState(false);
  const { loading, fetchGames, games, addGame, removeGame } = useGames()
  const { user } = useUser()

  useEffect(() => {
    if (user && !games) fetchGames()
  }, [fetchGames, user, games])
  
  const onSubmit = data => {
    addGame(data)
    setOpened(false)
  }

  return (
    <Container style={{ width: 340 }}>
      {!games || loading ? <Center><Loader /></Center> : games.map(gameDoc => {
        const game = gameDoc.data()

        return (
          <Card withBorder shadow="lg" p="lg" key={gameDoc.id} style={{ width: 250, margin: 'auto', marginBottom: 25 }}>
            <Center><Text size="xl" style={{ marginBottom: 25 }}>{game.name}</Text></Center>
            <div style={{ display: 'flex', justifyContent: "space-between"}}>
              <a href={`/${user.uid}/${gameDoc.id}`}>
                <Button variant="light">
                  Let&apos;s go!
                </Button>
              </a>
              <Button variant="outline" color="red" onClick={() => removeGame(gameDoc)}>Delete</Button>
            </div>
          </Card>
        )
      })}

      <Center style={{ marginTop: 25 }}>
        <NewGameForm opened={opened} onClose={() => setOpened(false)} title="Start a new game!" onSubmit={onSubmit}/>
        <Button variant="filled" onClick={() => setOpened(true)}>New Game</Button>
      </Center>
    </Container>
  )
}
