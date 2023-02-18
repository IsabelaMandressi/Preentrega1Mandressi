import Navbar from "../Navbar/Navbar"
import logoImg from "../../img/logo.png"
import { Link } from "react-router-dom"


const Header = () => {
    return (
        <div style={{ 
                display: "flex", 
                width: "100%", 
                height: "20vh", 
                justifyContent: "space-evenly", 
                alignItems: "center",
                backgroundColor: "black" }}>
            <Link to="/">
            <img src= {logoImg} alt="logo" height="131vh" />
            </Link>
            <Navbar />
        </div>
    )
}

export default Header