import {useCallback, useEffect, useState} from "react";

export async function sendHttpRequest(url, config){
    const response = fetch(url,config)
    const resData = await response.json()

    if(!response.ok){
        throw new Error(resData.message || 'Something went wrong try again later please')
    }
    return resData
}
export default function useHTTP(url, config, initialData){
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState(initialData)

    const sendRequest = useCallback(async function sendRequest(){
        setIsLoading(true)
        try{
            const resData =  await sendHttpRequest(url, config)
            setData(resData)
        }catch (error){
            setError(error.message || 'Something went wrong!')
        }
        setIsLoading(false)
    },[url, config])

    useEffect(()=>{
        if(config && (config.method ==='GET' || !config.method || !config)){
            sendRequest()
        }
    },[sendRequest, config])

    return {
        data,
        isLoading,
        error,
        sendRequest
    }
}