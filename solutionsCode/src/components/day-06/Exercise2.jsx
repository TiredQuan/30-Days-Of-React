import {manyArrays} from './Exercise2/arrays'
export function Exercise2() {
    return(
        
        <div style={{textAlign:'center'}}>
            <h1>30 days of react</h1>
            <h2>Number Generator</h2>
            <ul style={{display:'flex', gap:'20px'}}> {manyArrays(false)} </ul>
            <ul style={{display:'flex', gap:'20px'}}> {manyArrays(true)} </ul>
        </div>
        )
}