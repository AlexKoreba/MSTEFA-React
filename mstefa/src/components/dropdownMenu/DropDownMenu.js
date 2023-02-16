import { useState } from "react";
import PropTypes from "prop-types";

import Category from "./../category/Category";

import "./DropDownMenu.css";


const DropDownMenu = ({categories}) => {

    const [openingMode, setOpeningMode] = useState('close');

    const toggleDropDownMenu = event => {
        event.stopPropagation();
        setOpeningMode( currentValue => currentValue === 'close' ? 'open' : 'close');
    };

    const closeDropDownMenu = () => setOpeningMode('close');


    return ( 

        <span className={openingMode === 'close' ? 'nav-menu' : 'nav-menu open'} onClick={closeDropDownMenu}>

            <div className="nav-btn" onClick={toggleDropDownMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            <ul className="nav-list">

                {
                    categories.sort().map( category => <Category key={category} category={category} workmode="forMenu" />)
                }

                <Category key="all products" category="all products" workmode="forMenu" />
                
            </ul>
        </span>
    );
}

DropDownMenu.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string.isRequired)
};
 
export default DropDownMenu;