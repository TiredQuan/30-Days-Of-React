import { useState } from "react"
export function Exercise2(){
    let [second,setSecond] = useState(new Date().getSeconds())
    const interval = setInterval(()=>{
        setSecond(new Date().getSeconds()) //IT'S A FUCKING INTERVAL CONSTANT YOU FUCKING STUPID ESLINT
    },1000)
    return(
        <>
        <p>{second % 2 === 0 ? "odd" : "even"}</p>
        </>
    )
}