import React from "react";
import dcLogo from '../assets/logos/logoDC.png';
import sayna from '../assets/logos/logo_sayna_white.png';
import cross from '../assets/logos/icon_x.png';
import bigDc from '../assets/logos/icon_DC.png';
import fb from '../assets/icones/facebook.png';
import ig from '../assets/icones/instagram.png';
import tw from '../assets/icones/twitter.png';
import wb from '../assets/icones/icon_WB.png';

const Footer = () => {
    return (
        <footer>
            <div className="project">
                <div className="dc"><img src={wb}alt="" /></div>
                <div><p>Ce projet respecte l’univers cinématographique des films Superman.</p></div>
            </div>
            <div className="footsoc">
                <div><img src={sayna} alt="" /></div>
                <div><img src={cross} alt="" /></div>
                <div><img src={bigDc} alt="" /></div>
                <div><img src={fb} alt="" /></div>
                <div><img src={ig} alt="" /></div>
                <div><img src={tw} alt="" /></div>
            </div>
        </footer>
    );
}
 
export default Footer;