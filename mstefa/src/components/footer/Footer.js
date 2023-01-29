import PropTypes from "prop-types";

import "./Footer.css";

import instagram from "./icons/instagram.svg";
import facebook from "./icons/facebook.svg";
import vk from "./icons/vk.svg";
import pay from "./icons/pay.png";

const Footer = ({storeName}) => {
    return ( 
        <footer className="footer">
            <div className="container">
                <nav className="nav">

                    <div className="footer-info">

                        <p>info@mstefa.com</p>
                        <p>+375 44 707-40-54</p>
                        <img src={pay} alt="Pay icon" />

                    </div>

                    <h2 className="footer-logo">
                        <a href="#!">{storeName}</a>
                    </h2>

                    <div className="footer-social">

                        <p>Social networks</p>

                        <div className="footer-social-icons">
    
                            <a href="https://www.instagram.com/mstefa.brand/" target="_blank" rel="noreferrer">
                                <img src={instagram} alt="Instagram icon" />
                            </a>
        
                            <a href="https://www.vk.com/" target="_blank" rel="noreferrer">
                                <img src={vk} alt="VK icon" />
                            </a>
        
                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                <img src={facebook} alt="Facebook icon" />
                            </a>

                        </div>
                    </div>
                    
                </nav>
            </div>
        </footer>
    );
};

Footer.propTypes = {
    storeName: PropTypes.string.isRequired
};
 
export default Footer;