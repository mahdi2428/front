// import { createContext, useContext, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { useLocalStorage } from "./LocalStorage";
// import { useEffect } from "react";
// import { useNavigate } from 'react-router-dom'


// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {




//   function useFecht(url){
//     const [error , setError] = useState(null)
//     const [loading , setLoading ] = useState(true)
//     const [data,setData] = useState(null)
    
//     useEffect(()=>{
//         const fetchData = async() =>{
//             setLoading(true)

//             try {
//                 const res =await fetch(url)

//                 const json = await res.json()

//                 setData(json.data)
//                 console.log(json.data);
//                 setLoading(false)
//             }catch(error){
//                 setError(error)
//                 setLoading(false)

//             }
//         }
//         fetchData()
//     },[url])
//     return( data )
// }
  

//   const value = {
//     useFecht : useFecht , 
    
//   }
//   return <AuthContext.Provider value={value} >{children}</AuthContext.Provider>;
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };