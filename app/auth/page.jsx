"use client"

import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function Auth() {

 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [name, setName] = useState("");
 const [creatingUser, setCreatingUser] = useState(false);
 const [userCreated, setUserCreated] = useState(false);
 const [error, setError] = useState(false);

 const handelFormSubmit = async e => {
  e.preventDefault();
  setCreatingUser(true);
  setError(false);
  setUserCreated(false);
  const response = await fetch("/api/register", {
   method: "POST",
   body: JSON.stringify({ name, email, password }),
   headers: { "Content-type": "application/json" },
  });
  if (response.ok) {
   setUserCreated(true);
  } else {
   setError(true);
  }
 };

 return <>
  {/* <div className=" container">
   <div className=" loginfront flex flex-center">
    <div className=" loginbox flex flex-col">
     <Image src={"/img/coder.JPG"} width={250} height={250} />
     <h1>Welcome Admin Of The Meghdad Movies</h1>
     <p>Visit Our Main Website <a href="/">Meghdad web</a></p>
     <button className=" mt-2">Log in with google</button>
    </div>
   </div>
  </div> */}
  <section className='loginbox container'>
   <h1 className=' text-center text-best text-4xl mb-4'>Register</h1>
   {userCreated && (
    <div className=' my-4 text-center text-green-500'>
     user created.
     <br />
     Now you can{" "}
     <Link
      className=' underline'
      href={"/login"}>
      Login
     </Link>
    </div>
   )}
   {error && (
    <div className=' my-4 text-center text-red-500'>
     An error has occurred.
     <br />
     Please try again later
    </div>
   )}
   <form
    className=' flex flex-col gap-1 mx-auto'
    onSubmit={handelFormSubmit}>
    <input
     value={name}
     name="name"
     disabled={creatingUser}
     onChange={e => setName(e.target.value)}
     type='text'
     placeholder='name'
    />
    <input
     value={email}
     name="email"
     disabled={creatingUser}
     onChange={e => setEmail(e.target.value)}
     type='email'
     placeholder='email'
    />
    <input
     value={password}
     name="password"
     disabled={creatingUser}
     onChange={e => setPassword(e.target.value)}
     type='password'
     placeholder='password'
    />
    <button
     disabled={creatingUser}
     type='submit'>
     Register
    </button>
    <div className=' my-4 text-center text-gray-500'>-------------- or login with provider --------------</div>
    <button
     onClick={() => signIn("google", { callbackUrl: "/" })}
     className=' flex gap-4 justify-center items-center'>
     <Image
      src={"/img/noimage.jpg"}
      alt={"google icon"}
      width={28}
      height={28}
     />
     Login with google
    </button>
    <button
     type='button'
     onClick={() => signIn("github", { callbackUrl: "/" })}
     className=' flex gap-4 justify-center items-center'>
     <Image
      src={"/img/noimage.jpg"}
      alt={"google icon"}
      width={28}
      height={28}
     />
     Login with github
    </button>
    <div className=' text-center my-4 text-gray-500 border-t pt-4 border-gray-300'>
     Existing account?{" "}
     <Link
      className=' underline'
      href={"/login"}>
      Login here &raquo;
     </Link>
    </div>
   </form>
  </section>

 </>
}