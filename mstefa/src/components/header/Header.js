import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import DropDownMenu from "./../dropdownMenu/DropDownMenu";
import Counter from "./../counter/Counter";

import "./Header.css";

import cart from "./icons/cart.svg";
import heart from "./icons/heart.svg";
import search from "./icons/search.svg";
import user from "./icons/user.svg";

const Header = ( {storeName, likesAmount, cartAmount, productsCategories} ) => {
    return ( 
        <header className="header">
            <div className="container">
                <nav className="nav" id="nav">

                    <DropDownMenu categories={productsCategories} />

                    <h1 className="logo">
                        <NavLink to="/">{storeName}</NavLink>
                    </h1>

                    <ul className="nav-icons">
                        <li>
                            {/* <NavLink to="/search"> */}
                                <img src={search} alt="Search's icon" />
                            {/* </NavLink> */}
                        </li>

                        <li>
                            <NavLink to="/likes" className="likes">
                                <img src={heart} alt="Heart's icon" />
                                <Counter value={likesAmount} />
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/cart" className="cart">
                                <img src={cart} alt="Cart's icon" />
                                <Counter value={cartAmount} />
                            </NavLink>
                        </li>

                        <li>
                            {/* <NavLink to="/user"> */}
                                <img src={user} alt="User's icon" />
                            {/* </NavLink> */}
                        </li>
                    </ul>

                </nav>
            </div>
        </header>
    );
};

Header.propTypes = {
    storeName: PropTypes.string.isRequired,
    likesAmount: PropTypes.number.isRequired,
    cartAmount: PropTypes.number.isRequired,
    productsCategories: PropTypes.arrayOf(PropTypes.string.isRequired)
};
 
export default Header;