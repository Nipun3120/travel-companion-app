import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Home = ()=> {
     const navigate = useNavigate();

     useEffect(()=> {
          const uid = localStorage.getItem("uid");
          if(!uid) {
               navigate('/login')
          }
     }, [])
     // const uid = localStorage.getItem("uid");
     // if(!uid) {
     //      console.log("-----> ", uid)
     //      navigate('/login')
     // }
     return (
          <h1>This is home</h1>
     )
}