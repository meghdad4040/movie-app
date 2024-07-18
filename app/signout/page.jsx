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
  <div className="loginbox containerr md:ml-80 ">
   <div className=" md:max-w-[25rem] md:h-[15rem] dark:bg-white/5 bg-white/15 shadow-2xl rounded-xl p-6 flex flex-col gap-1 mx-auto ">
    <p className=" dark:text-gray-400">
     Signed in as:
    </p>
    <span className=" text-xl">
     {session?.data?.user?.name}
    </span>
    <br />
    <button className="btn" onClick={() => signOut()}>Sign out</button>
   </div>
  </div>
 )

}

export default Page
