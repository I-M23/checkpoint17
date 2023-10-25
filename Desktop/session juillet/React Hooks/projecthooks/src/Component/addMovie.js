import { useState } from "react";



const AddMovie = ({AddNewMovie})=>{
    const [title,setTitle] = useState("");
    const [picture,setPicture] = useState("");
    const [rate,setRate] = useState("");

    const handelAdd = ()=>{
        AddNewMovie ({title , picture , rate})
    }

    return (
         <div>
         <input type = "text" placeholder="movie title" onChange={(event)=>setTitle(event.target.value)} />
         <input type = "text" placeholder="movie picture"onChange={(event)=>setPicture(event.target.value)}/>
         <input type = "text" placeholder="movie rate"onChange={(event)=>setRate(event.target.value)}/>
         <button onClick={()=>handelAdd()}> ADD </button>
        </div>
    )
}
export default AddMovie;