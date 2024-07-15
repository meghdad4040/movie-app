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



export default function Home() {

 const { alldata, loading } = useFetchData("/api/getmovies")

 const publishedMovies = alldata.filter(ab => ab.status === "publish")
 const draftMovies = alldata.filter(ab => ab.status === "draft")


 return (
  <>
   {
    loading ? <Loading /> : <div className=" container">
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
     <div className=" fourcards flex flex-sb ">

      <div className=" fcard  dark:bg-gray-900 ">
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

      <div className=" fcard dark:bg-gray-900">
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

      <div className=" fcard dark:bg-gray-900">
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

      <div className=" fcard dark:bg-gray-900">
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
     <div className="moviecards flex flex-col flex-left gap-2 w-100">
      <div className="flex flex-sb w-100 movietitle">
       <h2>List Of Latest Movies</h2>
       <Link href="/draft/index.jsx"><button>Add Movie</button></Link>
      </div>
      {loading ? <div><Spinner /></div> : <>
       {publishedMovies.slice(0, 3).map((movie) => {
        return <div className=" moviecard" key={movie._id}>
         <img src={movie.bgposter || "/img/noimage.jpg"} alt="movie" />
         <div className=" moviecardinfo">
          <dir>
           <h3>{movie.title}</h3>
           <p>{movie.category}</p>
          </dir>
          <Link href="/">{movie.youtubelink}</Link>
          <div>
           <FcRating /> {movie.rating}
          </div>
          <div className="flex gap-2 mt-2">
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
