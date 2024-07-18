"use client"

import useFetchData from "@/hooks/useFetchData";
import Link from "next/link"
import { useState } from "react";
import { FcRating } from "react-icons/fc";
import Loading from "../../components/Loading";
import Image from "next/image";


export default function movies() {

 const [currentPage, setCurrentPage] = useState(1)
 const [prePage] = useState(4)
 const [searchQuery, setSearchQuery] = useState("")

 // fetch data from api
 const { alldata, loading } = useFetchData("/api/getmovies")

 const allMovie = alldata.length

 // function to handle page change
 const paginate = (pageNumber) => {
  setCurrentPage(pageNumber)
 }

 // calculate index of the first movie displayed on the current page
 const indexOfFirstMovie = (currentPage - 1) * prePage
 const indexOfLastMovie = currentPage * prePage

 // filter all data based on search query
 const filteredMovies = searchQuery.trim() === "" ? alldata : alldata.filter(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase()))

 // get the current  pages movies
 const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie)

 // filter published data
 const publishedMovies = currentMovies.filter(ab => ab.status === "publish")

 const pageNumbers = []

 for (let i = 1; i <= Math.ceil(allMovie / prePage); i++) {
  pageNumbers.push(i)
 }

 return <>
  <div className=" containerr md:ml-80">
   <div className=" moviecards flex flex-col gap-2 w-100">
    <div className=" flex flex-sb w-100 movietitle">
     <h2>List Of Published Movies</h2>
     <Link href="/addmovie"><button>Add Movies</button></Link>
    </div>
    {loading ? <Loading /> : <>
     {publishedMovies.map((movie) => {
      return <div className=" flex moviecard flex-col lg:flex-row h-auto lg:h-[20rem] w-full" key={movie._id}>
       <div className="w-full h-full lg:ml-2 lg:flex lg:justify-center lg:items-center">
        <Image alt={movie.title}
         src={movie.bgposter || "/img/noimage.jpg"}
         width={200} height={200}
         className=" w-full max-h-full min-h-full lg:max-w-[40rem]  lg:rounded-2xl" />
       </div>
       <div className="moviecardinfo w-full">
        <dir>
         <h3>{movie.title}</h3>
         <p>{movie.category}</p>
        </dir>
        <Link target="_blank" href={movie.youtubelink}>{movie.youtubelink}</Link>
        <div className="flex gap-[0.1rem] relative">
         {movie.rating} <FcRating className=" absolute -top-3 left-4" />
        </div>
        <div className="flex gap-2 mt-2 w-full justify-center">
         <Link href={`/movies/edit/${movie._id}`}>
          <button>Update Movie</button>
         </Link>
         <Link href={`/movies/delete/${movie._id}`}>
          <button>Delete Movie</button>
         </Link>
        </div>
       </div>
      </div>
     })}
    </>}
    {publishedMovies.length === 0 ? (
     ""
    ) : (
     <div className=" blogpagination">
      <button
       onClick={() => paginate(currentPage - 1)}
       disabled={currentPage === 1}>
       Previous
      </button>
      {pageNumbers.slice(Math.max(currentPage - 3, 0),
       Math.min(currentPage + 2, pageNumbers.length)).map((number) => (
        <button
         key={number}
         onClick={() => paginate(number)}
         className={`${currentPage === number ? 'active' : ''}`}
        >
         {number}
        </button>
       ))}
      <button
       onClick={() => paginate(currentPage + 1)}
       disabled={currentMovies.length < prePage}
      >
       Next
      </button>
     </div>
    )}
   </div>
  </div>
 </>
}