import { Navbar } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { Paths } from "../../Apis/types";
import AdrilLogo from "../../Assets/Andril-Logo.png";
import "./NavBarS.scss";

export const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
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
                <div
                    className="dropdown"
                    onClick={() => {
                        if (location.pathname !== Paths.dropMenu) {
                            navigate(Paths.dropMenu);
                        } else {
                            navigate(Paths.home);
                        }
                    }}
                >
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            </div>
        </Navbar>
    );
};
