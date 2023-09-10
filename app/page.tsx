'use client'

import { getUser } from "@/feature/auth/getUser"
import { useAppDispatch } from "@/hook/reduxHooks"
import { RootState } from "@/lib/redux"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const user = useSelector((state: RootState) => state.auth.user)
  
  useEffect(() => {
    dispatch(getUser())
  }, [])

  useEffect(() => {
    if (user) {
      router.replace('/dashboard')
    } else {
      router.replace('/signin')
    }
  }, [router, user])

  return (
    <main className="h-screen grid place-items-center">
      <div>Loading</div>
    </main>
  ) 
}