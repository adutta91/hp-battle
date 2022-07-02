import { useState } from "react";
import useFirebase from "./useFirebase";
import useUser from "./useUser";
import { collection, getDoc, getDocs, addDoc, doc, deleteDoc } from 'firebase/firestore';
import defaultGame from '../models/game'

const useGames = () => {
  const { database } = useFirebase()
  const { user } = useUser();

  const [loading, setLoading] = useState(false)
  const [games, setGames] = useState(null)
  const [game, setGame] = useState(null)

  const fetchGames = async () => {
    setLoading(true)

    const result = []
    const snapshot = await getDocs(collection(database, `games-${user.uid}`))

    snapshot.forEach(doc => result.push(doc))

    setGames(result)
    setLoading(false)
  }

  const fetchGame = async (userId, gameId) => {
    setLoading(true)

    const game = await getDoc(doc(collection(database, `games-${userId}`), gameId))

    setGame(game)
    setLoading(false)
  }

  // TODO - populate cards
  const initializeGame = data => data

  const addGame = async data => {
    await addDoc(collection(database, `games-${user.uid}`), initializeGame({
      ...defaultGame,
      ...data
    }))

    await fetchGames()
  }

  const removeGame = async gameDoc => {
    await deleteDoc(doc(database, `games-${user.uid}`, gameDoc.id))
    await fetchGames()
  }

  return {
    game,
    games,
    loading,
    addGame,
    removeGame,
    fetchGames,
    fetchGame
  }
}

export default useGames