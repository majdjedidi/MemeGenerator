import logo from '../public/troll-face.png'
import './styles/navbar.css'
export default function Navbar(){
    return(
        <nav className='header'>
            <img src={logo} className='header--img'/>
            <h2 className='header--title'>MemeGenerator</h2>
            <h4 className='header--project'>React Course - Project 3</h4>
        </nav>
    )
}