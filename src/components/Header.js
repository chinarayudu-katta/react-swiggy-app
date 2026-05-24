import {LOGO_URL} from '../utils/constants';
import {useState} from 'react';

const Header = () => {
    const [login, setLogin] = useState("Login")
    const handleClick = () => {
        setLogin((prev)=> prev === "Login" ? "Logout" : "Login")
    }
    
        return (
            <div className="header">
                <div className="logo-container">
                    <img className="logo" src={LOGO_URL} />
                </div>
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Cart</li>
                        <button className="login" onClick={handleClick}>{login}</button>
                    </ul>
                </div>
            </div>
        )
    }
export default Header; 
