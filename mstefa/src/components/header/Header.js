import "./Header.css";

import cart from "./icons/cart.svg";
import heart from "./icons/heart.svg";
import search from "./icons/search.svg";
import user from "./icons/user.svg";

const Header = (props) => {
    return ( 

        <header className="header">
            <div className="container">
                <nav className="nav" id="nav">

                    <span className="nav-menu">

                        <div className="nav-btn">
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>

                        <ul className="nav-list">
                            <li><a className="nav-menu-link" href="./bodysuits.html">Bodysuits</a></li>
                            <li><a className="nav-menu-link" href="./costumes.html">Costumes</a></li>
                            <li><a className="nav-menu-link" href="./dresses.html">Dresses</a></li>
                            <li><a className="nav-menu-link" href="./new.html">New</a></li>
                            <li><a className="nav-menu-link" href="./shirts.html">Shirts</a></li>
                            <li><a className="nav-menu-link" href="./skirts.html">Skirts</a></li>
                            <li><a className="nav-menu-link" href="./sweaters.html">Sweaters</a></li>

                            <li><a className="nav-menu-link" href="./certificates.html">Certificates</a></li>
                        </ul>

                    </span>

                    <h1 className="logo"><a href="#!">{props.storeName}</a></h1>

                    <ul className="nav-icons">
                        <li><a href="#!">
                            <img src={search} alt="Search's icon" />
                        </a></li>
                        <li><a href="./likes.html" className="likes">
                            <img src={heart} alt="Heart's icon" />
                            <span className="likes-counter">0</span>
                        </a></li>
                        <li><a href="./basket.html" className="cart">
                            <img src={cart} alt="Cart's icon" />
                            <span className="cart-counter">0</span>
                        </a></li>
                        <li><a href="#!">
                            <img src={user} alt="User's icon" />
                        </a></li>
                    </ul>

                </nav>
            </div>
        </header>
    );
}
 
export default Header;