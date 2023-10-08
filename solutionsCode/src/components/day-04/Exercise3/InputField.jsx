/*eslint-disable */
export function InputField(props){
    return(
        <input type={props.type} placeholder={props.placeholder} name={props.name} style={{width: '200px',height: '40px',paddingLeft: '10px' ,margin: '0 5px', border: 'none',borderRadius: '5px'}} />
    )
}