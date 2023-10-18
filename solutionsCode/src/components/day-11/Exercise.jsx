// const movingButton = document.getElementById('imHere')
function moveLikeMad(){
    document.getElementById('imHere').style.left=Math.floor(Math.random() * 99) + "vw"
    document.getElementById('imHere').style.top=Math.floor(Math.random() * 99) + "vh"
}


export function Exercise(){
    return(
        <div style={{width:'100vw', height:'100vh'}}>
            <button style={{
                position:'absolute',
                width:'100px',
                height:'30px'
                }} id="imHere" onMouseOver={moveLikeMad}>Click Me</button>
        </div>
    )
}