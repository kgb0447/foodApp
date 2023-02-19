import React from 'react'
import { useState,useEffect } from "react"
import { userTypes } from "../../dto/userTypes";

const useFetch = (url: string) => {
    const [data,setData] = useState([])

    useEffect(() => {
        (async () => {
            try{
                const res = await fetch(url,{});
                const dataRes = await res.json();
                setData(dataRes)
            } catch (e){
                console.log(e,"Try again later!")
            }
        } 
        )();
    },[])

    return {data,setData}
}

export default useFetch;
