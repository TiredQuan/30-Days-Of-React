import htmlLogo from '../../assets/html.svg'
import cssLogo from '../../assets/css.svg'
import jsLogo from '../../assets/js.svg'
import reactLogo from '../../assets/react.svg'
import './Exercise2.css'

export function Exercise2(){
    return (
        <>
        <header style={{textAlign:'center'}}>
            <p>Front end Technologies</p>
            <div>
                <img width={150} height={200} src={htmlLogo} alt="html" />
                <img width={150} height={200} src={cssLogo} alt="css" />
                <img width={150} height={200} src={jsLogo} alt="js" />
                <img width={150} height={200} src={reactLogo} alt="react" />
            </div>
        </header>
        <main style={{textAlign:'center', backgroundColor:'#C2E6F4'}}>
            <h1 style={{textTransform:'uppercase'}}>
                Subscribe
            </h1>
            <p>Sign up with your email address to receive news and updates</p>
            <form action="" method="">
                <div>
                    <input className='input' type="text" placeholder='First name' name="First name" id="" />
                    <input className='input' type="text" placeholder='Last name' name="Last name" id="" />
                    <input className='input' type="email" placeholder='Email' name="Email" id="" />
                </div>
                <input className='submit' type="submit" value="Subscribe" />
            </form>
        </main>
        </>
    )
}