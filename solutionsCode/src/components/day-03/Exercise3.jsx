import pfpLogo from '../../assets/asabeneh.jpg'
import { Card } from './Exercise3/card'
export function Exercise3(){
    return(
        <footer>
            <img id='pfp' height='75px' width='75px' style={{borderRadius:'50%'}} src={pfpLogo} alt="asabeneh" />
            <h2 style={{textTransform:"uppercase", fontWeight:'700'}}>Asabeneh YetaYeh</h2>
            <p>Senior Developer, Finland</p>
            <h3 style={{textTransform:"uppercase", fontWeight:'700'}}>Skills</h3>
            <div style={{display:'flex'}}>
                <Card name="HTML"/>
                <Card name="CSS"/>
                <Card name="Sass"/>
                <Card name="JS"/>
                <Card name="React"/>
                <Card name="Redux"/>
                <Card name="Node"/>
                <Card name="MongoDB"/>
                <Card name="Python"/>
                <Card name="Flask"/>
                <Card name="Django"/>
                <Card name="NumPy"/>
                <Card name="Pandas"/>
                <Card name="Data Analysis"/>
                <Card name="MYSQL"/>
                <Card name="GraphQL"/>
                <Card name="D3.js"/>
                <Card name="Gatsby"/>
                <Card name="Docker"/>
                <Card name="Heroku"/>
                <Card name="Git"/>
            </div>
        </footer>
    )
}