"use client"

import Link from "next/link";
import { BiCameraMovie } from "react-icons/bi";
import { IoHome } from "react-icons/io5";
import { RiMovieLine } from "react-icons/ri";
import { RiAddBoxLine } from "react-icons/ri";
import { RiDraftLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { FaSignInAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Aside() {

 const router = useRouter()
 const [clicked, setClicked] = useState(false)
 const [activelink, setActivelink] = useState("/")

 const handleClick = () => {
  setClicked(!clicked)
 }

 const handleLinkClick = (link) => {
  setActivelink(link)
  setClicked(false)
 }

 useEffect(() => {
  // update active link state when the page is reloaded
  setActivelink(router.pathname)
 }, [router.pathname]);


 return <>
  <div className=" aside">
   <div className=" logo flex">
    <BiCameraMovie />
    <Link href="/"><h1>MOVIES</h1></Link>
   </div>
   <ul className=" mt-2">
    <Link href="/" className={activelink === "/" ? "active" : ""} onClick={() => handleLinkClick("/")}><li><div><IoHome /></div>Dashboard</li></Link>
    <Link href="/movies" className={activelink === "/movies" ? "active" : ""} onClick={() => handleLinkClick("/movies")}><li><div><RiMovieLine /></div>Movies</li></Link>
    <Link href="/addmovie" className={activelink === "/addmovie" ? "active" : ""} onClick={() => handleLinkClick("/addmovie")}><li><div><RiAddBoxLine /></div>Add</li></Link>
    <Link href="/draft" className={activelink === "/draft" ? "active" : ""} onClick={() => handleLinkClick("/draft")}><li><div><RiDraftLine /></div>Draft</li></Link>
   </ul>
   <h3 className=" mt-2">Account Pages</h3>
   <ul className=" mt-2">
    <Link href="/profile" className={activelink === "/profile" ? "active" : ""} onClick={() => handleLinkClick("/profile")}><li><div><CgProfile /></div>Profile</li></Link>
    <Link href="/auth" className={activelink === "/auth" ? "active" : ""} onClick={() => handleLinkClick("/auth")}><li><div><FaSignInAlt /></div>SignIn</li></Link>
   </ul>
  </div>
 </>
}