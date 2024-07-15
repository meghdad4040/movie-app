"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"


const Page = () => {
 const session = useSession()
 const router = useRouter()
 const { status } = session


 if (status === "unauthenticated") {
  router.push("/login")
 }

 return (
  <div className="loginbox  container ">
   <div className=" w-[25rem] h-[15rem] dark:bg-white/5 bg-white/15 shadow-2xl rounded-xl p-6 flex flex-col gap-1 mx-auto items-center justify-center">
    <p className=" dark:text-gray-400"> Signed in as: </p> <span className=" text-xl">{session?.data?.user?.name}</span>  <br />
    <button className="btn" onClick={() => signOut()}>Sign out</button>
   </div>
  </div>
 )

}

export default Page
