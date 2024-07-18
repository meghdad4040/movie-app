"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const LoginPage = () => {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [loginInProgress, setLoginInProgress] = useState(false);

 const session = useSession()
 const router = useRouter()
 const { status } = session

 const handleSubmitForm = async (e) => {
  e.preventDefault();
  setLoginInProgress(true);
  await signIn("Credentials", { email, password, callbackUrl: "/" });
  setLoginInProgress(false);
  toast.success("login successfully")
 };

 if (status === "authenticated") {
  router.push("/")
 }

 return (
  <section className='loginbox containerr md:ml-80'>
   <h1 className='text-center text-best text-4xl mb-4'>Login</h1>
   <form className='text-xs lg:text-base max-w-[25rem] dark:bg-white/5 bg-black/35 rounded-xl p-6 flex flex-col gap-1 mx-auto'
    onSubmit={handleSubmitForm}>
    <input id="email"
     name='email'
     value={email}
     disabled={loginInProgress}
     onChange={e => setEmail(e.target.value)}
     type='email'
     placeholder='email'
     autoFocus
    />
    <input id="password"
     name='password'
     value={password}
     disabled={loginInProgress}
     onChange={e => setPassword(e.target.value)}
     type='password'
     placeholder='password'
    />
    <button disabled={loginInProgress} type='submit'>
     Login
    </button>
    <div className='dark:text-gray-300  my-4 text-center text-gray-700'>
     or login with provider
    </div>
    <button type='button'
     onClick={() => signIn("google", { callbackUrl: "/" })}
     className='flex gap-4 justify-center items-center'>
     <Image unoptimized={true}
      src={"/img/google.png"}
      alt={"google icon"}
      width={28}
      height={28}
     />
     Login with google
    </button>
    <button type='button'
     onClick={() => signIn("github", { callbackUrl: "/" })}
     className='flex gap-4 justify-center items-center'>
     <Image src={"/img/github.png"}
      alt={"google icon"}
      width={28}
      height={28}
     />
     Login with github
    </button>
    <div className='text-center my-4 text-gray-700 dark:text-gray-300 border-t pt-4 border-gray-800 dark:border-gray-300'>
     Existing account?{" "}
     <Link className=' dark:text-amber-200 text-gray-800 underline'
      href={"/register"}>
      Register here &raquo;
     </Link>
    </div>
   </form>
  </section>
 );
};

export default LoginPage;
