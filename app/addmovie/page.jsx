import Movie from "@/components/Movie";


export default function addmovie() {



 return <>
  <div className=" addblogpage containerr md:ml-80">
   <div className=" blogsadd">
    <div className=" titledashboard w-100 flex flex-sb">
     <div>
      <h2>Add movie</h2>
      <h3>Admin Panel</h3>
     </div>
    </div>
    <Movie />
   </div>
  </div>
 </>

}