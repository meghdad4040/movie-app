"use client"

import Link from "next/link";
import { ImPlay } from "react-icons/im";
import { HiDotsVertical } from "react-icons/hi";
import { HiSquaresPlus } from "react-icons/hi2";
import { RiMovie2Line } from "react-icons/ri";
import { RiDraftLine } from "react-icons/ri";
import { FcRating } from "react-icons/fc";
import useFetchData from "@/hooks/useFetchData";
import Loading from "../components/Loading";
import Spinner from "../components/Spinner";
import Image from "next/image";



export default function Home() {

 const { alldata, loading } = useFetchData("/api/getmovies")

 const publishedMovies = alldata.filter(ab => ab.status === "publish")
 const draftMovies = alldata.filter(ab => ab.status === "draft")


 return (
  <>
   {
    loading ? <Loading /> : <div className=" containerr md:ml-80">
     <div className=" topheadertitle flex flex-sb">
      <div>
       <h1 className=" mb-1">Explore all type of movies here</h1>
       <p className=" mb-2 w-66">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, dignissimos!</p>
       <Link href="/">
        <button>Exclusive On <span>Meghdad movies</span></button>
       </Link>
      </div>
      <img src="/img/rocket.png" alt="rocket" />
     </div>

     {/* four card */}
     <div className=" fourcards flex flex-sb flex-col lg:flex-row ">

      <div className=" fcard shadow-2xl shadow-blue-600 dark:bg-gray-900 ">
       <div className="flex flex-sb">
        <div className=" fcardsvg">
         <ImPlay />
        </div>
        <h3 className="dark:text-gray-100">Total Movies</h3>
        <HiDotsVertical />
       </div>
       <div className=" flex flex-sb wh-100">
        <img src="/img/chartone.svg" alt="chartone" />
        <h4>{publishedMovies.length}</h4>
       </div>
      </div>

      <div className=" fcard dark:bg-gray-900 shadow-2xl shadow-blue-600">
       <div className="flex flex-sb">
        <div className=" fcardsvg">
         <HiSquaresPlus />
        </div>
        <h3 className="dark:text-gray-100">Category</h3>
        <HiDotsVertical />
       </div>
       <div className=" flex flex-sb wh-100">
        <img src="/img/charttwo.svg" alt="chartone" />
        <h4>6</h4>
       </div>
      </div>

      <div className=" fcard dark:bg-gray-900 shadow-2xl shadow-blue-600">
       <div className="flex flex-sb">
        <div className=" fcardsvg">
         <RiMovie2Line />
        </div>
        <h3 className="dark:text-gray-100">All Genre</h3>
        <HiDotsVertical />
       </div>
       <div className=" flex flex-sb wh-100">
        <img src="/img/chartthree.svg" alt="chartone" />
        <h4>11</h4>
       </div>
      </div>

      <div className=" fcard dark:bg-gray-900 shadow-2xl shadow-blue-600">
       <div className="flex flex-sb">
        <div className=" fcardsvg">
         <RiDraftLine />
        </div>
        <h3 className="dark:text-gray-100">Draft Movies</h3>
        <HiDotsVertical />
       </div>
       <div className=" flex flex-sb wh-100">
        <img src="/img/chartfour.svg" alt="chartone" />
        <h4>{draftMovies.length}</h4>
       </div>
      </div>

     </div>

     {/* list movies */}
     <div className="moviecards flex flex-col gap-2 w-full">
      <div className="flex flex-sb w-full movietitle">
       <h2>List Of Latest Movies</h2>
       <Link href="/draft"><button>Add Movie</button></Link>
      </div>
      {loading ? <div><Spinner /></div> : <>
       {publishedMovies.slice(0, 3).map((movie) => {
        return <div className=" flex moviecard flex-col lg:flex-row h-auto lg:h-[15rem] w-full" key={movie._id}>
         <div className="w-full h-full lg:ml-2">
          <Image alt={movie.title}
           src={movie.bgposter || "/img/noimage.jpg"}
           width={200} height={200}
           className=" w-full max-h-full min-h-full  lg:rounded-2xl" />
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
      <Link href="/movies" className=" loadmorehomebtn flex flex-center w-100 mt-2">
       <button>Load More</button>
      </Link>
     </div>

    </div>
   }
  </>
 );
}
