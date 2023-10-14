import { useState } from "react"
import { countriesData } from "./data/countries"
export function Exercise2(){
    const [bool,setBool] = useState('white')
    const [count,setCount] = useState(1)
    return(
        <div style={{backgroundColor:bool}}>
            <button onClick={() => {
                if(bool === 'white'){
                    setBool('black')
                    
                } else return setBool('white')
            }}>Hit for magick</button>
            <h1>we break it down like newyork city</h1>
            <h2>{countriesData[count].name}</h2>
            <button onClick={()=> setCount(count+1)}>count up</button>
        </div>
    )
}