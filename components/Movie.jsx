"use client"

import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useState } from "react";



export default function Movie({
 _id,
 title: existingTitle,
 slug: existingslug,
 bgposter: existingBgposter,
 smposter: existingSmposter,
 titlecategory: existingTitlecategory,
 description: existingDescription,
 rating: existingRating,
 duration: existingDuration,
 year: existingYear,
 genre: existingGenre,
 language: existingLanguage,
 subtitle: existingSubtitle,
 size: existingSize,
 quality: existingQuality,
 youtubelink: existingYoutubelink,
 category: existingqCategory,
 watchonline: existingWatchonline,
 downloadlink: existingDownloadlink,
 status: existingStatus,

}) {

 const router = useRouter()
 const [redirect, setRedirect] = useState(false)
 const [title, setTitle] = useState(existingTitle || "")
 const [slug, setSlug] = useState(existingslug || "")
 const [bgposter, setBgposter] = useState(existingBgposter || "")
 const [smposter, setSmposter] = useState(existingSmposter || "")
 const [titlecategory, setTitlecategory] = useState(existingTitlecategory || "")
 const [description, setDescription] = useState(existingDescription || "")
 const [rating, setRating] = useState(existingRating || "")
 const [duration, setDuration] = useState(existingDuration || "")
 const [year, setYear] = useState(existingYear || "")
 const [genre, setGenre] = useState(existingGenre || [])
 const [language, setLanguage] = useState(existingLanguage || "")
 const [subtitle, setSubtitle] = useState(existingSubtitle || "")
 const [size, setSize] = useState(existingSize || "")
 const [quality, setQuality] = useState(existingQuality || "")
 const [youtubelink, setYoutubelink] = useState(existingYoutubelink || "")
 const [category, setCategory] = useState(existingqCategory || "")
 const [watchonline, setWatchonline] = useState(existingWatchonline || "")
 const [downloadlink, setDownloadlink] = useState(existingDownloadlink || {
  "480p": "",
  "720p": "",
  "1080p": "",
  "4k": "",
 })
 // not use for database
 const [showInputs, setShowInputs] = useState({
  "480p": false,
  "720p": false,
  "1080p": false,
  "4k": false,
 })
 const [status, setStatus] = useState(existingStatus || "")

 // create movie
 const createMovie = async (e) => {
  e.preventDefault()
  const data = {
   title, slug, bgposter, smposter, titlecategory, description,
   rating, duration, year, genre, language, subtitle, size, quality,
   youtubelink, category, watchonline, downloadlink, status
  }

  if (_id) {
   await axios.put("/api/getmovies", { ...data, _id })
  } else {
   await axios.post("/api/getmovies", data)
  }

  setRedirect(true)
 }

 if (redirect) {
  router.push("/")
  return null
 }

 // Download link function
 const resolutions = ["480p", "720p", "1080p", "4K"]
 const handleInputChange = (resolution, value) => {
  setDownloadlink(prevstate => ({
   ...prevstate,
   [resolution]: value
  }))
 }
 const toggleInputVisibility = (resolution) => {
  setShowInputs(prevstate => ({
   ...prevstate,
   [resolution]: !prevstate[resolution]
  }))
 }

 // slug function, url for every space will be generate - for every time press space
 const handleSlugChange = (e) => {
  const inputValue = e.target.value;

  // Replace spaces with hyphens
  const newSlug = inputValue.replace(/\s+/g, "-");
  setSlug(newSlug)
 }

 // movie category
 const categories = ["Bollywood", "Hollywood", "South", "Gujarati", "Marvel_Studio", "Tv_Shows", "Web_Series"]

 // movie genre
 const genres = ['Action', 'Adventure', 'Animation', 'Comedy', 'Drama', 'Crime', 'Fantasy', 'Horror', 'Romance', 'Thriller', 'Science_Fiction']

 return <>
  <Head>
   <title>Add Movie page</title>
  </Head>

  <form className=" addmovieform" onSubmit={createMovie}>

   {/* preview bgposter and smposter image */}
   <div className="w-100 flex gap-3 mt-1">
    {bgposter ? <div className=" bgposter flex flex-col w-70 flex-left">
     <img src={bgposter} id="prv" alt="image" />
     <label className="w-100" htmlFor="prv">Background Image Preview</label>
    </div> : null}
    {smposter ? <div className=" smposter flex flex-col w-33 flex-left">
     <img src={smposter} id="prv" alt="image" />
     <label className="w-100" htmlFor="prv">Smposter Preview</label>
    </div> : null}
   </div>

   <div className=" formdata dark:bg-black dark:bg-opacity-25 w-100 flex flex-sb mt-3 flex-left">

    {/* for left side */}
    <div className=" w-50 flex flex-col flex-left">

     {/* movie background image */}
     <div className=" w-100 flex flex-col flex-left">
      <label htmlFor="bgposter">Background Poster</label>
      <input type="text" id="bgposter"
       placeholder="Bgposter image link"
       value={bgposter}
       onChange={e => setBgposter(e.target.value)} />
     </div>

     {/* movie title */}
     <div className=" w-100 flex flex-col flex-left mt-2">
      <label htmlFor="title">Movie Title</label>
      <input type="text" id="title"
       placeholder="title"
       value={title}
       onChange={e => setTitle(e.target.value)} />
     </div>

     {/* movie description */}
     <div className=" w-100 flex flex-col flex-left mt-2">
      <label htmlFor="description">Description</label>
      <textarea type="text" id="description"
       placeholder="description"
       value={description}
       onChange={e => setDescription(e.target.value)} />
     </div>

     {/* movie rating */}
     <div className=" w-100 flex flex-col flex-left mt-2">
      <label htmlFor="rating">rating</label>
      <input type="number" id="rating"
       placeholder="rating"
       value={rating}
       onChange={e => {
        let newValue = e.target.value <= 10.0 ? e.target.value : 10.0;
        newValue = newValue >= 0 ? newValue : 0;
        setRating(newValue)
       }}
       step="0.1"
       max="10.0"
       min="0"
      />
     </div>

     {/* movie duration */}
     <div className=" w-100 flex flex-col flex-left mt-2">
      <label htmlFor="duration">Duration</label>
      <input type="text" id="duration"
       placeholder="duration"
       value={duration}
       onChange={e => setDuration(e.target.value)} />
     </div>

     {/* movie watchonline */}
     <div className=" w-100 flex flex-col flex-left mt-2">
      <label htmlFor="watchonline">Watchonline</label>
      <input type="text" id="watchonline"
       placeholder="watchonline"
       value={watchonline}
       onChange={e => setWatchonline(e.target.value)} />
     </div>

     {/* movie downloadlink */}
     <div className=" w-100 flex flex-col flex-left mt-2">
      <label htmlFor="downloadlink">Download Link</label>
      <div className=" flex gap-1">
       <div className={showInputs["480p"] ? "dresolbtn active" : "dresolbtn"}
        onClick={() => toggleInputVisibility("480p")}>
        {showInputs["480p"] ? "Hide 480p" : "Show 480p"}
       </div>
       <div className={showInputs["720p"] ? "dresolbtn active" : "dresolbtn"}
        onClick={() => toggleInputVisibility("720p")}>
        {showInputs["720p"] ? "Hide 720p" : "Show 720p"}
       </div>
       <div className={showInputs["1080p"] ? "dresolbtn active" : "dresolbtn"}
        onClick={() => toggleInputVisibility("1080p")}>
        {showInputs["1080p"] ? "Hide 1080p" : "Show 1080p"}
       </div>
       <div className={showInputs["4K"] ? "dresolbtn active" : "dresolbtn"}
        onClick={() => toggleInputVisibility("4K")}>
        {showInputs["4K"] ? "Hide 4K" : "Show 4K"}
       </div>
      </div>
      {resolutions ? <>{resolutions.map(resolution => (
       <div key={resolution} className=" w-100 mb-1">
        {showInputs[resolution] && (
         <>
          <input type="text"
           id={`downloadlink${resolution}`}
           placeholder={`${resolution} Download link`}
           value={downloadlink[resolution]}
           onChange={e => handleInputChange(resolution, e.target.value)}
          />
         </>
        )}
       </div>
      ))}</> : null}
     </div>

     {/* movie status (Draft or Publish) */}
     <div className=" w-100 flex flex-col flex-left mb-2">
      <label htmlFor="status">Status</label>
      <div className=" flex gap-05">
       <input type="radio"
        id="draft"
        name="status"
        value="draft"
        checked={status === "draft"}
        onChange={(e) => setStatus(e.target.value)}
       />
       <label htmlFor="draft">Draft</label>
      </div>
      <div className=" flex gap-05">
       <input type="radio"
        id="publish"
        name="status"
        value="publish"
        checked={status === "publish"}
        onChange={(e) => setStatus(e.target.value)}
       />
       <label htmlFor="publish">Publish</label>
      </div>
     </div>

    </div>

    {/* for right side */}
    <div className=" w-50 flex flex-col flex-left">

     {/* movie small poster */}
     <div className=" w-100 flex flex-col flex-left mb-2">
      <label htmlFor="smposter">Main Poster</label>
      <input type="text"
       id="smposter"
       placeholder="smposter image link"
       value={smposter}
       onChange={e => setSmposter(e.target.value)}
      />
     </div>

     {/* movie slug url */}
     <div className=" w-100 flex flex-col flex-left mb-2">
      <label htmlFor="slug">Slug (url)</label>
      <input type="text"
       id="slug"
       placeholder="Url of the movie"
       value={slug}
       onChange={handleSlugChange}
      />
     </div>

     {/* Release year if the movie */}
     <div className=" w-100 flex flex-col flex-left mb-2">
      <label htmlFor="year">Release Year</label>
      <input type="text"
       id="year"
       placeholder="year"
       value={year}
       onChange={e => setYear(e.target.value)}
      />
     </div>

     {/* youtube embed link*/}
     <div className=" w-100 flex flex-col flex-left mb-2">
      <label htmlFor="youtubelink">youtube link</label>
      <input type="text"
       id="youtubelink"
       placeholder="youtubelink"
       value={youtubelink}
       onChange={e => setYoutubelink(e.target.value)}
      />
     </div>

     {/* language of the movie*/}
     <div className=" w-100 flex flex-col flex-left mb-2">
      <label htmlFor="language">language</label>
      <select onChange={(e) => setLanguage(e.target.value)} value={language} name="language" id="language">
       <option value="">Select language</option>
       <option value="English">English</option>
       <option value="Persian">Persian</option>
       <option value="Hindi(ORG)">Hindi(ORG)</option>
      </select>
     </div>

     {/* quality of the movie*/}
     <div className=" w-100 flex flex-col flex-left mb-2">
      <label htmlFor="quality">Movie Quality</label>
      <select onChange={(e) => setQuality(e.target.value)} value={quality} name="quality" id="quality">
       <option value="">Select Quality</option>
       <option value="480p || 720p || 1080 -  WEB-DL">480p || 720p || 1080 -  WEB-DL</option>
       <option value="480p || 720p || 1080 || 2160p -  WEB-DL">480p || 720p || 1080 || 2160p -  WEB-DL</option>
       <option value="480p || 720p || 1080 -  HDTC">480p || 720p || 1080 -  HDTC</option>
      </select>
     </div>

     {/* subtitle of the movie*/}
     <div className=" w-100 flex flex-col flex-left mb-2">
      <label htmlFor="subtitle">Movie Subtitle</label>
      <select onChange={(e) => setSubtitle(e.target.value)} value={subtitle} name="subtitle" id="subtitle">
       <option value="">Select Subtitle</option>
       <option value="Persian">Persian</option>
       <option value="English">English</option>
       <option value="Hindi(ORG)">Hindi(ORG)</option>
      </select>
     </div>

     {/* Size of the movie*/}
     <div className=" w-100 flex flex-col flex-left mb-2">
      <label htmlFor="size">Movie Size</label>
      <input type="text"
       id="size"
       placeholder="350MB || 1GB || 2GB || 4GB"
       value={size}
       onChange={e => setSize(e.target.value)}
      />
     </div>

     {/* category*/}
     <div className=" moviecategory flex flex-sb flex-left">

      {/* movie title category*/}
      <div className=" w-50 flex flex-col flex-left mb-2">
       <label htmlFor="">Title Category :</label>
       {["Movies", "Series", "Shows"].map((cat) => (
        <div key={cat} className="flex gap-05">
         <input type="radio"
          id={cat.toLowerCase()}
          name="titleCategory"
          value={cat.toLowerCase()}
          checked={titlecategory === cat.toLowerCase()}
          onChange={(e) => setTitlecategory(e.target.value)}
         />
         <label htmlFor={cat.toLowerCase()}>{cat}</label>
        </div>
       ))}
      </div>

      {/* movie  category*/}
      <div className=" w-50 flex flex-col flex-left mb-2">
       <label htmlFor="">Category :</label>
       {categories.map((cat) => (
        <div key={cat} className="flex gap-05">
         <input type="radio"
          id={cat.toLowerCase()}
          name="Category"
          value={cat.toLowerCase()}
          checked={category === cat.toLowerCase()}
          onChange={(e) => setCategory(e.target.value)}
         />
         <label htmlFor={cat.toLowerCase()}>{cat}</label>
        </div>
       ))}
      </div>

      {/* movie genre*/}
      <div className=" w-50 flex flex-col flex-left mb-2">
       <label htmlFor="">Genre :</label>
       {genres.map((genreOption) => (
        <label key={genreOption} className="flex gap-05">
         <input type="checkbox"
          value={genreOption.toLowerCase()}
          checked={genre.includes(genreOption.toLowerCase())}
          onChange={(e) => {
           const selectGenre = e.target.value;
           setGenre((preGenre) => {
            if (preGenre.includes(selectGenre)) {
             return preGenre.filter((genre) => genre !== selectGenre)
            } else {
             return [...preGenre, selectGenre]
            }
           })
          }}
         />
         {genreOption}
        </label>
       ))}
      </div>

     </div>
    </div>
   </div>

   {/* for save all data in mongodb for submit button */}
   <div className="w-100 mb-2">
    <button type="submit" className="w-100 flex-center">SAVE DATA</button>
   </div>

  </form>



 </>
}

