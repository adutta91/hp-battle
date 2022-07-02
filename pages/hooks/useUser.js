import { useEffect, useState } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import useFirebase from "./useFirebase";
import { useLocalStorage } from '@mantine/hooks';

const provider = new GoogleAuthProvider();

const useUser = () => {
  const [user, setUser] = useLocalStorage({ key: 'hp-battle-user', defaultValue: null })
  const { auth } = useFirebase()

  useEffect(() => {
    if (!user) {
      signInWithPopup(auth, provider)
        .then((result) => {
          if (result.user) setUser(result.user)
        }).catch((error) => {
          console.error(`error -------->>>>>>>>`, error)
        });
    }
  }, [setUser, user, auth])

  return {
    user
  }
}

export default useUser