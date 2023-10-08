/*eslint-disable*/
export function ColorGen(props){
    return(
        <div style={{backgroundColor:props.color, width:'100vw', height:'50px', lineHeight:'50px', textAlign:'center'}}>
            <p>{props.color}</p>
        </div>
    )
}