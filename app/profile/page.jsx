
import Head from "next/head";
import { VscAccount } from "react-icons/vsc";

export default function profile() {


 return <>
  <Head>
   <title>Profile page</title>
  </Head>
  <div className=" container">
   <div className=" profilesettings">
    <div className=" dark:bg-blue-950 leftprofile_details flex">
     <img className="coderimg" src="/img/coder.jpg" alt="coder" />
     <div className="w-100 ">
      <div className="flex flex-sb mt-2 dark:*:text-gray-200">
       <h2>My Profile</h2>
       <h3>Meghdad Coder <br /> Web developer</h3>
      </div>
      <div className=" flex flex-sb mt-2 dark:*:text-gray-200">
       <h3>Phone:</h3>
       <input type="text" defaultValue={"+98-9355480436"} />
      </div>
      <div className=" mt-3 dark:*:text-gray-200">
       <input type="email" defaultValue={"meghdad.iran7777@gmail.com"} />
      </div>
      <div className=" flex flex-center w-100 mt-2 dark:*:text-gray-200">
       <button>Save</button>
      </div>
     </div>
    </div>
    <div className=" rightlogoutsec">
     <div className="dark:bg-blue-950 topaccoutnbox">
      <h2 className=" flex flex-sb">My Account<VscAccount /></h2>
      <hr />
      <div className="flex flex-sb mt-1">
       <h3>Active Account <br /> <span></span></h3>
       <button>Log In</button>
      </div>
     </div>
    </div>
   </div>
  </div>

 </>
}