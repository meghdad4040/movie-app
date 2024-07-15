"use client"

import useFetchData from "@/hooks/useFetchData"
import Link from "next/link";
import { useState } from "react"
import { FaBars } from "react-icons/fa";
import { GrWindows } from "react-icons/gr";
import { GrLanguage } from "react-icons/gr";
import { PiNoteFill } from "react-icons/pi";
import { MdNotificationAdd } from "react-icons/md";
import ChangeTheme from "./change-theme";
import { useSession } from "next-auth/react";

export default function Header() {

 const session = useSession()
 console.log("session", session)
 // fetch data from api
 const { alldata, loading } = useFetchData("/api/getmovies")

 const [searchQuery, setSearchQuery] = useState("")
 const [opensearch, setOpensearch] = useState(false)

 // search bar open close function
 const handleOpen = () => {
  setOpensearch(!opensearch)
 }
 const handleClose = () => {
  setSearchQuery("")
  setOpensearch(false)
 }

 // filter published data
 const publishedMovies = alldata.filter(ab => ab.status === "publish")

 // search query
 const filteredMovies = searchQuery.trim() === "" ? publishedMovies : publishedMovies.filter(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase()))

 return <>
  <header className=" header">
   <div className="flex flex-sb">
    <div className=" headerbar">
     <FaBars />
    </div>
    <div className=" searchheaderinput">
     <input type="text"
      placeholder="Search movies here"
      value={searchQuery}
      onClick={handleOpen}
      readOnly
     />
    </div>
    <ul className="flex gap-2">
     <Link href="/"><li><GrWindows /></li></Link>
     <Link href="/"><li><GrLanguage /></li></Link>
     <Link href="/"><li><MdNotificationAdd /></li></Link>
     <Link href="/"><li><PiNoteFill /></li></Link>
     <ChangeTheme />
     <Link href="/"><li><img src="/img/user.png" alt="user" /></li></Link>
    </ul>
   </div>
   {opensearch && (
    <div className=" fixedsearchq">
     <input type="text"
      placeholder="Search movies here"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
     />
     {searchQuery && (
      <div className=" searchresultofinput">
       <>
        {filteredMovies.length > 0 ? <>
         {
          filteredMovies.slice(0, 10).map((movie) => {
           return <div className=" siresult" key={movie._id}>
            <img src={`${movie.smposter}`} alt="movie" />
            <div className=" simovieinfo">
             <h3>{movie.title}</h3>
             <div className=" udbtns">
              <Link href={`/movies/edit/${movie._id}`} onClick={handleClose}>Update</Link>
              <Link href={`/movies/delete/${movie._id}`} onClick={handleClose}>Delete</Link>
             </div>
            </div>
           </div>
          })
         }
        </> : <div className=" w-100 flex flex-center">No Movie Found</div>}
       </>
      </div>
     )}
     <button className=" closesearch" onClick={handleClose}>X</button>
    </div>
   )}
  </header >

 </>
}
