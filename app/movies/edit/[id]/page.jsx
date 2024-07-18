"use client"

import Movie from "@/components/Movie"
import axios from "axios"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function EditProduct() {

 const { id } = useParams()

 const [movieInfo, setMovieInfo] = useState(null)

 useEffect(() => {
  if (!id) {
   return
  } else {
   axios.get("/api/getmovies?id=" + id).then(res => {
    setMovieInfo(res.data)
   })
  }
 }, [id]);


 return <>

  <div className=" blogpage  md:ml-80">
   <div className=" titledashboard containerr flex flex-sb">
    <div className=" mb-2">
     <h2>Edit Movie: <span>{movieInfo?.title}</span></h2>
     <h3>ADMIN PANEL</h3>
    </div>
   </div>
   <div className=" mt-3 container">
    {
     movieInfo && (
      <Movie {...movieInfo} />
     )
    }
   </div>
  </div>

 </>
}
