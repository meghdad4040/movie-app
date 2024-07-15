"use client"

import axios from "axios"
import { useState, useEffect } from "react"


const useFetchData = (apiEndPoint) => {
 const [alldata, setAlldata] = useState([])
 const [loading, setLoading] = useState(true)
 const [initialLoad, setInitialLoad] = useState(true)

 useEffect(() => {

  if (initialLoad) {
   setInitialLoad(false)
   setLoading(false)
   return;
  }

  setLoading(true)

  const fetchAllData = async () => {
   try {
    const res = await axios.get(apiEndPoint)
    const allData = res.data
    setAlldata(allData)
    setLoading(false)
   } catch (error) {
    console.log("error fetching movie data: ", error)
    setLoading(false)
   }
  }

  // fetch movie data only if category exists
  if (apiEndPoint) {
   fetchAllData()
  }

 }, [initialLoad, apiEndPoint]);

 return { alldata, loading }
}

export default useFetchData