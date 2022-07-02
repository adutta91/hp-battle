import { useEffect, useState } from "react";
import useFirebase from "./useFirebase";
import useUser from "./useUser";
import { collection, getDocs, addDoc } from 'firebase/firestore';

const useGames = () => {
  const { database } = useFirebase()
  const { user } = useUser();

  const [games, setGames] = useState({ key: 'hp-battle-user', defaultValue: null })
  const [instance, setInstance] = useState(null)

  useEffect(() => {
    if (database && user) setInstance(collection(database, `games-${user.uid}`))
  }, [database, user])

  useEffect(() => {
    if (instance) {
      const result = []
      getDocs(instance).then(snapshot => {
        snapshot.forEach(doc => {
          result.push(doc.data())
        })

        setGames(result)
      });
    }
  }, [instance])

  const addGame = data => {
    addDoc(instance, data)
  }

  return {
    games,
    addGame
  }
}

export default useGames