import { useEffect, useState } from "react";
import { makeRequest } from "../makerequest";

function useFecht(url){
    
    const[data,setData] = useState(null)
    const [error , setError] = useState(false)
    const [loading , setLoading ] = useState(false)



    useEffect(()=>{
        const fetchData = async() =>{
            setLoading(true)

            try {
                const res = await makeRequest.get(url)
                setData(res.data.data)
                setLoading(false)
            }catch(error){
                setError(error)
                setLoading(false)

            }
        }
        fetchData()
    },[url])
    return(loading , error , data )
}
export default useFecht