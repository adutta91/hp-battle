import { Center, Container, Loader } from '@mantine/core';

export default function Game ({ game }) {

  return game ? (
    <Container>
      Game ID: {game.id}
    </Container>
  ) : <Center><Loader /></Center>
}
