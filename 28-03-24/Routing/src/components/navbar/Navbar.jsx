import {Link, NavLink} from "react-router-dom";
import "./Navbar.css"

function NavBar(props) {
    return ( 

        <>
            <div id="container">
                <span id="logo">Logo</span>
                <div className="navs">
                    <Link to={"/"}>
                        <div className="link">Home</div>
                    </Link>
                    <Link to={"/about"}>
                        <div className="link">About</div>
                    </Link>
                    <Link to={"/service"}>
                        <div className="link">Service</div>
                    </Link>
                </div>
            </div>
        </>
     );
}

export default NavBar;