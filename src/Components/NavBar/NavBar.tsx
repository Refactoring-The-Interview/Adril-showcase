import { Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AdrilLogo from "../../Assets/Andril-Logo.png";
import "./NavBarS.scss";

export const NavBar = () => {
    const navigate = useNavigate();
    return (
        <Navbar className="NavBar">
            <Navbar.Brand>
                <a
                    className="LogoContainer"
                    href="https://www.anduril.com/careers/"
                >
                    <img src={AdrilLogo} className="AdrilLogo" alt="logo" />
                </a>
            </Navbar.Brand>

            <div className="dropdownContainer">
                <div className="dropdown">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </Navbar>
    );
};
