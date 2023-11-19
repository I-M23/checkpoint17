import axios from "axios";
import { useEffect,useState } from "react";



const UserList=()=>{
    const [user,setUser]=useState([]);
    console.log(user);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            setUser(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    return(
        <div>
            {user.map((element,index)=>{
                return(
                    <div key={index} style={{border:'1px solid red'}}>
                        <h2>
                            {element.name}                           
                        </h2>
                        <h3>
                        {element.phone}
                        </h3>
                    </div>

                )
            })}
        </div>
    )
}
export default UserList;
