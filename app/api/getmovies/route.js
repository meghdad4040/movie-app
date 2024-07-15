import { connectToDb } from "@/lib/mongoose";
import { Movie } from "@/models/Movie";


// export default async function handle(req, res) {
//  await connectToDb()
//  const { method } = req
//  if (method === "POST") {
//   const { title, slug, bgposter, smposter, titlecategory, description,
//    rating, duration, year, genre, language, subtitle, size, quality,
//    youtubelink, category, watchonline, downloadlink, status } = req.body

//   const movieData = await Movie.create({
//    title, slug, bgposter, smposter, titlecategory, description,
//    rating, duration, year, genre, language, subtitle, size, quality,
//    youtubelink, category, watchonline, downloadlink, status
//   })
//   res.json(movieData)
//  }

//  if (method === "GET") {
//   if (req.query?.id) {
//    res.json(await Movie.findById(req.query.id))
//   } else {
//    res.json((await Movie.find()).reverse())
//   }
//  }

//  if (method === "PUT") {
//   const { _id, title, slug, bgposter, smposter, titlecategory, description,
//    rating, duration, year, genre, language, subtitle, size, quality,
//    youtubelink, category, watchonline, downloadlink, status } = req.body;

//   await Movie.updateOne({ _id }, {
//    title, slug, bgposter, smposter, titlecategory, description,
//    rating, duration, year, genre, language, subtitle, size, quality,
//    youtubelink, category, watchonline, downloadlink, status
//   })
//   res.json(true)
//  }

//  if (method === "DELETE") {
//   if (req.query?.id) {
//    await Movie.deleteOne({ _id: req.query?.id })
//    res.json(true)
//   }
//  }
// }

connectToDb()

export const GET = async (req) => {

 const { searchParams } = new URL(req.url)
 const id = searchParams.get('id')

 if (id) {
  return Response.json(await Movie.findById(id))
 } else {
  return Response.json((await Movie.find()).reverse())
 }

}

export const PUT = async req => {
 const { _id, title, slug, bgposter, smposter, titlecategory, description,
  rating, duration, year, genre, language, subtitle, size, quality,
  youtubelink, category, watchonline, downloadlink, status } = await req.json();

 await Movie.updateOne({ _id }, {
  title, slug, bgposter, smposter, titlecategory, description,
  rating, duration, year, genre, language, subtitle, size, quality,
  youtubelink, category, watchonline, downloadlink, status
 })
 return Response.json(true);
};

export const POST = async req => {
 const { title, slug, bgposter, smposter, titlecategory, description,
  rating, duration, year, genre, language, subtitle, size, quality,
  youtubelink, category, watchonline, downloadlink, status } = await req.json()

 const movieData = await Movie.create({
  title, slug, bgposter, smposter, titlecategory, description,
  rating, duration, year, genre, language, subtitle, size, quality,
  youtubelink, category, watchonline, downloadlink, status
 })
 return Response.json(movieData);
}


export const DELETE = async (req) => {
 const { _id } = await req.json()
 await Movie.deleteOne(_id)
 return Response.json(true)
 // if (req.query?.id) {
 //  await Movie.deleteOne({ _id: req.query?.id })
 //  return Response.json(true);
 // }
}