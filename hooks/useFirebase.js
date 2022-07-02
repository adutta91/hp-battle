import { useEffect, useState } from "react";
import initFirebase from "../firebaseConfig"

const useFirebase = () => {
  const [firebase, setFirebase] = useState({})

  useEffect(() => {
    setFirebase(initFirebase())
  }, [])

  return firebase
}

export default useFirebase