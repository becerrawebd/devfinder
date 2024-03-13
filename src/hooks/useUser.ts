import { useCallback, useEffect, useState } from "react"
import { IUser } from "../types/types"
import { getUserInfoByUsername } from "../services/user_service"

export function useUser(username: string) {
    const [user, setUser] = useState<IUser | null>(null)
    const [error, setError] = useState<Error | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
  
    const fetchUser = useCallback(async function (username: string) {
      setLoading(true)
      setError(null)
      try {
        const user = await getUserInfoByUsername(username)
        setUser(user)
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error)
        }
      } finally {
        setLoading(false)
      }
    }, [])
  
    useEffect(() => {
      fetchUser(username)
    }, [username, fetchUser])
  
    return { user, fetchUser, loading, error }
  }