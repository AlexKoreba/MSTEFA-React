import { useState } from "react";
import PropTypes from "prop-types";

import Heart from "./../heart/Heart";
import "./PhotoContentSlider.css";


const PhotoContentSlider = ({type, title}) => {

    const [activePhoto, setActivePhoto] = useState("02");

    const classActivePhoto = "secondary-photo-img secondary-photo-img-active";
    const classNormalPhoto = "secondary-photo-img";
    const changeActivePhoto = event => setActivePhoto(event.target.src.slice(-6,-4));

    const arrImgCode = [];
    for (let i = 1; i <= 5; i++) {
        arrImgCode.push(
            <img 
                key={i}
                className={ activePhoto === `0${i}` ? classActivePhoto : classNormalPhoto }
                src={`./../../img/products/${type}/${title.split(" ").join("-")}/0${i}.jpg`} 
                alt={`${title} 0${i}`}
                onClick={changeActivePhoto} 
            />
        )               
    }


    return ( 
        <section className="photo-content">
            <div className="main-photo" style={{backgroundImage: `url(./../../img/products/${type}/${title.split(" ").join("-")}/${activePhoto}.jpg)`}}>
                <Heart />
            </div> 
            <div className="secondary-photo">
                {arrImgCode}
            </div>
        </section>       
    );
}

PhotoContentSlider.propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};
 
export default PhotoContentSlider;