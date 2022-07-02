import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useGames from '../../hooks/useGames';
import Game from '../../components/Game'
import useUser from '../../hooks/useUser';

export default function GamePage() {
  const router = useRouter();

  const { game, fetchGame } = useGames()
  const { user } = useUser()

  useEffect(() => {
    if (user && router.query.gameId && !game) fetchGame(router.query.userId, router.query.gameId)
  }, [user, fetchGame, game, router.query])

  return <Game game={game} />
}
