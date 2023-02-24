import React from 'react'
import { useState,useEffect } from "react"
import { userTypes } from "../../dto/userTypes";

const useFetch = (url: string) => {
    const [data,setData] = useState([])
    const [isLoading,setIsloading] = useState(true)

    useEffect(() => {
        (async () => {
            try{
                const res = await fetch(url,{});
                const dataRes = await res.json();
                setData(dataRes)
                setIsloading(false)
            } catch (e){
                setIsloading(true)
                console.log(e,"Try again later!")
            }
        } 
        )();
    },[])

    return {data,setData,isLoading}
}

export default useFetch;
