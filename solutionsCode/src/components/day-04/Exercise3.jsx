import { ColorGen } from "./Exercise3/ColorGen";
import {InputField} from "./Exercise3/InputField"
import { Button } from "./Exercise3/Button";
const hexaColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
    }
    return '#' + color
  }
export function Exercise3(){
    return(
        <>
        <ColorGen color={hexaColor()}/>
        <ColorGen color={hexaColor()}/>
        <ColorGen color={hexaColor()}/>
        <ColorGen color={hexaColor()}/>
        <ColorGen color={hexaColor()}/>
        <InputField type="text" placeholder="lmaoitworked" name="lmaoitworked"/>
        <Button type='submit' value="subscribe"/>
        </>
    )
}