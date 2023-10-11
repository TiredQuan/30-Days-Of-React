export function manyArrays(color){
    const ogArray = Array.from({ length: 31 }, (_, index) => index + 1); //an array from 1 to 31
    if(color === false){

        
        const newArray = ogArray.map(number => {
            if (number % 2 != 0) {
                return <p style={{backgroundColor:"green"}}>{number}</p>
            }
            else {
                return <p style={{backgroundColor:"yellow"}}>{number}</p>
            }
        })
        return newArray
    } else {
        // return '#' + color
        const newArray = ogArray.map(number => {
            let str = '0123456789abcdef'
            let color = ''
            for (let i = 0; i < 6; i++) {
                let index = Math.floor(Math.random() * str.length)
                color += str[index]
            }
            return <p style={{backgroundColor:"#" + color}}>{"#" + color}</p>
        })
        return newArray    }
}
