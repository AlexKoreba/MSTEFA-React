import { useState } from "react";

import Category from "./Category";
import products from "./../../helpers/productsList.json";

import "./DropDownMenu.css";

const DropDownMenu = () => {

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
                    Object.keys(products).sort().map( category => <Category key={category} category={category} />)
                }

                <Category key="certificates" category="certificates" />
                
            </ul>
        </span>
    );
}
 
export default DropDownMenu;