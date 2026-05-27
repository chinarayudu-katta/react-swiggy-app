import { LOGO_URL } from '../utils/constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
    const [login, setLogin] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const handleClick = () => {
        setLogin((prev) => prev === "Login" ? "Logout" : "Login")
    }

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
            <div className="logo-container">
                <img className="w-40" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex items-center p-4 m-4 gap-8">
                    <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li className="hover:text-blue-500"><Link to="/">Home</Link></li>
                    <li className="hover:text-blue-500"><Link to="/about">About Us</Link></li>
                    <li className="hover:text-blue-500"><Link to="/contact">Contact Us</Link></li>
                    <li className="hover:text-blue-500"><Link to="/grocery">Grocery</Link></li>
                    <li className="hover:text-blue-500">Cart</li>
                    <button className={`px-4 py-2 rounded-lg text-white font-semibold transition-all duration-300 ${
                login === "Login"
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-red-500 hover:bg-red-600"
            }`} onClick={handleClick}>{login}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header; 
