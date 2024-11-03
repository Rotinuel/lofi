import { useState} from 'react';
import "./Navbar.css"
import closeIcon from '../../assets/closeIcon.png'
import menuIcon from '../../assets/menuIcon.png'

const Navbar = ({style}) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

  return (
    <nav className="navbar" style={style}>
        <div className="navbar-container">
            <div className="navbar-logo">
                <h1>Palatial Dwellings</h1>
            </div>
            <div className="navbar-icon" onClick={toggleMenu}>
                <img src={isMenuOpen ? closeIcon : menuIcon} alt="icon" />
            </div>
            <div className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
                <ul className="navbar-menuItems">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/properties">Properties</a></li>
                    <li><a href="/agent">Agent</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
                <p className="navbar-submit">
                    <a href="/">Submit a property</a>
                </p>
            </div>
        </div>
    </nav>
  )
}

export default Navbar