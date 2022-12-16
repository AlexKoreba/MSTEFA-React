import { useState, useEffect, useRef } from "react";
import { products } from "./../../helpers/productsList";

import "./DropDownMenu.css";


const DropDownMenu = () => {

    const [dropdownMenu, setDropDownMenu] = useState('close');
    const btnMenuRef = useRef(null);

    useEffect( () => {
        
        if (dropdownMenu === 'open') {
            btnMenuRef.current.classList.add('open');
        } else {
            btnMenuRef.current.classList.remove('open');
        }

    }, [dropdownMenu] );

    const toggleDropDownMenu = () => {
        setDropDownMenu( currentValue => currentValue === 'close' ? 'open' : 'close');
    }

    const Category = props => {
        return <li><a className="nav-menu-link" href={`./${props.category}.html`}>{props.category[0].toUpperCase() + props.category.slice(1)}</a></li>
    }


    return ( 

        <span className="nav-menu" ref={btnMenuRef}>

            <div className="nav-btn" onClick={toggleDropDownMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            <ul className="nav-list">

                {
                    Object.keys(products).sort().map( (category, index) => {
                        return <Category key={index} category={category} />
                    })
                }

                <Category key="100" category="certificates" />
                
            </ul>

        </span>
    );
}
 
export default DropDownMenu;