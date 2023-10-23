import { useState } from "react"


export default function InputValidation(){
    const [value, setValue] = useState('')
    return(
        <>
        <input type="email" onChange={(e)=>{setValue(e.target.value)}} name="" id="" />
        <p>{(/^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/gm.test(value) ? 'Right' : 'Wrong')}</p>
        </>
    )
}